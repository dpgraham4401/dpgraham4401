<template>
  <div
    class="header bg-white rounded-full w-28 h-16 relative overflow-hidden flex items-center justify-center">
    <!--Waves Container-->
    <div>
      <div class="pt-4">
        <img alt="Logo" class="w-20 h-1/4 logo-bob" src="/img/logo.svg" />
      </div>
      <svg class="absolute bottom-0 left-0 w-full h-1/3" preserveAspectRatio="none"
           shape-rendering="auto"
           viewBox="0 24 150 28" xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <path id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use class="fill-blue-300" x="0" xlink:href="#gentle-wave" y="0" />
          <use class="fill-blue-400" x="28" xlink:href="#gentle-wave" y="3" />
          <use class="fill-blue-500" x="48" xlink:href="#gentle-wave" y="7" />
        </g>
      </svg>
    </div>
    <!--Waves end-->
  </div>
</template>

<style scoped>
@keyframes bobUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

/* Attach the bob animation to the logo */
.logo-bob {
  animation: bobUpDown 4s ease-in-out infinite;
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
