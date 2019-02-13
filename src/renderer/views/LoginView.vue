<template>
  <div class="login-view">
    <ph-logo class="logo"></ph-logo>
    <ph-input-container>
      <ph-input
        class="input"
        v-model.trim="password"
        type="password"
        autocomplete="new-password"
        @keyup.native="keyUp($event)"
      ></ph-input>
      <ph-icon class="icon" name="arrow-right" size="20" @click="login"></ph-icon>
    </ph-input-container>
    <div v-if="isLoading">loading...</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: '',
      isLoading: false
    }
  },
  methods: {
    async login() {
      if (this.password.length < 0) return

      this.isLoading = true

      await this.$store.dispatch('login', this.password)
      this.isLoading = false
      this.$router.push({ path: '/' })
    },
    keyUp(event) {
      if (event.key === 'Enter') {
        this.login()
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../styles/theme.less');
.login-view {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-app-region: drag;
  & > div {
    width: 320px;
  }
  .logo {
    margin-bottom: 24px;
    height: 80px;
    width: 80px;
  }
  .icon {
    cursor: pointer;
    -webkit-app-region: no-drag;
  }
  input {
    height: 36px;
    -webkit-app-region: no-drag;
  }
}
</style>
