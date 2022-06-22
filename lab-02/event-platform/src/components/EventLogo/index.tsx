import { SVGProps } from "react";

export const EventLogo = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="330"
      height="33"
      fill="none"
      viewBox="0 0 330 33"    
      {...rest}  
    >
      <path
        fill="#E1E1E6"
        d="M190.827 21.66c0-.247-.038-.467-.114-.66-.07-.2-.202-.378-.396-.536-.187-.164-.454-.322-.799-.475-.34-.158-.78-.322-1.319-.492a14.675 14.675 0 01-1.67-.633 6.587 6.587 0 01-1.362-.817 3.482 3.482 0 01-.905-1.072c-.217-.41-.325-.885-.325-1.424 0-.528.111-1.008.334-1.442.228-.433.55-.805.966-1.116.416-.316.906-.56 1.468-.73a6.546 6.546 0 011.881-.254c.949 0 1.769.173 2.461.518.697.346 1.236.815 1.617 1.407.381.591.571 1.256.571 1.995h-2.408c0-.399-.085-.75-.255-1.055a1.732 1.732 0 00-.756-.72c-.334-.177-.755-.264-1.265-.264-.492 0-.903.073-1.231.22a1.661 1.661 0 00-.729.597 1.556 1.556 0 00-.237.844c0 .234.055.445.167.633.111.181.278.354.5.518.223.158.499.308.827.448.334.135.72.27 1.16.405.703.21 1.318.445 1.846.703.533.258.975.55 1.327.879.357.328.624.697.799 1.107.182.41.273.876.273 1.398 0 .55-.108 1.043-.325 1.476a3.13 3.13 0 01-.932 1.108 4.324 4.324 0 01-1.459.694 6.973 6.973 0 01-1.89.237 7.062 7.062 0 01-1.845-.246 5.607 5.607 0 01-1.644-.756 3.86 3.86 0 01-1.178-1.283c-.292-.521-.439-1.13-.439-1.828h2.426c0 .404.064.75.193 1.037.135.281.322.513.563.694.246.176.533.305.861.387.328.082.683.123 1.063.123.493 0 .897-.067 1.213-.202.323-.14.563-.334.721-.58.164-.246.246-.527.246-.844zM202.604 20.771h2.417c-.064.856-.301 1.615-.711 2.277a4.27 4.27 0 01-1.714 1.547c-.733.375-1.62.562-2.663.562-.803 0-1.527-.14-2.171-.422a4.698 4.698 0 01-1.644-1.221c-.451-.534-.797-1.172-1.037-1.916-.24-.75-.36-1.591-.36-2.523V18.1c0-.932.123-1.773.369-2.523.246-.75.598-1.389 1.055-1.916a4.702 4.702 0 011.661-1.23c.65-.287 1.377-.431 2.179-.431 1.043 0 1.925.193 2.646.58.721.38 1.28.905 1.679 1.573.398.668.638 1.436.72 2.303h-2.417c-.047-.539-.164-.996-.351-1.371a1.85 1.85 0 00-.826-.853c-.364-.199-.847-.298-1.451-.298-.468 0-.881.088-1.239.263-.351.176-.644.44-.879.791-.234.346-.41.78-.527 1.301a8.159 8.159 0 00-.176 1.793v.993c0 .65.053 1.234.158 1.75.106.515.27.951.492 1.309.223.357.51.63.862.817.351.188.77.281 1.257.281.591 0 1.072-.093 1.441-.28.375-.188.659-.464.853-.827.199-.363.325-.814.377-1.354zM211.982 14.127l-3.647 10.854h-2.558l4.782-12.796h1.634l-.211 1.942zm3.05 10.854l-3.665-10.854-.22-1.942h1.644l4.808 12.796h-2.567zm-.167-4.754v1.907h-6.864v-1.907h6.864zM227.038 23.083v1.898h-6.434v-1.898h6.434zm-5.704-10.898V24.98h-2.417V12.185h2.417zM237.137 23.083v1.898h-6.803v-1.898h6.803zm-6.065-10.898V24.98h-2.417V12.185h2.417zm5.177 5.282v1.854h-5.915v-1.854h5.915zm.861-5.282v1.907h-6.776v-1.907h6.776zM245.513 21.66a1.77 1.77 0 00-.115-.66 1.22 1.22 0 00-.395-.536c-.188-.164-.454-.322-.8-.475-.34-.158-.779-.322-1.318-.492a14.533 14.533 0 01-1.67-.633 6.535 6.535 0 01-1.362-.817 3.486 3.486 0 01-.906-1.072c-.217-.41-.325-.885-.325-1.424 0-.528.111-1.008.334-1.442.229-.433.551-.805.967-1.116.416-.316.905-.56 1.468-.73a6.544 6.544 0 011.88-.254c.95 0 1.77.173 2.461.518.698.346 1.237.815 1.618 1.407.38.591.571 1.256.571 1.995h-2.408c0-.399-.085-.75-.255-1.055a1.732 1.732 0 00-.756-.72c-.334-.177-.756-.264-1.266-.264-.492 0-.902.073-1.23.22-.322.146-.566.345-.73.597a1.556 1.556 0 00-.237.844c0 .234.056.445.167.633.111.181.278.354.501.518.223.158.498.308.826.448.334.135.721.27 1.16.405.703.21 1.319.445 1.846.703.533.258.976.55 1.327.879.358.328.624.697.8 1.107.182.41.272.876.272 1.398 0 .55-.108 1.043-.325 1.476a3.128 3.128 0 01-.931 1.108 4.333 4.333 0 01-1.459.694 6.983 6.983 0 01-1.89.237 7.075 7.075 0 01-1.846-.246 5.613 5.613 0 01-1.643-.756 3.86 3.86 0 01-1.178-1.283c-.293-.521-.439-1.13-.439-1.828h2.425c0 .404.065.75.194 1.037.134.281.322.513.562.694.246.176.533.305.862.387.328.082.682.123 1.063.123.492 0 .896-.067 1.213-.202.322-.14.562-.334.721-.58.164-.246.246-.527.246-.844zM256.2 18.073l2.329-1.53c.369-.245.624-.482.765-.711.141-.229.211-.504.211-.826 0-.287-.111-.554-.334-.8-.217-.252-.525-.378-.923-.378-.281 0-.519.065-.712.194-.193.128-.34.301-.439.518a1.71 1.71 0 00-.141.703c0 .264.067.533.202.809.141.275.328.565.563.87.24.299.507.624.8.976l6.038 7.083h-2.655l-4.939-5.748c-.416-.515-.785-.99-1.108-1.423a6.777 6.777 0 01-.755-1.257 3.18 3.18 0 01-.264-1.266c0-.668.141-1.248.422-1.74a2.898 2.898 0 011.186-1.143c.516-.27 1.119-.404 1.811-.404.656 0 1.222.135 1.696.404.481.264.853.616 1.116 1.055.264.44.396.92.396 1.441 0 .399-.073.768-.22 1.108a3.36 3.36 0 01-.606.923 6.224 6.224 0 01-.897.782L257 19.682a2.884 2.884 0 00-.598.659 2.205 2.205 0 00-.263.589 2.324 2.324 0 00-.062.51c0 .357.076.68.229.966.158.282.381.507.668.677.293.164.638.246 1.037.246a3.21 3.21 0 001.406-.325 3.892 3.892 0 001.213-.923c.363-.398.65-.873.861-1.424a5.016 5.016 0 00.325-1.837h1.987c0 .639-.062 1.245-.185 1.82a5.6 5.6 0 01-.597 1.582c-.276.486-.636.92-1.082 1.3a2.92 2.92 0 00-.149.141c-.053.059-.1.106-.141.14-.533.458-1.11.8-1.731 1.029a5.871 5.871 0 01-2.013.334c-.855 0-1.593-.155-2.215-.466-.621-.31-1.101-.738-1.441-1.283-.334-.545-.501-1.169-.501-1.872 0-.522.103-.976.308-1.362.211-.393.501-.756.87-1.09.369-.34.794-.68 1.274-1.02zM271.511 12.185h2.092l3.498 9.632 3.489-9.632h2.1l-4.754 12.796h-1.679l-4.746-12.796zm-1.055 0h2.048l.369 8.85v3.946h-2.417V12.185zm11.232 0h2.057V24.98h-2.417v-3.946l.36-8.85zM296.568 18.258v.659c0 .967-.129 1.837-.386 2.61-.258.768-.624 1.421-1.099 1.96-.475.54-1.04.953-1.696 1.24-.657.287-1.386.43-2.189.43a5.417 5.417 0 01-2.179-.43 4.88 4.88 0 01-1.706-1.24c-.48-.539-.852-1.192-1.116-1.96-.263-.773-.395-1.643-.395-2.61v-.66c0-.972.132-1.842.395-2.61.264-.767.633-1.42 1.108-1.96a4.744 4.744 0 011.696-1.247 5.42 5.42 0 012.18-.431c.802 0 1.532.143 2.188.43a4.744 4.744 0 011.696 1.248c.481.54.85 1.193 1.108 1.96.264.768.395 1.638.395 2.61zm-2.443.659v-.677c0-.697-.064-1.31-.193-1.837-.129-.533-.32-.981-.572-1.344a2.434 2.434 0 00-.931-.818 2.716 2.716 0 00-1.248-.281 2.68 2.68 0 00-1.248.281 2.47 2.47 0 00-.914.818c-.252.363-.446.811-.581 1.344-.128.528-.193 1.14-.193 1.837v.677c0 .691.065 1.304.193 1.837.135.533.329.984.581 1.353.257.364.568.64.931.827a2.68 2.68 0 001.248.28 2.68 2.68 0 001.248-.28c.364-.188.668-.463.914-.827.252-.369.443-.82.572-1.353a7.852 7.852 0 00.193-1.837zM302.439 24.981h-2.759l.017-1.898h2.742c.745 0 1.369-.164 1.873-.492.503-.334.884-.812 1.142-1.433.258-.627.387-1.377.387-2.25v-.659c0-.674-.073-1.268-.22-1.784-.146-.516-.363-.95-.65-1.3a2.71 2.71 0 00-1.046-.8c-.416-.182-.894-.273-1.433-.273h-2.865v-1.907h2.865c.856 0 1.635.143 2.338.43.709.287 1.321.7 1.837 1.24.521.533.92 1.171 1.195 1.915.282.745.422 1.577.422 2.497v.641c0 .914-.14 1.746-.422 2.496a5.365 5.365 0 01-1.195 1.916 5.264 5.264 0 01-1.846 1.23c-.715.288-1.509.431-2.382.431zm-1.406-12.796V24.98h-2.417V12.185h2.417zM318.822 23.083v1.898h-6.802v-1.898h6.802zm-6.064-10.898V24.98h-2.417V12.185h2.417zm5.177 5.282v1.854h-5.915v-1.854h5.915zm.861-5.282v1.907h-6.776v-1.907h6.776zM327.198 21.66c0-.247-.038-.467-.114-.66-.07-.2-.202-.378-.396-.536-.187-.164-.454-.322-.799-.475-.34-.158-.78-.322-1.319-.492a14.675 14.675 0 01-1.67-.633 6.587 6.587 0 01-1.362-.817 3.482 3.482 0 01-.905-1.072c-.217-.41-.325-.885-.325-1.424 0-.528.111-1.008.334-1.442.228-.433.55-.805.966-1.116.416-.316.906-.56 1.468-.73a6.55 6.55 0 011.881-.254c.949 0 1.77.173 2.461.518.697.346 1.236.815 1.617 1.407.381.591.571 1.256.571 1.995h-2.408c0-.399-.085-.75-.255-1.055a1.735 1.735 0 00-.755-.72c-.334-.177-.756-.264-1.266-.264-.492 0-.902.073-1.231.22a1.661 1.661 0 00-.729.597 1.556 1.556 0 00-.237.844c0 .234.055.445.167.633.111.181.278.354.501.518.222.158.498.308.826.448.334.135.72.27 1.16.405.703.21 1.318.445 1.846.703.533.258.975.55 1.327.879.357.328.624.697.8 1.107.181.41.272.876.272 1.398 0 .55-.108 1.043-.325 1.476a3.13 3.13 0 01-.932 1.108c-.404.304-.89.536-1.459.694a6.97 6.97 0 01-1.889.237 7.064 7.064 0 01-1.846-.246 5.607 5.607 0 01-1.644-.756 3.858 3.858 0 01-1.177-1.283c-.293-.521-.44-1.13-.44-1.828h2.426c0 .404.064.75.193 1.037.135.281.323.513.563.694.246.176.533.305.861.387a4.38 4.38 0 001.064.123c.492 0 .896-.067 1.212-.202.323-.14.563-.334.721-.58.164-.246.246-.527.246-.844z"
      ></path>
      <path fill="#0D4C70" d="M173.179 32.576h-4.957V0h4.957v32.576z"></path>
      <path
        fill="#E1E1E6"
        d="M4.64 12.883v15.135H0V8.998h4.395l.246 3.885zm5.784-4.008l-.07 4.324a8.217 8.217 0 00-.88-.105 12.132 12.132 0 00-.896-.035c-.715 0-1.342.1-1.88.298-.54.188-.991.463-1.354.827a3.648 3.648 0 00-.809 1.336c-.187.515-.293 1.101-.316 1.757l-1.002-.123c0-1.207.123-2.326.369-3.357.246-1.031.603-1.934 1.072-2.707.469-.774 1.055-1.371 1.758-1.793.715-.434 1.535-.65 2.461-.65.258 0 .533.023.826.07.305.035.545.088.72.158zM17.895 8.998v19.02h-4.659V8.998h4.659zM12.92 4.023c0-.691.234-1.265.703-1.722.48-.457 1.125-.686 1.934-.686.808 0 1.447.229 1.916.686.48.457.72 1.031.72 1.722 0 .68-.24 1.248-.72 1.706-.47.457-1.108.685-1.916.685-.809 0-1.454-.228-1.934-.685-.469-.458-.703-1.026-.703-1.706zM30.129 24.713c.656 0 1.242-.129 1.758-.387a3.08 3.08 0 001.23-1.09c.317-.468.486-1.013.51-1.634h4.377c-.023 1.289-.387 2.443-1.09 3.462-.703 1.02-1.64 1.829-2.812 2.426-1.16.586-2.461.88-3.903.88-1.465 0-2.742-.247-3.832-.74a7.46 7.46 0 01-2.724-2.056c-.715-.879-1.254-1.898-1.618-3.058a12.786 12.786 0 01-.527-3.727v-.562c0-1.325.176-2.567.527-3.727.364-1.16.903-2.18 1.618-3.059a7.46 7.46 0 012.724-2.056c1.09-.492 2.361-.739 3.815-.739 1.535 0 2.883.3 4.043.897 1.172.598 2.085 1.441 2.742 2.531.668 1.09 1.014 2.373 1.037 3.85h-4.377c-.024-.68-.176-1.29-.457-1.828a3.358 3.358 0 00-1.195-1.301c-.516-.328-1.143-.492-1.881-.492-.785 0-1.442.164-1.969.492-.516.328-.92.78-1.213 1.353a6.675 6.675 0 00-.598 1.899 14.445 14.445 0 00-.158 2.18v.562c0 .773.053 1.512.159 2.215.117.703.316 1.336.597 1.898.293.551.697.99 1.213 1.319.527.328 1.195.492 2.004.492zM45.738 1v27.018h-4.64V1h4.64zm11.918 7.998l-8.279 9.299-4.483 4.553-1.476-3.604 3.463-4.36 5.168-5.888h5.607zm-4.746 19.02l-5.888-8.86 3.093-3.006 8.174 11.866H52.91zM69.064 1.018h4.659v22.798l-.457 4.202h-4.202v-27zm16.893 17.297v.369c0 1.418-.158 2.718-.475 3.902-.304 1.184-.767 2.209-1.388 3.076a6.578 6.578 0 01-2.32 2.004c-.915.469-1.987.703-3.217.703-1.172 0-2.192-.228-3.059-.685a6.194 6.194 0 01-2.162-1.934c-.586-.844-1.055-1.834-1.406-2.97a22.875 22.875 0 01-.791-3.762v-1.002a22.37 22.37 0 01.79-3.762c.352-1.137.821-2.127 1.407-2.97a6.133 6.133 0 012.162-1.952c.855-.457 1.863-.686 3.023-.686 1.243 0 2.327.24 3.252.721a6.169 6.169 0 012.32 2.004c.622.856 1.085 1.875 1.39 3.059.316 1.172.474 2.466.474 3.884zm-4.658.369v-.37c0-.808-.065-1.57-.194-2.285-.128-.726-.34-1.365-.632-1.916a3.373 3.373 0 00-1.196-1.3c-.504-.317-1.136-.475-1.898-.475-.727 0-1.348.123-1.863.369a3.583 3.583 0 00-1.266 1.02 5.071 5.071 0 00-.773 1.529 9.408 9.408 0 00-.352 1.898v2.742c.082.903.275 1.717.58 2.444a3.914 3.914 0 001.354 1.705c.609.422 1.394.633 2.355.633.75 0 1.377-.147 1.88-.44a3.273 3.273 0 001.196-1.265c.293-.551.498-1.19.616-1.916.128-.727.193-1.518.193-2.373zM97.875 28.37c-1.441 0-2.736-.235-3.885-.704-1.148-.469-2.127-1.12-2.935-1.951a8.97 8.97 0 01-1.846-2.936c-.422-1.125-.633-2.332-.633-3.62v-.704c0-1.465.211-2.795.633-3.99.422-1.207 1.02-2.244 1.793-3.111a7.891 7.891 0 012.777-2.004c1.078-.47 2.268-.704 3.569-.704 1.347 0 2.537.229 3.568.686a6.9 6.9 0 012.584 1.898c.691.82 1.213 1.805 1.564 2.954.352 1.136.528 2.396.528 3.779v1.951H90.686v-3.2h10.335v-.35a5.609 5.609 0 00-.421-2.022 3.232 3.232 0 00-1.196-1.477c-.539-.375-1.236-.562-2.091-.562-.692 0-1.295.152-1.811.457-.504.293-.926.715-1.266 1.265-.328.54-.574 1.184-.738 1.934-.164.75-.246 1.582-.246 2.496v.703c0 .797.105 1.535.316 2.215.223.68.545 1.271.967 1.775.434.493.95.88 1.547 1.16.61.27 1.3.405 2.074.405.973 0 1.852-.188 2.637-.563.797-.386 1.488-.955 2.074-1.705l2.338 2.426c-.398.586-.937 1.149-1.617 1.688-.668.539-1.477.978-2.426 1.318-.949.328-2.045.492-3.287.492zM119.18 23.975v-8.772c0-.644-.112-1.201-.334-1.67a2.417 2.417 0 00-1.02-1.09c-.457-.258-1.037-.386-1.74-.386-.621 0-1.166.105-1.635.316-.457.211-.808.51-1.055.897a2.317 2.317 0 00-.369 1.3h-4.658c0-.785.188-1.529.563-2.232.375-.715.908-1.348 1.599-1.898.703-.563 1.541-1.002 2.514-1.319.984-.316 2.086-.475 3.305-.475 1.441 0 2.724.247 3.849.739 1.137.48 2.028 1.207 2.672 2.18.656.972.984 2.197.984 3.673v8.297c0 .95.059 1.764.176 2.444.129.668.317 1.248.563 1.74v.299h-4.729c-.222-.48-.392-1.09-.51-1.829a14.354 14.354 0 01-.175-2.214zm.65-7.541l.035 2.76h-2.935c-.727 0-1.366.076-1.916.228-.551.14-1.002.351-1.354.633-.351.27-.615.597-.791.984a2.986 2.986 0 00-.264 1.283c0 .469.106.89.317 1.266.223.375.539.674.949.896.422.211.914.317 1.477.317.82 0 1.535-.164 2.144-.492.61-.34 1.084-.75 1.424-1.23.34-.481.522-.938.545-1.372l1.336 2.004c-.164.48-.41.99-.738 1.53a6.907 6.907 0 01-1.266 1.511 6.457 6.457 0 01-1.863 1.16c-.727.305-1.571.457-2.532.457-1.23 0-2.332-.246-3.304-.738-.973-.492-1.74-1.166-2.303-2.022-.562-.855-.844-1.828-.844-2.918 0-1.007.188-1.898.563-2.671a5.117 5.117 0 011.67-1.952c.738-.539 1.652-.943 2.742-1.213 1.101-.28 2.361-.421 3.779-.421h3.129zM137.039 8.998v3.34h-10.898v-3.34h10.898zm-7.98-4.676h4.658v18.211c0 .563.076.996.228 1.301.153.305.381.51.686.615.305.106.668.158 1.09.158.304 0 .586-.017.843-.052.258-.035.475-.07.651-.106l.017 3.48a8.696 8.696 0 01-1.318.317 9.777 9.777 0 01-1.635.123c-1.043 0-1.957-.176-2.742-.527-.785-.363-1.394-.944-1.828-1.74-.434-.809-.65-1.875-.65-3.2V4.322zM138.85 18.701v-.369c0-1.395.199-2.678.597-3.85.399-1.183.979-2.209 1.741-3.076a7.83 7.83 0 012.794-2.021c1.102-.492 2.356-.739 3.762-.739 1.43 0 2.695.247 3.797.739a7.805 7.805 0 012.813 2.021c.761.867 1.341 1.893 1.74 3.076.398 1.172.597 2.456.597 3.85v.37c0 1.382-.199 2.665-.597 3.849a9.149 9.149 0 01-1.74 3.076 7.841 7.841 0 01-2.795 2.021c-1.102.48-2.362.721-3.78.721-1.406 0-2.666-.24-3.779-.72a7.792 7.792 0 01-2.812-2.022 9.134 9.134 0 01-1.741-3.076c-.398-1.184-.597-2.467-.597-3.85zm4.64-.369v.37c0 .831.082 1.61.246 2.337.164.727.416 1.365.756 1.916.34.55.779.985 1.319 1.3.55.306 1.207.458 1.968.458.75 0 1.395-.152 1.934-.457.539-.317.978-.75 1.318-1.3.352-.552.61-1.19.774-1.917.164-.727.246-1.506.246-2.338v-.369c0-.82-.082-1.588-.246-2.303a5.965 5.965 0 00-.774-1.916 3.692 3.692 0 00-1.336-1.318c-.539-.328-1.189-.492-1.951-.492-.75 0-1.394.164-1.933.492-.54.316-.979.756-1.319 1.318a6.23 6.23 0 00-.756 1.916 10.282 10.282 0 00-.246 2.303z"
      ></path>
    </svg>
  );
}