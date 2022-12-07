export const MAX_SCORE = 5.00

export const BAR_WIDTH = 460

export const BAR_COLOR = {
  RED: {
    START: '#ff9a9d',
    END: '#ff5a5f',
  },
  YELLOW: {
    START: '#f2d088',
    END: '#f9c353',
  },
  BLUE: {
    START: '#70b6d6',
    END: '#009ee8',
  },
}

export const THEME = {
  BLUE: 'blue',
  BLACK: 'black',
  PINK: 'pink',
  GREEN: 'green',
  GRAY: 'gray',
}
export const PRESET_COLORS = {
  BLUE: {
    icon: {
      first: "#03102f",
      second: "#1688bf",
    },
    background: {
      first: "#020e27",
      second: "#0e5593",
    },
  },
  BLACK: {
    icon: {
      first: '#212121',
      second: '#818181',
    },
    background: {
      first: '#232323',
      second: '#6d6d6d',
    }
  },
  PINK: {
    icon: {
      first: "#f97f90",
      second: "#ffc7cd",
    },
    background: {
      first: "#f08d9a",
      second: "#ffcfd5",
    },
  },
  GRAY: {
    icon: {
      first: '#888888',
      second: '#cccccc',
    },
    background: {
      first: '#767676',
      second: '#e1e1e1',
    }
  },
  GREEN: {
    icon: {
      first: '#007b5c',
      second: '#00bf8f',
    },
    background: {
      first: '#004736',
      second: '#00bf8f',
    }
  }
};

export const LANGUAGES = {
  EN:'en' as const,
  JA:'ja' as const
} as const

export const ENGINEERING_SVG_EN = `
<path d="M37.123 148H47.9715V145.107H40.5759V140.511H46.6184V137.595H40.5759V133.605H47.7149V130.736H37.123V148Z" fill="white"/>
<path d="M51.1965 148H54.626V139.018C55.5825 138.085 56.2591 137.571 57.3323 137.571C58.5921 137.571 59.1754 138.248 59.1754 140.301V148H62.6049V139.858C62.6049 136.592 61.3684 134.632 58.5688 134.632C56.7957 134.632 55.4426 135.565 54.3227 136.685H54.2527L53.9728 134.959H51.1965V148Z" fill="white"/>
<path d="M70.715 153.669C75.0777 153.669 77.8539 151.686 77.8539 149.05C77.8539 146.74 76.1275 145.784 72.978 145.784H70.7383C69.2218 145.784 68.6853 145.387 68.6853 144.71C68.6853 144.174 68.8952 143.894 69.2452 143.567C69.8284 143.777 70.4117 143.871 70.9249 143.871C73.7479 143.871 75.9875 142.401 75.9875 139.438C75.9875 138.645 75.7309 137.921 75.381 137.478H77.6206V134.959H72.908C72.3714 134.749 71.6715 134.632 70.9249 134.632C68.172 134.632 65.6524 136.265 65.6524 139.345C65.6524 140.884 66.5156 142.121 67.4254 142.774V142.867C66.6089 143.427 65.9556 144.314 65.9556 145.294C65.9556 146.367 66.4689 147.067 67.1455 147.51V147.627C65.9323 148.28 65.2791 149.236 65.2791 150.333C65.2791 152.619 67.6587 153.669 70.715 153.669ZM70.9249 141.771C69.7818 141.771 68.8719 140.884 68.8719 139.345C68.8719 137.805 69.7818 136.965 70.9249 136.965C72.0914 136.965 72.978 137.805 72.978 139.345C72.978 140.884 72.0681 141.771 70.9249 141.771ZM71.2516 151.499C69.3385 151.499 68.1253 150.893 68.1253 149.796C68.1253 149.26 68.382 148.747 68.9885 148.257C69.4551 148.397 69.9917 148.443 70.785 148.443H72.3714C73.7712 148.443 74.5411 148.7 74.5411 149.633C74.5411 150.636 73.2113 151.499 71.2516 151.499Z" fill="white"/>
<path d="M80.0628 148H83.4923V134.959H80.0628V148ZM81.7659 132.835C82.9557 132.835 83.7723 132.089 83.7723 130.946C83.7723 129.826 82.9557 129.103 81.7659 129.103C80.5761 129.103 79.7829 129.826 79.7829 130.946C79.7829 132.089 80.5761 132.835 81.7659 132.835Z" fill="white"/>
<path d="M87.1484 148H90.5779V139.018C91.5344 138.085 92.211 137.571 93.2842 137.571C94.544 137.571 95.1273 138.248 95.1273 140.301V148H98.5568V139.858C98.5568 136.592 97.3203 134.632 94.5207 134.632C92.7476 134.632 91.3945 135.565 90.2746 136.685H90.2046L89.9247 134.959H87.1484V148Z" fill="white"/>
<path d="M107.787 148.327C109.396 148.327 111.03 147.79 112.313 146.903L111.17 144.78C110.213 145.364 109.28 145.69 108.23 145.69C106.294 145.69 104.894 144.594 104.59 142.447H112.663C112.733 142.121 112.803 141.514 112.803 140.861C112.803 137.245 110.96 134.632 107.343 134.632C104.264 134.632 101.278 137.245 101.278 141.491C101.278 145.807 104.124 148.327 107.787 148.327ZM104.544 140.161C104.824 138.248 106.037 137.268 107.413 137.268C109.093 137.268 109.886 138.388 109.886 140.161H104.544Z" fill="white"/>
<path d="M121.343 148.327C122.952 148.327 124.586 147.79 125.869 146.903L124.726 144.78C123.769 145.364 122.836 145.69 121.786 145.69C119.85 145.69 118.45 144.594 118.146 142.447H126.219C126.289 142.121 126.359 141.514 126.359 140.861C126.359 137.245 124.516 134.632 120.899 134.632C117.82 134.632 114.834 137.245 114.834 141.491C114.834 145.807 117.68 148.327 121.343 148.327ZM118.1 140.161C118.38 138.248 119.593 137.268 120.969 137.268C122.649 137.268 123.442 138.388 123.442 140.161H118.1Z" fill="white"/>
<path d="M129.206 148H132.636V140.231C133.359 138.341 134.595 137.641 135.599 137.641C136.159 137.641 136.508 137.735 136.975 137.851L137.558 134.912C137.162 134.725 136.742 134.632 136.042 134.632C134.689 134.632 133.266 135.542 132.332 137.268H132.262L131.982 134.959H129.206V148Z" fill="white"/>
<path d="M139.39 148H142.82V134.959H139.39V148ZM141.093 132.835C142.283 132.835 143.1 132.089 143.1 130.946C143.1 129.826 142.283 129.103 141.093 129.103C139.904 129.103 139.11 129.826 139.11 130.946C139.11 132.089 139.904 132.835 141.093 132.835Z" fill="white"/>
<path d="M146.476 148H149.905V139.018C150.862 138.085 151.538 137.571 152.612 137.571C153.871 137.571 154.455 138.248 154.455 140.301V148H157.884V139.858C157.884 136.592 156.648 134.632 153.848 134.632C152.075 134.632 150.722 135.565 149.602 136.685H149.532L149.252 134.959H146.476V148Z" fill="white"/>
<path d="M165.994 153.669C170.357 153.669 173.133 151.686 173.133 149.05C173.133 146.74 171.407 145.784 168.257 145.784H166.018C164.501 145.784 163.965 145.387 163.965 144.71C163.965 144.174 164.175 143.894 164.525 143.567C165.108 143.777 165.691 143.871 166.204 143.871C169.027 143.871 171.267 142.401 171.267 139.438C171.267 138.645 171.01 137.921 170.66 137.478H172.9V134.959H168.187C167.651 134.749 166.951 134.632 166.204 134.632C163.451 134.632 160.932 136.265 160.932 139.345C160.932 140.884 161.795 142.121 162.705 142.774V142.867C161.888 143.427 161.235 144.314 161.235 145.294C161.235 146.367 161.748 147.067 162.425 147.51V147.627C161.212 148.28 160.558 149.236 160.558 150.333C160.558 152.619 162.938 153.669 165.994 153.669ZM166.204 141.771C165.061 141.771 164.151 140.884 164.151 139.345C164.151 137.805 165.061 136.965 166.204 136.965C167.371 136.965 168.257 137.805 168.257 139.345C168.257 140.884 167.347 141.771 166.204 141.771ZM166.531 151.499C164.618 151.499 163.405 150.893 163.405 149.796C163.405 149.26 163.661 148.747 164.268 148.257C164.734 148.397 165.271 148.443 166.064 148.443H167.651C169.051 148.443 169.82 148.7 169.82 149.633C169.82 150.636 168.491 151.499 166.531 151.499Z" fill="white"/>
`
export const BUSINESS_SVG_EN = `
<path d="M37.123 226H43.2822C47.0616 226 49.9545 224.39 49.9545 220.914C49.9545 218.604 48.5781 217.275 46.735 216.831V216.738C48.2048 216.201 49.068 214.592 49.068 213.005C49.068 209.786 46.3617 208.736 42.8156 208.736H37.123V226ZM40.5759 215.758V211.395H42.6289C44.7053 211.395 45.7085 211.979 45.7085 213.495C45.7085 214.895 44.7753 215.758 42.5823 215.758H40.5759ZM40.5759 223.34V218.324H42.9789C45.3585 218.324 46.595 219.048 46.595 220.727C46.595 222.5 45.3119 223.34 42.9789 223.34H40.5759Z" fill="white"/>
<path d="M56.6191 226.327C58.3922 226.327 59.6287 225.463 60.7718 224.134H60.8418L61.0984 226H63.8981V212.959H60.4919V221.754C59.6053 222.92 58.9054 223.387 57.8323 223.387C56.5491 223.387 55.9892 222.687 55.9892 220.681V212.959H52.5597V221.101C52.5597 224.39 53.7962 226.327 56.6191 226.327Z" fill="white"/>
<path d="M71.3104 226.327C74.6933 226.327 76.4897 224.507 76.4897 222.197C76.4897 219.794 74.6 218.908 72.8735 218.254C71.4737 217.765 70.2839 217.391 70.2839 216.458C70.2839 215.688 70.8205 215.175 72.0103 215.175C72.9669 215.175 73.9001 215.641 74.8099 216.295L76.373 214.242C75.2999 213.402 73.8067 212.632 71.917 212.632C68.9308 212.632 67.0644 214.288 67.0644 216.598C67.0644 218.814 68.9074 219.794 70.5639 220.447C71.917 220.961 73.2935 221.427 73.2935 222.384C73.2935 223.2 72.6869 223.784 71.3804 223.784C70.1673 223.784 69.0707 223.247 67.8809 222.337L66.3411 224.507C67.6243 225.58 69.5607 226.327 71.3104 226.327Z" fill="white"/>
<path d="M79.1287 226H82.5582V212.959H79.1287V226ZM80.8318 210.835C82.0216 210.835 82.8382 210.089 82.8382 208.946C82.8382 207.826 82.0216 207.103 80.8318 207.103C79.642 207.103 78.8488 207.826 78.8488 208.946C78.8488 210.089 79.642 210.835 80.8318 210.835Z" fill="white"/>
<path d="M86.2143 226H89.6438V217.018C90.6003 216.085 91.2769 215.571 92.3501 215.571C93.6099 215.571 94.1931 216.248 94.1931 218.301V226H97.6227V217.858C97.6227 214.592 96.3862 212.632 93.5866 212.632C91.8135 212.632 90.4603 213.565 89.3405 214.685H89.2705L88.9906 212.959H86.2143V226Z" fill="white"/>
<path d="M106.853 226.327C108.462 226.327 110.095 225.79 111.379 224.903L110.235 222.78C109.279 223.364 108.346 223.69 107.296 223.69C105.359 223.69 103.96 222.594 103.656 220.447H111.729C111.799 220.121 111.869 219.514 111.869 218.861C111.869 215.245 110.025 212.632 106.409 212.632C103.33 212.632 100.344 215.245 100.344 219.491C100.344 223.807 103.19 226.327 106.853 226.327ZM103.61 218.161C103.89 216.248 105.103 215.268 106.479 215.268C108.159 215.268 108.952 216.388 108.952 218.161H103.61Z" fill="white"/>
<path d="M118.449 226.327C121.832 226.327 123.628 224.507 123.628 222.197C123.628 219.794 121.738 218.908 120.012 218.254C118.612 217.765 117.422 217.391 117.422 216.458C117.422 215.688 117.959 215.175 119.149 215.175C120.105 215.175 121.039 215.641 121.948 216.295L123.511 214.242C122.438 213.402 120.945 212.632 119.055 212.632C116.069 212.632 114.203 214.288 114.203 216.598C114.203 218.814 116.046 219.794 117.702 220.447C119.055 220.961 120.432 221.427 120.432 222.384C120.432 223.2 119.825 223.784 118.519 223.784C117.306 223.784 116.209 223.247 115.019 222.337L113.48 224.507C114.763 225.58 116.699 226.327 118.449 226.327Z" fill="white"/>
<path d="M130 226.327C133.383 226.327 135.179 224.507 135.179 222.197C135.179 219.794 133.289 218.908 131.563 218.254C130.163 217.765 128.973 217.391 128.973 216.458C128.973 215.688 129.51 215.175 130.7 215.175C131.656 215.175 132.59 215.641 133.499 216.295L135.063 214.242C133.989 213.402 132.496 212.632 130.607 212.632C127.62 212.632 125.754 214.288 125.754 216.598C125.754 218.814 127.597 219.794 129.253 220.447C130.607 220.961 131.983 221.427 131.983 222.384C131.983 223.2 131.376 223.784 130.07 223.784C128.857 223.784 127.76 223.247 126.57 222.337L125.031 224.507C126.314 225.58 128.25 226.327 130 226.327Z" fill="white"/>
`

export const INFLUENCE_SVG_EN = `
<path d="M37.123 305H40.5759V287.736H37.123V305Z" fill="white"/>
<path d="M44.5438 305H47.9733V296.018C48.9299 295.085 49.6064 294.571 50.6796 294.571C51.9394 294.571 52.5227 295.248 52.5227 297.301V305H55.9522V296.858C55.9522 293.592 54.7157 291.632 51.9161 291.632C50.143 291.632 48.7899 292.565 47.67 293.685H47.6L47.3201 291.959H44.5438V305Z" fill="white"/>
<path d="M60.0495 305H63.479V290.839C63.479 289.392 64.0389 288.762 65.0655 288.762C65.5087 288.762 65.9987 288.879 66.4419 289.066L67.0952 286.499C66.5119 286.289 65.6254 286.079 64.5989 286.079C61.3327 286.079 60.0495 288.179 60.0495 290.885V305ZM58.2998 294.641H65.952V291.959H60.2595L58.2998 292.099V294.641ZM71.3646 305.327C72.1811 305.327 72.741 305.187 73.1143 305.047L72.7177 302.504C72.4844 302.55 72.3911 302.55 72.2511 302.55C71.9245 302.55 71.5745 302.294 71.5745 301.477V286.406H68.145V301.337C68.145 303.764 68.9849 305.327 71.3646 305.327Z" fill="white"/>
<path d="M79.4023 305.327C81.1754 305.327 82.4119 304.463 83.555 303.134H83.625L83.8816 305H86.6812V291.959H83.2751V300.754C82.3885 301.92 81.6886 302.387 80.6154 302.387C79.3323 302.387 78.7724 301.687 78.7724 299.681V291.959H75.3429V300.101C75.3429 303.39 76.5794 305.327 79.4023 305.327Z" fill="white"/>
<path d="M96.0534 305.327C97.6631 305.327 99.2962 304.79 100.579 303.903L99.4362 301.78C98.4797 302.364 97.5465 302.69 96.4966 302.69C94.5602 302.69 93.1604 301.594 92.8571 299.447H100.929C100.999 299.121 101.069 298.514 101.069 297.861C101.069 294.245 99.2262 291.632 95.6101 291.632C92.5305 291.632 89.5443 294.245 89.5443 298.491C89.5443 302.807 92.3905 305.327 96.0534 305.327ZM92.8105 297.161C93.0904 295.248 94.3036 294.268 95.6801 294.268C97.3598 294.268 98.1531 295.388 98.1531 297.161H92.8105Z" fill="white"/>
<path d="M103.917 305H107.346V296.018C108.303 295.085 108.979 294.571 110.053 294.571C111.312 294.571 111.896 295.248 111.896 297.301V305H115.325V296.858C115.325 293.592 114.089 291.632 111.289 291.632C109.516 291.632 108.163 292.565 107.043 293.685H106.973L106.693 291.959H103.917V305Z" fill="white"/>
<path d="M124.392 305.327C125.838 305.327 127.448 304.837 128.685 303.764L127.331 301.501C126.608 302.084 125.722 302.55 124.765 302.55C122.899 302.55 121.546 300.941 121.546 298.491C121.546 296.018 122.875 294.432 124.905 294.432C125.605 294.432 126.235 294.711 126.888 295.271L128.498 293.078C127.541 292.238 126.328 291.632 124.695 291.632C121.149 291.632 118.046 294.152 118.046 298.491C118.046 302.807 120.799 305.327 124.392 305.327Z" fill="white"/>
<path d="M136.038 305.327C137.648 305.327 139.281 304.79 140.564 303.903L139.421 301.78C138.464 302.364 137.531 302.69 136.481 302.69C134.545 302.69 133.145 301.594 132.842 299.447H140.914C140.984 299.121 141.054 298.514 141.054 297.861C141.054 294.245 139.211 291.632 135.595 291.632C132.515 291.632 129.529 294.245 129.529 298.491C129.529 302.807 132.375 305.327 136.038 305.327ZM132.795 297.161C133.075 295.248 134.288 294.268 135.665 294.268C137.344 294.268 138.138 295.388 138.138 297.161H132.795Z" fill="white"/>
`

export const ENGINEERING_SVG_JA = `
<path d="M44.3663 131.824V134.5H57.9657V131.824H44.3663ZM44.8042 137.42V140.072H55.1923V137.42H44.8042ZM49.6212 128.345V138.855H52.4919V128.345H49.6212ZM47.9669 139.536L45.3394 140.291C47.5533 145.764 51.2268 149.511 57.0656 151.214C57.4548 150.46 58.282 149.292 58.9145 148.708C53.4163 147.346 49.7185 144.037 47.9669 139.536ZM54.9004 137.42V137.882C53.4163 143.551 48.8427 147.127 42.9553 148.513C43.5148 149.122 44.2203 150.362 44.5123 151.141C50.9835 149.243 55.8735 145.302 57.8197 138.077L55.9465 137.323L55.4356 137.42H54.9004ZM35.6569 140.704L36.411 143.502C38.6735 142.918 41.5686 142.164 44.269 141.434L43.9041 138.758C40.9361 139.512 37.7977 140.266 35.6569 140.704ZM35.9731 132.968V135.693H44.05V132.968H35.9731ZM38.7709 128.345V147.954C38.7709 148.294 38.6492 148.416 38.3086 148.416C37.9924 148.416 36.9706 148.416 36.0218 148.392C36.3624 149.146 36.7516 150.314 36.8246 151.068C38.5762 151.068 39.744 150.971 40.5711 150.533C41.3983 150.095 41.6416 149.365 41.6416 147.978V128.345H38.7709Z" fill="white"/>
<path d="M66.9914 138.563C66.8454 141.556 66.5292 144.621 65.6534 146.567C66.2129 146.883 67.186 147.565 67.5996 147.93C68.5971 145.716 69.0836 142.285 69.3269 138.904L66.9914 138.563ZM66.7725 133.527V136.203H75.8711V133.527H66.7725ZM70.0081 128.71V150.8H72.7328V128.71H70.0081ZM73.1707 139.025C73.633 141.337 74.0465 144.329 74.1439 146.3L76.382 145.862C76.2604 143.867 75.8225 140.947 75.3116 138.612L73.1707 139.025ZM76.7226 129.659V132.214H82.537V129.659H76.7226ZM76.1144 136.544V139.147H82.902V136.544H76.1144ZM72.9031 129.805C73.5113 130.876 74.1925 132.311 74.4601 133.211L76.4794 132.311C76.1874 131.411 75.4576 130.024 74.8007 129.002L72.9031 129.805ZM78.231 137.274V148.003C78.231 148.294 78.1337 148.367 77.8174 148.392C77.5011 148.392 76.4794 148.392 75.5062 148.343C75.8712 149.17 76.2117 150.362 76.2847 151.165C77.9147 151.165 79.0825 151.117 79.9339 150.679C80.8097 150.216 81.0044 149.414 81.0044 148.051V137.274H78.231ZM63.9747 128.345C63.1476 129.902 61.4446 131.849 59.8633 133.016C60.3255 133.552 61.031 134.598 61.3716 135.206C63.2692 133.746 65.3128 131.435 66.6022 129.319L63.9747 128.345ZM62.661 138.782V151.19H65.3371V136.617L64.9478 136.495L62.661 138.782ZM64.5343 133.479C63.4152 136.033 61.5176 138.539 59.5957 140.169C60.1066 140.801 60.8851 142.237 61.177 142.845C63.4152 140.777 65.7263 137.493 67.1374 134.379L64.5343 133.479Z" fill="white"/>
<path d="M85.4807 133.406V136.398H104.116V133.406H85.4807ZM102.924 133.406V133.99C102.51 142.967 102.024 146.81 101.172 147.638C100.832 147.954 100.54 148.051 100.053 148.051C99.3964 148.051 97.961 148.027 96.404 147.905C96.9636 148.757 97.3772 150.07 97.4258 150.922C98.9098 150.995 100.418 151.019 101.343 150.873C102.413 150.727 103.119 150.46 103.824 149.535C104.919 148.246 105.405 144.548 105.892 134.817C105.941 134.403 105.965 133.406 105.965 133.406H102.924ZM92.9494 128.394V133.406C92.9494 138.101 92.2683 144.84 84.7022 148.951C85.4321 149.462 86.5268 150.606 86.9891 151.311C95.2606 146.64 96.0391 138.928 96.0391 133.406V128.394H92.9494Z" fill="white"/>
<path d="M44.3663 131.824V134.5H57.9657V131.824H44.3663ZM44.8042 137.42V140.072H55.1923V137.42H44.8042ZM49.6212 128.345V138.855H52.4919V128.345H49.6212ZM47.9669 139.536L45.3394 140.291C47.5533 145.764 51.2268 149.511 57.0656 151.214C57.4548 150.46 58.282 149.292 58.9145 148.708C53.4163 147.346 49.7185 144.037 47.9669 139.536ZM54.9004 137.42V137.882C53.4163 143.551 48.8427 147.127 42.9553 148.513C43.5148 149.122 44.2203 150.362 44.5123 151.141C50.9835 149.243 55.8735 145.302 57.8197 138.077L55.9465 137.323L55.4356 137.42H54.9004ZM35.6569 140.704L36.411 143.502C38.6735 142.918 41.5686 142.164 44.269 141.434L43.9041 138.758C40.9361 139.512 37.7977 140.266 35.6569 140.704ZM35.9731 132.968V135.693H44.05V132.968H35.9731ZM38.7709 128.345V147.954C38.7709 148.294 38.6492 148.416 38.3086 148.416C37.9924 148.416 36.9706 148.416 36.0218 148.392C36.3624 149.146 36.7516 150.314 36.8246 151.068C38.5762 151.068 39.744 150.971 40.5711 150.533C41.3983 150.095 41.6416 149.365 41.6416 147.978V128.345H38.7709Z" fill="white"/>
<path d="M66.9914 138.563C66.8454 141.556 66.5292 144.621 65.6534 146.567C66.2129 146.883 67.186 147.565 67.5996 147.93C68.5971 145.716 69.0836 142.285 69.3269 138.904L66.9914 138.563ZM66.7725 133.527V136.203H75.8711V133.527H66.7725ZM70.0081 128.71V150.8H72.7328V128.71H70.0081ZM73.1707 139.025C73.633 141.337 74.0465 144.329 74.1439 146.3L76.382 145.862C76.2604 143.867 75.8225 140.947 75.3116 138.612L73.1707 139.025ZM76.7226 129.659V132.214H82.537V129.659H76.7226ZM76.1144 136.544V139.147H82.902V136.544H76.1144ZM72.9031 129.805C73.5113 130.876 74.1925 132.311 74.4601 133.211L76.4794 132.311C76.1874 131.411 75.4576 130.024 74.8007 129.002L72.9031 129.805ZM78.231 137.274V148.003C78.231 148.294 78.1337 148.367 77.8174 148.392C77.5011 148.392 76.4794 148.392 75.5062 148.343C75.8711 149.17 76.2117 150.362 76.2847 151.165C77.9147 151.165 79.0825 151.117 79.9339 150.679C80.8097 150.216 81.0044 149.414 81.0044 148.051V137.274H78.231ZM63.9747 128.345C63.1476 129.902 61.4446 131.849 59.8633 133.016C60.3255 133.552 61.031 134.598 61.3716 135.206C63.2692 133.746 65.3128 131.435 66.6022 129.319L63.9747 128.345ZM62.661 138.782V151.19H65.3371V136.617L64.9478 136.495L62.661 138.782ZM64.5343 133.479C63.4152 136.033 61.5176 138.539 59.5957 140.169C60.1066 140.801 60.8851 142.237 61.177 142.845C63.4152 140.777 65.7263 137.493 67.1374 134.379L64.5343 133.479Z" fill="white"/>
<path d="M85.4807 133.406V136.398H104.116V133.406H85.4807ZM102.924 133.406V133.99C102.51 142.967 102.024 146.81 101.172 147.638C100.832 147.954 100.54 148.051 100.053 148.051C99.3964 148.051 97.961 148.027 96.404 147.905C96.9636 148.757 97.3772 150.07 97.4258 150.922C98.9098 150.995 100.418 151.019 101.343 150.873C102.413 150.727 103.119 150.46 103.824 149.535C104.919 148.246 105.405 144.548 105.892 134.817C105.941 134.403 105.965 133.406 105.965 133.406H102.924ZM92.9494 128.394V133.406C92.9494 138.101 92.2683 144.84 84.7022 148.951C85.4321 149.462 86.5268 150.606 86.9891 151.311C95.2606 146.64 96.0391 138.928 96.0391 133.406V128.394H92.9494Z" fill="white"/>
`

export const BUSINESS_SVG_JA = `
<path d="M52.9541 207.294L51.0322 208.097C51.6891 209.046 52.4189 210.481 52.9298 211.479L54.876 210.627C54.4138 209.727 53.5623 208.194 52.9541 207.294ZM55.8248 206.2L53.9029 207.002C54.5598 207.927 55.3626 209.338 55.8492 210.36L57.7954 209.508C57.3575 208.657 56.4574 207.124 55.8248 206.2ZM42.4444 208.365H38.8682C38.9655 209.095 39.0385 210.335 39.0385 210.895C39.0385 212.403 39.0385 221.332 39.0385 224.129C39.0385 226.246 40.2792 227.389 42.3714 227.778C43.4175 227.949 44.9015 228.046 46.4828 228.046C49.1589 228.046 52.8325 227.9 55.1436 227.56V224.008C53.1244 224.543 49.2076 224.835 46.6531 224.835C45.5827 224.835 44.5853 224.81 43.8554 224.689C42.7607 224.494 42.2741 224.227 42.2741 223.156C42.2741 221.332 42.2741 212.379 42.2741 210.895C42.2741 210.189 42.3471 209.095 42.4444 208.365ZM40.8387 215.833L40.8631 219.02C44.1717 218.242 48.94 216.807 51.8107 215.712C52.6135 215.396 53.7083 214.933 54.6327 214.544L53.3434 211.479C52.3702 212.038 51.5431 212.427 50.6916 212.792C48.1372 213.839 43.9771 215.152 40.8387 215.833Z" fill="white"/>
<path d="M77.0632 208.34L75.0197 209.168C75.9198 210.433 76.455 211.479 77.1849 213.011L79.2771 212.087C78.7419 210.968 77.7444 209.362 77.0632 208.34ZM80.4205 207.148L78.3526 208.024C79.2527 209.241 79.8366 210.189 80.6151 211.722L82.7073 210.798C82.1235 209.727 81.1747 208.121 80.4205 207.148ZM66.5048 207.854L64.7289 210.53C66.3345 211.43 68.889 213.084 70.227 214.033L72.0516 211.333C70.7866 210.457 68.1105 208.73 66.5048 207.854ZM62.0042 225.127L63.8288 228.338C65.9696 227.949 69.4729 226.732 71.93 225.321C75.9198 223.035 79.3501 219.945 81.6126 216.588L79.7393 213.279C77.7931 216.758 74.4115 220.091 70.2757 222.402C67.6239 223.862 64.7046 224.665 62.0042 225.127ZM62.7583 213.401L60.9824 216.101C62.6367 216.953 65.1425 218.607 66.5292 219.556L68.3051 216.831C67.0644 215.955 64.3883 214.276 62.7583 213.401Z" fill="white"/>
<path d="M97.6934 207.148H94.2145C94.3118 207.732 94.3361 208.608 94.3361 209.386C94.3361 210.238 94.3361 211.357 94.3361 212.087H97.5231C97.5231 211.357 97.5231 210.116 97.5231 209.386C97.5231 208.632 97.5961 207.708 97.6934 207.148ZM104.481 212.355L102.462 210.408C101.902 210.554 101.197 210.627 100.442 210.627C99.0071 210.627 91.2222 210.627 90.1274 210.627C89.3002 210.627 87.9379 210.603 87.0134 210.481V213.668C87.7919 213.595 89.3246 213.547 90.2004 213.547C91.2222 213.547 97.6934 213.547 99.0071 213.547C98.2773 214.544 96.769 215.979 94.8957 217.171C92.8035 218.534 89.6895 220.212 84.9942 221.259L86.8674 224.129C90.6383 222.986 94.3605 221.38 96.9879 219.507C99.2018 217.95 101.245 215.931 102.608 214.374C103.119 213.79 103.873 212.987 104.481 212.355ZM97.4745 217.658L94.3118 218.972C94.3118 220.431 94.3118 223.424 94.3118 225.297C94.3118 226.246 94.2145 227.706 94.1415 228.387H97.6204C97.5474 227.633 97.4745 226.246 97.4745 225.297C97.4745 223.326 97.4745 219.41 97.4745 217.658ZM104.846 224.348L106.865 221.672C104.53 220.091 103.265 219.361 101.026 218.169L99.0315 220.48C101.124 221.672 102.729 222.694 104.846 224.348Z" fill="white"/>
<path d="M128.249 210.53L126.279 209.046C125.768 209.216 124.819 209.338 123.749 209.338C122.678 209.338 116.45 209.338 115.161 209.338C114.455 209.338 112.947 209.265 112.29 209.168V212.646C112.825 212.598 114.164 212.476 115.161 212.476C116.207 212.476 122.411 212.476 123.433 212.476C122.873 214.203 121.389 216.612 119.783 218.437C117.496 220.967 113.75 223.935 109.809 225.394L112.339 228.022C116.11 226.246 119.783 223.229 122.508 220.091C124.6 217.658 126.401 214.349 127.398 212.038C127.617 211.527 128.055 210.798 128.249 210.53ZM122.824 218.072L120.537 220.334C123.141 222.694 125.792 225.589 127.593 228.095L130.366 225.686C128.785 223.74 125.33 220.115 122.824 218.072Z" fill="white"/>
<path d="M134.137 211.406V214.398H152.772V211.406H134.137ZM151.58 211.406V211.99C151.167 220.967 150.68 224.81 149.828 225.638C149.488 225.954 149.196 226.051 148.709 226.051C148.053 226.051 146.617 226.027 145.06 225.905C145.62 226.757 146.033 228.07 146.082 228.922C147.566 228.995 149.074 229.019 149.999 228.873C151.069 228.727 151.775 228.46 152.48 227.535C153.575 226.246 154.062 222.548 154.548 212.817C154.597 212.403 154.621 211.406 154.621 211.406H151.58ZM141.606 206.394V211.406C141.606 216.101 140.924 222.84 133.358 226.951C134.088 227.462 135.183 228.606 135.645 229.311C143.917 224.64 144.695 216.928 144.695 211.406V206.394H141.606Z" fill="white"/>
`

export const INFLUENCE_SVG_JA = `
<path d="M35.8272 292.885V295.098H50.0104V292.885H35.8272ZM41.5686 291.449V294.125H44.2203V291.449H41.5686ZM40.0602 297.969H45.753V299.453H40.0602V297.969ZM37.5544 296.096V301.326H48.4048V296.096H37.5544ZM40.0116 289.26H45.899V290.233H40.0116V289.26ZM40.0116 286.778H45.899V287.727H40.0116V286.778ZM37.4085 285.148V291.839H48.5994V285.148H37.4085ZM41.5686 300.086V304.635C41.5686 304.903 41.4956 304.951 41.2037 304.951C40.8874 304.976 39.9143 304.976 39.0141 304.927C39.3791 305.535 39.8899 306.484 40.0602 307.165C41.3983 307.165 42.3714 307.141 43.1986 306.776C44.0014 306.411 44.2203 305.827 44.2203 304.708V300.086H41.5686ZM38.0653 301.691C37.5301 302.956 36.5813 304.294 35.5352 305.17C36.1191 305.511 37.1409 306.168 37.6274 306.581C38.6735 305.535 39.817 303.905 40.4981 302.324L38.0653 301.691ZM44.9745 302.762C45.8746 303.832 46.9451 305.316 47.4316 306.265L49.6941 305.073C49.1589 304.149 48.0398 302.713 47.1397 301.691L44.9745 302.762ZM54.9733 284.735C53.7083 286.584 51.2511 288.481 49.1833 289.552C49.9131 290.087 50.7646 290.987 51.2511 291.62C53.5866 290.233 56.0681 288.141 57.7467 285.854L54.9733 284.735ZM55.4112 291.522C54.0489 293.42 51.4458 295.366 49.2806 296.485C50.0347 297.045 50.8862 297.921 51.3728 298.553C53.7569 297.118 56.36 295.001 58.136 292.666L55.4112 291.522ZM55.9221 298.139C54.4381 301.059 51.4944 303.419 48.4048 304.757C49.1346 305.414 50.0104 306.435 50.4483 307.19C53.9516 305.389 56.9196 302.713 58.8172 299.137L55.9221 298.139Z" fill="white"/>
<path d="M68.816 287.216V288.652H73.8762V287.216H68.816ZM63.0259 295.585V297.361H80.3718V295.585H63.0259ZM65.3857 303.321V304.489H77.6714V303.321H65.3857ZM65.3857 305.219V306.654H77.6714V305.219H65.3857ZM60.4228 298.626V300.499H82.5857V298.626H60.4228ZM60.0336 291.133L60.4472 293.152C62.2231 292.933 64.3396 292.666 66.5292 292.374L66.4562 290.646C64.0477 290.841 61.7122 291.036 60.0336 291.133ZM66.9914 292.763L67.5023 294.758C69.4729 294.49 71.93 294.15 74.3628 293.76L74.2898 292.057C71.5651 292.325 68.8647 292.617 66.9914 292.763ZM66.0669 289.698C65.3128 292.349 63.1232 294.004 60.1552 294.928C60.5688 295.342 61.2257 296.242 61.4689 296.68C64.7289 295.439 67.2104 293.347 68.2321 290.014L66.0669 289.698ZM80.3718 285.002V285.319C80.0069 286.462 79.4717 288.043 78.8148 289.625C80.0556 290.549 80.5421 291.23 80.5421 291.741C80.5421 292.082 80.4448 292.301 80.2015 292.447C80.0556 292.52 79.8366 292.544 79.6177 292.568C79.2771 292.568 78.7905 292.544 78.2553 292.52C78.6202 293.031 78.8878 293.882 78.9122 294.466C79.496 294.515 80.1772 294.49 80.6394 294.442C81.0287 294.393 81.4909 294.247 81.8315 294.028C82.4884 293.639 82.8046 293.006 82.8046 292.057C82.8046 291.279 82.3181 290.257 81.1017 289.235C81.6612 288.092 82.2694 286.9 82.8046 285.659L81.0774 284.881L80.7368 285.002H80.3718ZM60.3012 287.97C61.4689 288.7 62.9529 289.795 63.6341 290.573L64.8505 288.7C64.1207 287.995 62.6367 286.973 61.4689 286.316L60.3012 287.97ZM63.3179 284.297C62.88 285.319 62.0285 286.778 61.3473 287.727L62.9043 288.384C63.6341 287.508 64.5099 286.243 65.3371 285.051L63.3179 284.297ZM65.556 286.17C64.5829 287.849 62.88 290.087 61.5176 291.498L63.0746 292.252C64.4613 290.938 66.1642 288.822 67.5266 287.022L65.556 286.17ZM75.7738 285.002V295.196H78.1093V286.973H81.0287V285.002H75.7738ZM68.0132 285.027V293.444H70.2514V285.027H68.0132ZM68.889 285.027V286.486H72.7328V289.406H68.889V290.89H74.971V285.027H68.889ZM69.9594 294.49V296.68H72.7328V294.49H69.9594ZM63.8531 301.18V307.214H66.5048V302.616H76.7956V307.19H79.5933V301.18H63.8531ZM66.0183 297.556C66.4075 298.018 66.7481 298.699 66.8698 299.161L69.3269 298.504C69.2053 298.042 68.7917 297.41 68.3781 296.923L66.0183 297.556ZM71.7354 291.498C72.7572 292.471 73.8519 293.858 74.2898 294.831L76.0171 293.858C75.5306 292.885 74.4115 291.547 73.341 290.622L71.7354 291.498ZM74.8007 296.631C74.5574 297.191 74.0709 298.018 73.6816 298.602L75.7495 299.234C76.1874 298.748 76.7956 298.091 77.4525 297.312L74.8007 296.631Z" fill="white"/>
<path d="M85.4807 289.406V292.398H104.116V289.406H85.4807ZM102.924 289.406V289.99C102.51 298.967 102.024 302.81 101.172 303.638C100.832 303.954 100.54 304.051 100.053 304.051C99.3964 304.051 97.961 304.027 96.404 303.905C96.9636 304.757 97.3772 306.07 97.4258 306.922C98.9098 306.995 100.418 307.019 101.343 306.873C102.413 306.727 103.119 306.46 103.824 305.535C104.919 304.246 105.405 300.548 105.892 290.817C105.941 290.403 105.965 289.406 105.965 289.406H102.924ZM92.9494 284.394V289.406C92.9494 294.101 92.2683 300.84 84.7022 304.951C85.4321 305.462 86.5268 306.606 86.9891 307.311C95.2606 302.64 96.0391 294.928 96.0391 289.406V284.394H92.9494Z" fill="white"/>
`

export const LANG_TEXT_SVG_PATH = {
  en: {
    engineering: ENGINEERING_SVG_EN,
    business: BUSINESS_SVG_EN,
    influence: INFLUENCE_SVG_EN,
  },
  ja: {
    engineering: ENGINEERING_SVG_JA,
    business: BUSINESS_SVG_JA,
    influence: INFLUENCE_SVG_JA,
  }
}

export const LANG_TEXT = {
  en: {
    engineering: 'Engineering',
    business: 'Business',
    influence: 'Influence',
  },
  ja: {
    engineering: '技術力',
    business: 'ビジネス力',
    influence: '影響力',
  }
}