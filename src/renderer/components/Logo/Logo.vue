<template>
  <span class="logo" v-html="getImage()"></span>
</template>
<script>
export default {
  name: 'ph-logo',
  data() {
    return {
      logo: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <g id="Logo" transform="translate(-600 -278)">
    <rect id="background" width="80" height="80" rx="15" transform="translate(600 278)"/>
    <g id="组_1" data-name="组 1" transform="translate(619.333 292)">
      <path id="Exclusion_1" data-name="Exclusion 1" d="M2477.668-73h-16v-28a17.883,17.883,0,0,1,5.272-12.728A17.882,17.882,0,0,1,2479.667-119h6a17.882,17.882,0,0,1,12.728,5.272A17.883,17.883,0,0,1,2503.667-101a17.883,17.883,0,0,1-5.272,12.728A17.882,17.882,0,0,1,2485.667-83h-8v10Zm5-36a5.006,5.006,0,0,0-5,5,4.965,4.965,0,0,0,1.987,3.991l-.987,5.675a1.024,1.024,0,0,0,1.044,1h5.912a1.024,1.024,0,0,0,1.044-1l-.987-5.676a4.963,4.963,0,0,0,1.987-3.99A5.006,5.006,0,0,0,2482.668-109Z" transform="translate(-2462 119)"/>
      <path id="Back" d="M10,0h6a0,0,0,0,1,0,0V10a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6v0A10,10,0,0,1,10,0Z" transform="translate(-0.333 36)" fill="#e0e0e0"/>
    </g>
  </g>
</svg>
      `
    };
  },
  methods: {
    getImage() {
      return this.logo;
    }
  }
};
</script>
<style lang="less">
@import url('../../styles/theme.less');
.logo {
  display: block;
  text-align: center;
  svg {
    rect#background{
      fill: @grey1;
    }
    path#Exclusion_1 {
      fill: @white;
    }
    g {
      fill: #e0e0e0
    }
  }
}
</style>