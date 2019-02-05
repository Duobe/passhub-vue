<template>
  <span class="ph-logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="52" viewBox="0 0 42 52">
      <g>
        <path
          d="m16.002,46l-16,0l0,-28a17.883,17.883 0 0 1 5.272,-12.728a17.882,
              17.882 0 0 1 12.727,-5.272l6,0a17.882,17.882 0 0 1 12.728,5.272a17.883,
              17.883 0 0 1 5.272,12.728a17.883,17.883 0 0 1 -5.272,12.728a17.882,
              17.882 0 0 1 -12.728,5.272l-8,0l0,10l0.001,0zm4.999,-36a5.006,
              5.006 0 0 0 -5,5a4.965,4.965 0 0 0 1.987,3.991l-0.987,5.675a1.024,
              1.024 0 0 0 1.044,1l5.912,0a1.024,1.024 0 0 0 1.044,-1l-0.987,
              -5.676a4.963,4.963 0 0 0 1.987,-3.99a5.006,5.006 0 0 0 -4.999,-5l-0.001,0z"
          fill="#fff"
        ></path>
        <path
          d="m10.001,36l6,0a0,0 0 0 1 0,0l0,10a6,6 0 0 1 -6,6l-4,0a6,6 0 0 1 -6,-6l0, 0a10,10 0 0 1 10,-10z"
          fill="#e0e0e0"
        ></path>
      </g>
    </svg>
  </span>
</template>
<style lang="less" scoped>
@import url('../../styles/theme.less');
.ph-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18.75%;
  background: @grey1;
  height: 32px;
  width: 32px;

  svg {
    width: 50%;
  }
}
</style>