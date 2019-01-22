<template>
  <div class="login">
    <div>
      <ph-logo></ph-logo>
      <ph-input-container>
        <ph-input
          v-model="passPhrase"
          type="password"
          autocomplete="new-password"
          @keyup.native="keyUp($event)"
        >
        </ph-input>
        <ph-icon name="arrow-right" size="20" @click="login"></ph-icon>
      </ph-input-container>
    </div>
    <div v-if="isLoading">loading...</div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      passPhrase: "",
      isLoading: false
    }
  },
  methods: {
    login: function () {
      this.passPhrase = this.passPhrase.toLowerCase().trim()

      if (this.passPhrase.length < 0) return

      this.isLoading = true

      this.$store.dispatch('login', { passPhrase: this.passPhrase }).then(() => {
        this.isLoading = false
        this.$router.push({ name: 'home' })
      })
    },
    keyUp: function (event) {
      if (event.key === 'Enter') {
        this.login()
      }
    }
  }
}
</script>
<style lang="less">
@import url('../styles/theme.less');
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    margin-bottom: 24px;
  }
  .icon {
    cursor: pointer;
  }
  input {
    height: 36px;
  }
}
</style>
