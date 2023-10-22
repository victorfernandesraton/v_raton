import Nullstack from 'nullstack'

class NotFound extends Nullstack {

  prepare({ page }) {
    page.title = 'Not Found'
  }

  render({ primaryColor = '#EBBCBA', secondaryColor = '#faf4ed' }) {
    return (
      <main class="flex items-center justify-center align-middle max-w-[900px] mx-auto py-32">
        <svg width="300" viewBox="0 0 485 288" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M136.96 287L129.66 264.7C129.753 265.3 129.853 266.027 129.96 266.88C130.08 267.72 130.193 268.66 130.3 269.7C130.407 270.727 130.493 271.82 130.56 272.98C130.627 274.14 130.66 275.327 130.66 276.54V287H125.08V259.28H133.26L140.34 281.46C140.193 280.62 140.04 279.62 139.88 278.46C139.733 277.287 139.607 275.98 139.5 274.54C139.393 273.1 139.34 271.553 139.34 269.9V259.28H144.92V287H136.96Z"
            fill={secondaryColor}
          />
          <path
            d="M158.984 265.06C161.171 265.06 163.031 265.527 164.564 266.46C166.098 267.393 167.271 268.707 168.084 270.4C168.898 272.08 169.304 274.053 169.304 276.32C169.304 278.68 168.891 280.713 168.064 282.42C167.251 284.113 166.078 285.413 164.544 286.32C163.011 287.227 161.158 287.68 158.984 287.68C156.824 287.68 154.971 287.233 153.424 286.34C151.891 285.447 150.711 284.153 149.884 282.46C149.071 280.767 148.664 278.733 148.664 276.36C148.664 274.107 149.071 272.133 149.884 270.44C150.711 268.747 151.891 267.427 153.424 266.48C154.971 265.533 156.824 265.06 158.984 265.06ZM158.984 269.72C157.691 269.72 156.731 270.253 156.104 271.32C155.491 272.373 155.184 274.053 155.184 276.36C155.184 278.707 155.491 280.407 156.104 281.46C156.731 282.513 157.691 283.04 158.984 283.04C160.278 283.04 161.231 282.513 161.844 281.46C162.471 280.407 162.784 278.693 162.784 276.32C162.784 274.027 162.471 272.353 161.844 271.3C161.231 270.247 160.278 269.72 158.984 269.72Z"
            fill={secondaryColor}
          />
          <path
            d="M192.889 285.76C192.062 286.293 191.062 286.747 189.889 287.12C188.715 287.493 187.395 287.68 185.929 287.68C183.155 287.68 181.095 286.973 179.749 285.56C178.402 284.133 177.729 282.2 177.729 279.76V270.12H173.269V265.76H177.729V261.16L184.049 260.4V265.76H190.889L190.269 270.12H184.049V279.76C184.049 280.813 184.289 281.567 184.769 282.02C185.249 282.473 186.015 282.7 187.069 282.7C187.815 282.7 188.495 282.613 189.109 282.44C189.735 282.253 190.295 282.02 190.789 281.74L192.889 285.76Z"
            fill={secondaryColor}
          />
          <path
            d="M229.837 263.96V271.3H239.557V276H229.837V287H223.258V259.28H241.478L240.798 263.96H229.837Z"
            fill={secondaryColor}
          />
          <path
            d="M254.922 265.06C257.109 265.06 258.969 265.527 260.502 266.46C262.035 267.393 263.209 268.707 264.022 270.4C264.835 272.08 265.242 274.053 265.242 276.32C265.242 278.68 264.829 280.713 264.002 282.42C263.189 284.113 262.015 285.413 260.482 286.32C258.949 287.227 257.095 287.68 254.922 287.68C252.762 287.68 250.909 287.233 249.362 286.34C247.829 285.447 246.649 284.153 245.822 282.46C245.009 280.767 244.602 278.733 244.602 276.36C244.602 274.107 245.009 272.133 245.822 270.44C246.649 268.747 247.829 267.427 249.362 266.48C250.909 265.533 252.762 265.06 254.922 265.06ZM254.922 269.72C253.629 269.72 252.669 270.253 252.042 271.32C251.429 272.373 251.122 274.053 251.122 276.36C251.122 278.707 251.429 280.407 252.042 281.46C252.669 282.513 253.629 283.04 254.922 283.04C256.215 283.04 257.169 282.513 257.782 281.46C258.409 280.407 258.722 278.693 258.722 276.32C258.722 274.027 258.409 272.353 257.782 271.3C257.169 270.247 256.215 269.72 254.922 269.72Z"
            fill={secondaryColor}
          />
          <path
            d="M276.026 265.76V280.3C276.026 281.327 276.213 282.033 276.586 282.42C276.973 282.807 277.506 283 278.186 283C278.84 283 279.493 282.793 280.146 282.38C280.8 281.967 281.346 281.407 281.786 280.7V265.76H288.106V287H282.586L282.306 284.52C281.586 285.56 280.64 286.347 279.466 286.88C278.293 287.413 277.066 287.68 275.786 287.68C273.733 287.68 272.206 287.087 271.206 285.9C270.206 284.7 269.706 283.093 269.706 281.08V265.76H276.026Z"
            fill={secondaryColor}
          />
          <path
            d="M293.691 287V265.76H299.211L299.651 268.22C300.597 267.153 301.597 266.36 302.651 265.84C303.704 265.32 304.904 265.06 306.251 265.06C308.064 265.06 309.491 265.613 310.531 266.72C311.571 267.827 312.091 269.387 312.091 271.4V287H305.771V273.22C305.771 272.353 305.711 271.667 305.591 271.16C305.471 270.64 305.257 270.273 304.951 270.06C304.657 269.833 304.251 269.72 303.731 269.72C303.291 269.72 302.857 269.82 302.431 270.02C302.017 270.207 301.611 270.48 301.211 270.84C300.811 271.2 300.411 271.633 300.011 272.14V287H293.691Z"
            fill={secondaryColor}
          />
          <path
            d="M329.755 256.66L336.075 257.32V287H330.475L330.155 284.66C329.568 285.487 328.788 286.2 327.815 286.8C326.842 287.387 325.662 287.68 324.275 287.68C322.515 287.68 321.055 287.207 319.895 286.26C318.748 285.313 317.888 283.993 317.315 282.3C316.755 280.593 316.475 278.6 316.475 276.32C316.475 274.133 316.815 272.193 317.495 270.5C318.175 268.807 319.148 267.48 320.415 266.52C321.682 265.547 323.188 265.06 324.935 265.06C325.882 265.06 326.762 265.227 327.575 265.56C328.388 265.893 329.115 266.38 329.755 267.02V256.66ZM326.635 269.68C325.542 269.68 324.662 270.2 323.995 271.24C323.328 272.267 322.995 273.973 322.995 276.36C322.995 278.107 323.135 279.467 323.415 280.44C323.695 281.4 324.082 282.073 324.575 282.46C325.068 282.847 325.635 283.04 326.275 283.04C326.982 283.04 327.622 282.82 328.195 282.38C328.782 281.94 329.302 281.34 329.755 280.58V271.42C329.315 270.873 328.848 270.447 328.355 270.14C327.862 269.833 327.288 269.68 326.635 269.68Z"
            fill={secondaryColor}
          />
          <path d="M34.7266 4.23828H16.9141V0H34.7266V4.23828Z" fill={primaryColor} />
          <path d="M106.797 4.23828H88.9844V0H106.797V4.23828Z" fill={primaryColor} />
          <path d="M226.914 4.23828H209.102V0H226.914V4.23828Z" fill={primaryColor} />
          <path d="M250.938 4.23828H233.125V0H250.938V4.23828Z" fill={primaryColor} />
          <path d="M274.961 4.23828H257.148V0H274.961V4.23828Z" fill={primaryColor} />
          <path d="M347.031 4.23828H329.219V0H347.031V4.23828Z" fill={primaryColor} />
          <path d="M419.102 4.23828H401.289V0H419.102V4.23828Z" fill={primaryColor} />
          <path d="M3.80859 61.0078H0.410156V24.5625H3.80859V61.0078Z" fill={primaryColor} />
          <path d="M51.8555 61.0078H48.457V24.5625H51.8555V61.0078Z" fill={primaryColor} />
          <path d="M75.8789 61.0078H72.4805V24.5625H75.8789V61.0078Z" fill={primaryColor} />
          <path d="M123.926 61.0078H120.527V24.5625H123.926V61.0078Z" fill={primaryColor} />
          <path d="M191.543 55.4414H186.484L197.129 24.5625H202.188L191.543 55.4414Z" fill={primaryColor} />
          <path d="M250.938 57.2383H233.125V53H250.938V57.2383Z" fill={primaryColor} />
          <path d="M282.969 24.5625H288.047L298.691 55.4414H293.613L282.969 24.5625Z" fill={primaryColor} />
          <path d="M316.113 61.0078H312.715V24.5625H316.113V61.0078Z" fill={primaryColor} />
          <path d="M364.16 61.0078H360.762V24.5625H364.16V61.0078Z" fill={primaryColor} />
          <path d="M388.184 61.0078H384.785V24.5625H388.184V61.0078Z" fill={primaryColor} />
          <path d="M436.23 61.0078H432.832V24.5625H436.23V61.0078Z" fill={primaryColor} />
          <path d="M3.80859 114.008H0.410156V77.5625H3.80859V114.008Z" fill={primaryColor} />
          <path d="M51.8555 114.008H48.457V77.5625H51.8555V114.008Z" fill={primaryColor} />
          <path d="M75.8789 114.008H72.4805V77.5625H75.8789V114.008Z" fill={primaryColor} />
          <path d="M123.926 114.008H120.527V77.5625H123.926V114.008Z" fill={primaryColor} />
          <path d="M154.844 110.238H137.031V106H154.844V110.238Z" fill={primaryColor} />
          <path d="M171.973 114.008H168.574V77.5625H171.973V114.008Z" fill={primaryColor} />
          <path d="M220.02 114.008H216.621V77.5625H220.02V114.008Z" fill={primaryColor} />
          <path d="M268.066 114.008H264.668V77.5625H268.066V114.008Z" fill={primaryColor} />
          <path d="M316.113 114.008H312.715V77.5625H316.113V114.008Z" fill={primaryColor} />
          <path d="M364.16 114.008H360.762V77.5625H364.16V114.008Z" fill={primaryColor} />
          <path d="M388.184 114.008H384.785V77.5625H388.184V114.008Z" fill={primaryColor} />
          <path d="M436.23 114.008H432.832V77.5625H436.23V114.008Z" fill={primaryColor} />
          <path d="M467.148 110.238H449.336V106H467.148V110.238Z" fill={primaryColor} />
          <path d="M3.80859 167.008H0.410156V130.562H3.80859V167.008Z" fill={primaryColor} />
          <path d="M34.7266 163.238H16.9141V159H34.7266V163.238Z" fill={primaryColor} />
          <path d="M58.75 163.238H40.9375V159H58.75V163.238Z" fill={primaryColor} />
          <path d="M154.844 163.238H137.031V159H154.844V163.238Z" fill={primaryColor} />
          <path d="M171.973 167.008H168.574V130.562H171.973V167.008Z" fill={primaryColor} />
          <path d="M220.02 167.008H216.621V130.562H220.02V167.008Z" fill={primaryColor} />
          <path d="M250.938 163.238H233.125V159H250.938V163.238Z" fill={primaryColor} />
          <path d="M268.066 167.008H264.668V130.562H268.066V167.008Z" fill={primaryColor} />
          <path d="M316.113 167.008H312.715V130.562H316.113V167.008Z" fill={primaryColor} />
          <path d="M347.031 163.238H329.219V159H347.031V163.238Z" fill={primaryColor} />
          <path d="M371.055 163.238H353.242V159H371.055V163.238Z" fill={primaryColor} />
          <path d="M467.148 163.238H449.336V159H467.148V163.238Z" fill={primaryColor} />
          <path d="M484.277 167.008H480.879V130.562H484.277V167.008Z" fill={primaryColor} />
          <path d="M75.8789 220.008H72.4805V183.562H75.8789V220.008Z" fill={primaryColor} />
          <path d="M106.797 216.238H88.9844V212H106.797V216.238Z" fill={primaryColor} />
          <path d="M123.926 220.008H120.527V183.562H123.926V220.008Z" fill={primaryColor} />
          <path d="M186.875 183.562H191.953L202.598 214.441H197.52L186.875 183.562Z" fill={primaryColor} />
          <path d="M226.914 216.238H209.102V212H226.914V216.238Z" fill={primaryColor} />
          <path d="M250.938 216.238H233.125V212H250.938V216.238Z" fill={primaryColor} />
          <path d="M274.961 216.238H257.148V212H274.961V216.238Z" fill={primaryColor} />
          <path d="M287.637 214.441H282.578L293.223 183.562H298.281L287.637 214.441Z" fill={primaryColor} />
          <path d="M388.184 220.008H384.785V183.562H388.184V220.008Z" fill={primaryColor} />
          <path d="M419.102 216.238H401.289V212H419.102V216.238Z" fill={primaryColor} />
          <path d="M436.23 220.008H432.832V183.562H436.23V220.008Z" fill={primaryColor} />
        </svg>
      </main>
    )
  }

}

export default NotFound
