self.context = {
  "environment": {
    "client": false,
    "server": true,
    "development": false,
    "production": true,
    "mode": "ssg",
    "key": "f79b44d5c8b7443ee558d9e5f07708446a626c2a",
    "name": ""
  },
  "project": {
    "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
    "type": "website",
    "display": "standalone",
    "orientation": "portrait",
    "scope": "/",
    "root": "/",
    "sitemap": true,
    "favicon": "/favicon-96x96.png",
    "disallow": [],
    "icons": {
      "16": "/favicon-16x16.png",
      "32": "/favicon-32x32.png",
      "36": "/android-icon-36x36.png",
      "48": "/android-icon-48x48.png",
      "57": "/apple-icon-57x57.png",
      "60": "/apple-icon-60x60.png",
      "70": "/ms-icon-70x70.png",
      "72": "/apple-icon-72x72.png",
      "76": "/apple-icon-76x76.png",
      "96": "/favicon-96x96.png",
      "114": "/apple-icon-114x114.png",
      "120": "/apple-icon-120x120.png",
      "144": "/ms-icon-144x144.png",
      "150": "/ms-icon-150x150.png",
      "152": "/apple-icon-152x152.png",
      "180": "/apple-icon-180x180.png",
      "192": "/android-icon-192x192.png",
      "310": "/ms-icon-310x310.png"
    }
  },
  "settings": {},
  "worker": {
    "enabled": true,
    "fetching": false,
    "preload": [
      "/",
      "/me",
      "/assets/feed.xml",
      "/blog/creating-this-blog",
      "/blog/me"
    ],
    "staleWhileRevalidate": [],
    "cacheFirst": [],
    "headers": {},
    "api": "",
    "cdn": "",
    "protocol": "https",
    "queues": {}
  }
};

async function load(event) {
    const response = await event.preloadResponse;
    if (response) return response;
    return fetch(event.request);
}


function match(serializedMatcher, url) {
    const matcher = JSON.parse(serializedMatcher);
    return new RegExp(matcher.source, matcher.flags).test(url.href);
}


function withAPI(url) {
    const fragments = url.split("?");
    let path = fragments[0];
    const query = fragments[1];
    if (path.includes(".")) return url;
    path += "/index.json";
    return query ? [
        url,
        `${path}?${query}`
    ] : [
        url,
        path
    ];
}
async function extractData(response) {
    const html = await response.clone().text();
    const stateLookup = '<meta name="nullstack" content="';
    const state = html.split("\n").find((line)=>line.indexOf(stateLookup) > -1).split(stateLookup)[1].slice(0, -2);
    const { instances , page  } = JSON.parse(decodeURIComponent(state));
    const json = JSON.stringify({
        instances,
        page
    });
    return new Response(json, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}


async function cacheFirst(event) {
    const cache = await caches.open(self.context.environment.key);
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) return cachedResponse;
    const response = await load(event);
    await cache.put(event.request, response.clone());
    return response;
}


async function staleWhileRevalidate(event) {
    const cache = await caches.open(self.context.environment.key);
    const cachedResponse = await cache.match(event.request);
    const networkResponsePromise = load(event);
    event.waitUntil(async function() {
        const networkResponse = await networkResponsePromise;
        await cache.put(event.request, networkResponse.clone());
    }());
    return cachedResponse || networkResponsePromise;
}


async function networkFirst(event) {
    const cache = await caches.open(self.context.environment.key);
    try {
        const networkResponse = await load(event);
        await cache.put(event.request, networkResponse.clone());
        return networkResponse;
    } catch (error) {
        return cache.match(event.request);
    }
}


async function networkDataFirst(event) {
    const cache = await caches.open(self.context.environment.key);
    const url = new URL(event.request.url);
    const api = `${url.pathname}/index.json`;
    try {
        const response = await load(event);
        const dataResponse = await extractData(response);
        await cache.put(api, dataResponse);
        return response;
    } catch (error) {
        const cachedDataResponse = await cache.match(url);
        return cachedDataResponse || cache.match(`/nullstack/${self.context.environment.key}/offline/index.html`);
    }
}


function install(event) {
    const urls = [
        "/",
        ...self.context.worker.preload.map(withAPI),
        "/manifest.webmanifest",
        `/client.js?fingerprint=${self.context.environment.key}`,
        `/client.css?fingerprint=${self.context.environment.key}`,
        ,
        `/nullstack/${self.context.environment.key}/offline/index.html`
    ].flat();
    event.waitUntil(async function() {
        const cache = await caches.open(self.context.environment.key);
        await cache.addAll([
            ...new Set(urls)
        ]);
        const homeResponse = await cache.match("/");
        const homeDataResponse = await extractData(homeResponse);
        await cache.put("/index.json", homeDataResponse);
        self.skipWaiting();
    }());
}
self.addEventListener("install", install);


function activate(event) {
    event.waitUntil(async function() {
        const cacheNames = await caches.keys();
        const cachesToDelete = cacheNames.filter((cacheName)=>cacheName !== self.context.environment.key);
        await Promise.all(cachesToDelete.map((cacheName)=>caches.delete(cacheName)));
        if ("navigationPreload" in self.registration) {
            await self.registration.navigationPreload.enable();
        }
        self.clients.claim();
    }());
}
self.addEventListener("activate", activate);


function staticStrategy(event) {
    event.waitUntil(async function() {
        if (event.request.method !== "GET") return;
        const url = new URL(event.request.url);
        for (const matcher of self.context.worker.staleWhileRevalidate){
            if (match(matcher, url)) {
                return event.respondWith(staleWhileRevalidate(event));
            }
        }
        for (const matcher of self.context.worker.cacheFirst){
            if (match(matcher, url)) {
                return event.respondWith(cacheFirst(event));
            }
        }
        if (url.origin !== location.origin) return;
        if (url.pathname.indexOf("/nullstack/") > -1) {
            return event.respondWith(networkFirst(event));
        }
        if (url.searchParams?.get("fingerprint") === self.context.environment.key) {
            return event.respondWith(cacheFirst(event));
        }
        if (url.pathname.indexOf(".") > -1) {
            return event.respondWith(staleWhileRevalidate(event));
        }
        if (url.pathname === "/") {
            return event.respondWith(networkFirst(event));
        }
        event.respondWith(networkDataFirst(event));
    }());
}
self.addEventListener("fetch", staticStrategy);
