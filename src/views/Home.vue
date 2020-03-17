<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <input type="text" v-model="username" />
    <input type="text" v-model="password" />
    <a href="javascript:;" v-on:click="login()">登入{{ is_login }}</a>
    <a href="javascript:;" v-if="is_login" v-on:click="logout"
      >登出{{ is_login }}</a
    >
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    is_login() {
      return this.$store.state.is_login;
    }
  },
  methods: {
    login() {
      let username = this.username;
      let password = this.password;
      let target = {
        username: username,
        password: password
      };
      this.$store.dispatch("LOGIN", { target });
    },
    logout() {
      this.$store.commit("logout");
    }
  }
};
</script>
