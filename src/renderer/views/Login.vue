<template>
  <div class="login">
    <Logo></Logo>
    <ph-input-container right>
      <ph-input
        v-model="passPhrase"
        type="password"
        autocomplete="new-password"
        @keyup.native="keyUp($event)"
      >
      </ph-input>
      <template slot="right-icon">
        <ph-icon name="log-in" @click="login"></ph-icon>
      </template>
      <div v-if="isLoading">loading...</div>
    </ph-input-container>
  </div>
</template>
<script>
import Logo from "../components/Logo"

export default {
  name: "login",
  components: {
    Logo
  },
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

      if (this.debug) {
        this.$router.push({ name: 'home' })
        return
      }

      this.$store.dispatch('login', { passPhrase: this.passPhrase })
        .then(() => {
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
.login {
  margin: 128px auto auto;
  width: 320px;
}
</style>
