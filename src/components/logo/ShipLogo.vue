<template>
  <a href="/"
     aria-label="Home"
     class="header bg-white rounded-full w-28 h-16 relative overflow-hidden flex items-start justify-center focus:outline-offset-2 focus:outline-vim-dark dark:focus:outline-vim-light">
    <div>
      <!--Waves behind pirate ship-->
      <svg class="absolute bottom-0 left-0 w-full h-2/5" preserveAspectRatio="none"
           shape-rendering="auto"
           viewBox="0 24 150 28" xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <path id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          <path id="gentle-wave-long"
                d="M-200 44c40 0 80-10 120-10 s80 10 120 10 80-10 120-10 80 10 120 10 v44h-480z" />
        </defs>
        <g class="parallax">
          <use class="fill-blue-200" x="0" xlink:href="#gentle-wave-long" y="-10" />
          <use class="fill-blue-400" x="0" xlink:href="#gentle-wave" y="0" />
        </g>
      </svg>
      <!--Pirate Ship-->
      <div>
        <img alt="Logo" class="w-20 h-1/2 logo-bob-rotate" src="/img/pirate_ship_full_bottom.svg" />
      </div>
      <!--Foreground Waves-->
      <svg class="absolute bottom-0 left-0 w-full h-2/5" preserveAspectRatio="none"
           shape-rendering="auto"
           viewBox="0 24 150 28" xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <path id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          <path id="gentle-wave-long"
                d="M-200 44c40 0 80-10 120-10 s80 10 120 10 80-10 120-10 80 10 120 10 v44h-480z" />
        </defs>
        <g class="parallax">
          <use class="fill-blue-300 opacity-65" x="48" xlink:href="#gentle-wave" y="5" />
          <use class="fill-blue-500 opacity-70" x="88" xlink:href="#gentle-wave" y="5" />
          <use class="fill-blue-900" x="0" xlink:href="#gentle-wave-long" y="7" />
        </g>
      </svg>
    </div>
    <!--Waves end-->
  </a>
</template>

<style scoped>
/* Bob up/down + rotate */
@keyframes bobAndTilt {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  15% {
    /* Slightly up, small clockwise tilt */
    transform: translateY(-3px) rotate(8deg);
  }
  30% {
    /* Up more, a bit more tilt */
    transform: translateY(-5px) rotate(10deg);
  }
  40% {
    /* Closer to peak, reduce tilt slightly */
    transform: translateY(-7px) rotate(6deg);
  }
  50% {
    /* Peak: fully up, flat */
    transform: translateY(-10px) rotate(0deg);
  }
  60% {
    /* Coming down, slight counterclockwise tilt */
    transform: translateY(-7px) rotate(-6deg);
  }
  70% {
    /* Further down, increase counterclockwise tilt */
    transform: translateY(-5px) rotate(-10deg);
  }
  85% {
    /* Almost bottom, lighten tilt */
    transform: translateY(-3px) rotate(-8deg);
  }
  100% {
    /* Back at bottom, flat */
    transform: translateY(0) rotate(0deg);
  }
}


/* Attach the bob+tilt animation to the logo */
.logo-bob-rotate {
  animation: bobAndTilt 4s ease-in-out infinite;
  animation-timing-function: linear;
}


.parallax > use {
  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -1s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -5s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
}
</style>
