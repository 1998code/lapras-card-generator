import { LANG_TEXT_SVG_PATH } from './../const';
import { BAR_COLOR, BAR_WIDTH, MAX_SCORE } from "../const";

const getBarColor = (score: number, position: 'START' | 'END') => {
  if (score >= 3.5) {
    return BAR_COLOR.RED[position]
  } else if (score >= 3.2) {
    return BAR_COLOR.YELLOW[position]
  } else {
    return BAR_COLOR.BLUE[position]
  }
}

const computeBarWidth = (score: number) => {
  return Math.max(Math.min(BAR_WIDTH * score / MAX_SCORE, BAR_WIDTH), 0)
}

const formatScore = (score: number) => {
  return Number(Math.max(Math.min(score, MAX_SCORE), 0)).toPrecision(3)
}

export const generateScoreCardSvg = ( { score, theme, lang, isAnimation, rounded }:  { score: Score, theme: Theme, lang: 'en' | 'ja', isAnimation: boolean, rounded: boolean}) => {
  return `
    <svg width="624" height="388" viewBox="0 0 624 388" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="624" height="388" ${ rounded ? 'rx="34"' : '' } fill="url(#card-background)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M320.496 29.5028C317.76 24.4894 319.519 18.1622 324.421 15.3665C335.368 9.12698 346.87 3.98831 358.74 0L482.088 0C501.591 6.53501 520.109 16.1274 536.713 28.4675C560.849 46.4138 579.017 66.5409 590.71 88.2918C593.415 93.321 591.615 99.6429 586.692 102.397C585.139 103.274 583.457 103.684 581.805 103.684C578.215 103.684 574.738 101.74 572.881 98.2976C562.639 79.2425 546.446 61.4014 524.748 45.2734C494.713 22.9444 457.707 10.6526 420.537 10.6526C390.377 10.6526 360.573 18.5564 334.334 33.5124C329.431 36.3082 323.233 34.5109 320.496 29.5028ZM607 164.387C606.993 158.794 602.646 154.177 597.14 154.007C597.016 154.007 596.898 154.002 596.78 154.002C591.26 154.002 586.831 158.469 586.661 164.081C586.451 171.307 585.813 178.717 584.794 186.1C580.453 217.4 568.858 249.277 551.276 278.275C551.255 278.309 551.233 278.343 551.212 278.376C551.187 278.415 551.162 278.454 551.137 278.491C549.389 281.546 547.497 284.596 545.501 287.815L545.391 287.992C536.878 301.681 527.238 317.21 528.334 335.088C530.318 361.44 537.214 375.132 545.778 388H569.802C569.505 386.749 568.972 385.535 568.194 384.423L567.505 383.441L567.5 383.433C557.297 368.849 550.55 359.205 548.627 333.648C547.953 322.649 555.046 311.219 562.562 299.127C564.589 295.869 566.682 292.501 568.627 289.116C587.644 257.717 600.205 223.107 604.933 189.017C606.064 180.877 606.754 172.7 606.996 164.712C606.998 164.612 607 164.513 607 164.414C607 164.405 607 164.396 607 164.387ZM514.559 388C507.051 377.27 500.19 366.751 493.843 355.757C491.95 352.472 488.561 350.643 485.073 350.643C483.319 350.643 481.544 351.106 479.919 352.083C475.073 355 473.468 361.364 476.323 366.309C480.555 373.645 485.107 380.906 489.8 388H514.559ZM458.297 388C440.253 358.55 425.467 326.575 419.796 290.872C418.988 285.764 414.678 282.138 409.765 282.138C409.225 282.138 408.68 282.185 408.129 282.274C402.584 283.194 398.819 288.528 399.719 294.198C405.156 328.437 418.501 359.732 434.621 388H458.297ZM398.76 388C385.35 374.093 373.942 367.94 364.925 363.077C363.603 362.368 362.327 361.674 361.082 360.985C344.676 351.844 326.652 354.281 310.73 356.435L310.692 356.44C305.651 357.128 300.882 357.775 296.371 358.037C272.868 358.826 271.953 352.162 271.196 346.345C270.888 343.838 269.592 336.565 261.912 302.548C260.826 297.745 256.649 294.487 252.02 294.487C251.264 294.487 250.487 294.576 249.715 294.755C244.242 296.043 240.832 301.624 242.092 307.215C249.612 340.533 250.831 347.485 251.022 349.009C252.771 362.425 259.473 380.098 297.184 378.806C297.223 378.803 297.263 378.802 297.303 378.8C297.341 378.799 297.38 378.798 297.42 378.795C302.704 378.486 308.106 377.753 313.324 377.046L313.367 377.04L313.371 377.039C327.459 375.132 340.765 373.33 351.345 379.231C352.601 379.93 353.889 380.624 355.218 381.341L355.429 381.454L355.456 381.469C359.059 383.413 362.807 385.435 366.775 388H398.76ZM323.984 77.9182C320.754 73.2201 321.854 66.7406 326.448 63.4404C351.283 45.5834 380.887 36.1505 411.324 36.1505C417.275 36.1505 423.258 36.5079 429.24 37.2383C434.816 37.9162 438.803 43.0873 438.139 48.7838C437.476 54.4856 432.388 58.5531 426.833 57.8752C395.223 54.0232 363.732 62.0425 338.156 80.4354C336.376 81.7124 334.334 82.3273 332.312 82.3273C329.113 82.3273 325.964 80.7928 323.984 77.9182ZM461.791 67.0979C456.586 64.9381 454.086 58.8842 456.2 53.5607C457.805 49.5248 461.606 47.0812 465.624 47.0812C466.899 47.0812 468.201 47.3282 469.451 47.8484C510.973 65.0852 543.586 100.962 556.682 143.802C558.354 149.278 555.365 155.105 550.005 156.824C548.997 157.139 547.979 157.297 546.97 157.297C542.639 157.297 538.627 154.443 537.264 150.003C525.957 113.017 497.748 82.0277 461.791 67.0979ZM251.31 114.528C251.934 112.41 258.341 90.6586 262.709 81.1396C264.437 77.3717 268.105 75.154 271.927 75.154C273.367 75.154 274.838 75.4746 276.227 76.142C281.32 78.5751 283.511 84.7551 281.129 89.9525C277.945 96.905 272.606 114.315 270.816 120.432C267.899 131.048 265.188 142.593 265.456 153.997C265.548 157.84 266.622 161.898 267.757 166.193L267.76 166.204C269.005 170.887 270.409 176.194 270.697 181.97C271.762 203.37 254.564 222.246 240.731 237.428L240.703 237.459C237.545 240.922 234.54 244.217 232.154 247.128C235.898 248.999 239.854 250.339 243.964 251.138C249.484 252.215 253.11 257.654 252.061 263.287C251.135 268.269 246.871 271.738 242.076 271.738C241.454 271.738 240.811 271.68 240.168 271.554C232.745 270.109 225.652 267.423 219.098 263.555C212.889 259.893 210.858 255.042 210.251 251.616C208.79 243.436 214.116 236.81 215.866 234.633L215.868 234.631C218.607 231.217 221.861 227.64 225.303 223.855L225.816 223.291C237.04 210.983 251.011 195.654 250.384 183.026C250.209 179.482 249.197 175.67 248.128 171.643L248.126 171.633L248.12 171.612C246.784 166.562 245.271 160.841 245.122 154.496C244.792 140.349 247.889 126.985 251.274 114.652C251.282 114.624 251.294 114.582 251.31 114.528ZM386.802 96.4058C385.851 90.7512 389.565 85.3752 395.11 84.403C400.748 83.4151 406.437 82.9316 412.111 82.9316C438.947 82.9316 465.557 93.7729 485.731 113.474C509.162 136.35 520.319 167.981 516.353 200.252C515.983 203.242 515.52 206.348 514.887 210.037C514.013 215.077 509.723 218.624 504.882 218.624C504.296 218.624 503.699 218.572 503.103 218.461C497.573 217.468 493.874 212.076 494.846 206.432C495.428 203.085 495.844 200.3 496.174 197.667C499.327 171.99 490.397 146.776 471.678 128.499C451.869 109.155 424.528 100.316 398.546 104.888C392.996 105.849 387.754 102.06 386.802 96.4058ZM353.696 100.836L355.892 99.6955C357.368 98.9282 358.942 98.5656 360.491 98.5656C364.194 98.5656 367.77 100.641 369.565 104.252C372.111 109.37 370.11 115.624 365.1 118.22L362.888 119.376C347.574 127.306 327.477 137.411 307.806 145.252C306.597 145.741 305.342 145.972 304.113 145.972C300.044 145.972 296.201 143.46 294.632 139.356C292.59 134.011 295.178 127.984 300.409 125.898C319.262 118.377 338.788 108.556 353.696 100.836ZM297.251 177.639C327.286 167.991 358.773 151.931 385.918 137.637C394.518 133.123 403.957 130.89 413.335 130.89C425.336 130.89 437.234 134.542 447.095 141.721C451.668 145.052 452.738 151.532 449.477 156.214C446.22 160.886 439.873 161.979 435.289 158.642C423.849 150.323 408.129 149.33 395.238 156.114C367.337 170.803 334.925 187.314 303.357 197.467C302.343 197.793 301.32 197.951 300.306 197.951C295.98 197.951 291.968 195.107 290.605 190.677C288.917 185.207 291.896 179.368 297.251 177.639ZM449.934 184.581C449.348 178.869 453.401 173.761 458.988 173.157C459.343 173.12 459.692 173.104 460.042 173.104C465.197 173.104 469.61 177.061 470.166 182.406C470.731 187.903 470.526 193.452 469.554 198.907C466.364 216.811 455.464 231.857 439.646 240.191C411.617 254.969 378.845 271.769 344.544 284.124C332.955 288.297 326.175 300.268 328.413 312.596C329.118 316.454 329.9 320.285 330.8 324.299C332.055 329.891 328.634 335.467 323.156 336.749C322.389 336.927 321.623 337.012 320.872 337.012C316.237 337.012 312.05 333.753 310.97 328.94C310.003 324.641 309.169 320.537 308.413 316.391C304.334 293.935 316.685 272.127 337.78 264.528C370.861 252.609 402.893 236.187 430.32 221.725C440.485 216.375 447.486 206.695 449.538 195.192C450.166 191.676 450.3 188.108 449.934 184.581ZM542.711 188.512C542.711 182.779 547.269 178.123 552.881 178.123H552.886C558.498 178.123 563.051 182.779 563.051 188.518C563.051 198.765 562.047 209.023 560.067 219.003C559.1 223.932 554.851 227.337 550.113 227.337C549.445 227.337 548.766 227.269 548.082 227.127C542.577 225.992 539.018 220.511 540.134 214.883C541.842 206.254 542.706 197.383 542.711 188.512ZM285.502 230.159C327.081 221.304 369.251 200.173 408.88 179.284C410.372 178.496 411.967 178.123 413.536 178.123C417.219 178.123 420.773 180.178 422.579 183.746C425.161 188.849 423.206 195.118 418.211 197.746C377.332 219.297 333.732 241.116 289.653 250.496C288.953 250.649 288.254 250.722 287.565 250.722C282.848 250.722 278.619 247.349 277.621 242.446C276.474 236.828 280.008 231.326 285.502 230.159ZM489.594 250.454C489.517 244.711 494.008 239.997 499.625 239.923C499.653 239.92 499.679 239.919 499.703 239.918C499.725 239.918 499.745 239.918 499.764 239.918C505.32 239.918 509.857 244.474 509.934 250.165C510.119 264.081 511.873 277.44 515.145 289.873C516.6 295.412 513.38 301.114 507.953 302.601C507.074 302.843 506.189 302.964 505.309 302.964C500.824 302.964 496.719 299.905 495.495 295.265C491.786 281.171 489.805 266.088 489.594 250.454ZM444.05 272.006C443.535 266.293 447.645 261.227 453.237 260.702C453.556 260.67 453.875 260.655 454.188 260.655C459.394 260.655 463.818 264.701 464.307 270.082C465.896 287.535 470.207 304.724 477.47 322.644C479.62 327.946 477.161 334.021 471.971 336.223C470.701 336.759 469.379 337.017 468.082 337.017C464.091 337.017 460.305 334.6 458.684 330.6C450.619 310.736 445.829 291.565 444.05 272.006ZM355.342 311.85C354.256 306.217 357.852 300.757 363.356 299.648C364.02 299.516 364.678 299.453 365.326 299.453C370.089 299.453 374.344 302.885 375.305 307.84C376.499 314.061 379.301 324.347 381.158 331.163L381.159 331.168L381.555 332.597C383.057 338.126 379.884 343.854 374.477 345.393C373.567 345.651 372.651 345.777 371.751 345.777C367.291 345.777 363.207 342.766 361.952 338.168L361.561 336.738L361.522 336.596C359.582 329.475 356.68 318.819 355.342 311.85Z" fill="url(#paint1_linear_3_30)"/>
    <path d="M38.2146 81H54.0759V76.6196H43.4428V54.859H38.2146V81Z" fill="white"/>
    <path d="M54.9019 81H60.2007L63.9452 67.3996C64.7224 64.6795 65.4643 61.6769 66.1708 58.8508H66.3121C67.0539 61.6415 67.7957 64.6795 68.5729 67.3996L72.3174 81H77.7929L69.4207 54.859H63.2741L54.9019 81ZM60.0947 74.2881H72.5294V70.261H60.0947V74.2881Z" fill="white"/>
    <path d="M80.8883 81H86.1165V71.7093H89.6138C95.2306 71.7093 99.6816 69.0599 99.6816 63.0899C99.6816 56.8726 95.2306 54.859 89.4725 54.859H80.8883V81ZM86.1165 67.5762V59.0274H89.0839C92.6871 59.0274 94.5947 60.0165 94.5947 63.0899C94.5947 66.0572 92.8637 67.5762 89.2605 67.5762H86.1165Z" fill="white"/>
    <path d="M104.45 81H109.678V71.1441H113.529C119.004 71.1441 123.35 68.6007 123.35 62.772C123.35 56.7666 119.004 54.859 113.529 54.859H104.45V81ZM109.678 67.011V59.0274H113.034C116.426 59.0274 118.263 59.9812 118.263 62.772C118.263 65.5627 116.426 67.011 113.034 67.011H109.678ZM118.651 81H124.48L116.214 66.5165L112.575 69.8018L118.651 81Z" fill="white"/>
    <path d="M124.691 81H129.99L133.734 67.3996C134.511 64.6795 135.253 61.6769 135.96 58.8508H136.101C136.843 61.6415 137.585 64.6795 138.362 67.3996L142.106 81H147.582L139.21 54.859H133.063L124.691 81ZM129.884 74.2881H142.318V70.261H129.884V74.2881Z" fill="white"/>
    <path d="M158.484 81.4946C164.49 81.4946 168.057 77.856 168.057 73.5816C168.057 69.8371 165.973 67.7882 162.829 66.4811L159.403 65.0681C157.177 64.185 155.305 63.4785 155.305 61.6062C155.305 59.9106 156.753 58.8861 159.049 58.8861C161.204 58.8861 162.935 59.6633 164.631 61.041L167.245 57.7557C165.125 55.6008 162.087 54.3998 159.049 54.3998C153.786 54.3998 150.006 57.6851 150.006 61.9595C150.006 65.7393 152.691 67.8942 155.305 68.9539L158.802 70.4376C161.134 71.4267 162.723 72.0626 162.723 74.0055C162.723 75.8071 161.31 76.9729 158.59 76.9729C156.294 76.9729 153.786 75.8425 151.949 74.1115L148.946 77.7147C151.49 80.1522 154.952 81.4946 158.484 81.4946Z" fill="white"/>
    <path d="M196.535 81.4946C202.541 81.4946 206.108 77.856 206.108 73.5816C206.108 69.8371 204.024 67.7882 200.88 66.4811L197.454 65.0681C195.228 64.185 193.356 63.4785 193.356 61.6062C193.356 59.9106 194.804 58.8861 197.1 58.8861C199.255 58.8861 200.986 59.6633 202.682 61.041L205.296 57.7557C203.176 55.6008 200.138 54.3998 197.1 54.3998C191.837 54.3998 188.057 57.6851 188.057 61.9595C188.057 65.7393 190.742 67.8942 193.356 68.9539L196.853 70.4376C199.185 71.4267 200.774 72.0626 200.774 74.0055C200.774 75.8071 199.361 76.9729 196.641 76.9729C194.345 76.9729 191.837 75.8425 190 74.1115L186.997 77.7147C189.541 80.1522 193.003 81.4946 196.535 81.4946Z" fill="white"/>
    <path d="M221.405 81.4946C224.797 81.4946 227.587 80.1875 229.742 77.6794L226.987 74.3941C225.609 75.9131 223.843 76.9729 221.617 76.9729C217.449 76.9729 214.799 73.5816 214.799 67.8588C214.799 62.2774 217.767 58.8861 221.688 58.8861C223.702 58.8861 225.185 59.7693 226.528 61.0763L229.283 57.7204C227.587 55.9541 224.938 54.3998 221.617 54.3998C214.976 54.3998 209.465 59.416 209.465 68.0355C209.465 76.7609 214.799 81.4946 221.405 81.4946Z" fill="white"/>
    <path d="M242.754 81.4946C249.677 81.4946 254.411 76.337 254.411 67.8235C254.411 59.3454 249.677 54.3998 242.754 54.3998C235.794 54.3998 231.061 59.31 231.061 67.8235C231.061 76.337 235.794 81.4946 242.754 81.4946ZM242.754 76.9729C238.832 76.9729 236.395 73.405 236.395 67.8235C236.395 62.2421 238.832 58.8861 242.754 58.8861C246.639 58.8861 249.112 62.2421 249.112 67.8235C249.112 73.405 246.639 76.9729 242.754 76.9729Z" fill="white"/>
    <path d="M259.552 81H264.78V71.1441H268.631C274.106 71.1441 278.451 68.6007 278.451 62.772C278.451 56.7666 274.106 54.859 268.631 54.859H259.552V81ZM264.78 67.011V59.0274H268.136C271.528 59.0274 273.364 59.9812 273.364 62.772C273.364 65.5627 271.528 67.011 268.136 67.011H264.78ZM273.753 81H279.582L271.316 66.5165L267.677 69.8018L273.753 81Z" fill="white"/>
    <path d="M283.632 81H300.058V76.6196H288.86V69.6605H298.009V65.2448H288.86V59.2041H299.669V54.859H283.632V81Z" fill="white"/>
    ${ LANG_TEXT_SVG_PATH[lang].engineering }
    <text fill="white" opacity="${ isAnimation ? 0 : 1 }" xml:space="preserve" style="white-space: pre" font-family="Noto Sans JP" font-size="30.5839" font-weight="bold" letter-spacing="0em"><tspan x="513" y="184.335">${formatScore(score.eScore)}</tspan>
    ${ isAnimation ? '<animate attributeName="opacity" from="0" to="1" dur="1" begin="0.2s" fill="freeze"/>' : ''}
    </text>
    <text fill="white" opacity="${ isAnimation ? 0 : 1 }" xml:space="preserve" style="white-space: pre" font-family="Noto Sans JP" font-size="30.5839" font-weight="bold" letter-spacing="0em"><tspan x="513" y="262.335">${formatScore(score.bScore)}</tspan>
    ${ isAnimation ? '<animate attributeName="opacity" from="0" to="1" dur="1" begin="0.8s" fill="freeze"/>' : ''}
    </text>
    <text fill="white" opacity="${ isAnimation ? 0 : 1 }" xml:space="preserve" style="white-space: pre" font-family="Noto Sans JP" font-size="30.5839" font-weight="bold" letter-spacing="0em"><tspan x="513" y="340.335">${formatScore(score.iScore)}</tspan>
    ${ isAnimation ? '<animate attributeName="opacity" from="0" to="1" dur="1" begin="1.4s" fill="freeze"/>' : ''}
    </text>
    ${ LANG_TEXT_SVG_PATH[lang].business }
    ${ LANG_TEXT_SVG_PATH[lang].influence }
    <rect x="35" y="166" width="${BAR_WIDTH}" height="9" fill="white" fill-opacity="0.2"/>
    <rect x="35" y="166" width="${isAnimation ? 0 : computeBarWidth(score.eScore)}" height="9" fill="url(#eScore_bar_color)">
    ${ isAnimation ? `<animate attributeName="width" from="0" to="${computeBarWidth(score.eScore)}" dur="1s" fill="freeze" keySplines="0 0 0.58 1;" begin="0s"/>`: ''}
    </rect>
    <rect x="35" y="244" width="${BAR_WIDTH}" height="9" fill="white" fill-opacity="0.2"/>
    <rect x="35" y="244" width="${isAnimation ? 0 : computeBarWidth(score.bScore)}" height="9" fill="url(#bScore_bar_color)">
    ${ isAnimation ? `<animate attributeName="width" from="0" to="${computeBarWidth(score.bScore)}" dur="1s" fill="freeze" keySplines="0 0 0.58 1;" begin="0.5s"/>`: ''}
    </rect>
    <rect x="35" y="322" width="${BAR_WIDTH}" height="9" fill="white" fill-opacity="0.2"/>
    <rect x="35" y="322" width="${isAnimation ? 0 : computeBarWidth(score.iScore)}" height="9" fill="url(#iScore_bar_color)">
    ${ isAnimation ? `<animate attributeName="width" from="0" to="${computeBarWidth(score.iScore)}" dur="1s" fill="freeze" keySplines="0 0 0.58 1;" begin="1.0s"/>`: ''}
    </rect>
    <defs>
    <linearGradient id="card-background" x1="149" y1="307.5" x2="585" y2="-14.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="${theme.background.first}"/>
    <stop offset="1" stop-color="${theme.background.second}"/>
    </linearGradient>
    <linearGradient id="paint1_linear_3_30" x1="643.93" y1="104.96" x2="243.861" y2="288.735" gradientUnits="userSpaceOnUse">
    <stop offset="0.125883" stop-color="${theme.icon.second}"/>
    <stop offset="0.550267" stop-color="${theme.icon.first}"/>
    </linearGradient>
    <linearGradient id="eScore_bar_color" x1="39.5" y1="175" x2="335" y2="175" gradientUnits="userSpaceOnUse">
    <stop stop-color="${getBarColor(score.eScore, 'START')}"/>
    <stop offset="1" stop-color="${getBarColor(score.eScore, 'END')}"/>
    </linearGradient>
    <linearGradient id="bScore_bar_color" x1="38.045" y1="253" x2="238" y2="253" gradientUnits="userSpaceOnUse">
    <stop stop-color="${getBarColor(score.bScore, 'START')}"/>
    <stop offset="1" stop-color="${getBarColor(score.bScore, 'END')}"/>
    </linearGradient>
    <linearGradient id="iScore_bar_color" x1="38.78" y1="331" x2="287" y2="331" gradientUnits="userSpaceOnUse">
    <stop stop-color="${getBarColor(score.iScore, 'START')}"/>
    <stop offset="1" stop-color="${getBarColor(score.iScore, 'END')}"/>
    </linearGradient>
    </defs>
    </svg>
  `
}
