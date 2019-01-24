<template>
  <div class="home">
    <Wrapper>
      <div class="content">
        <router-view class="view" :key="$route.fullPath"></router-view>
        <router-view class="view one" name="entry" :key="$route.fullPath"></router-view>
      </div>
      <router-view class="view two" name="field" :key="$route.fullPath"></router-view>
    </Wrapper>
  </div>
</template>
<script>
import Wrapper from "../components/Wrapper"

export default {
  name: "Home",
  components: {
    Wrapper
  }
}
</script>
