<template>
  <div class="home">
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center w-100"
        style="height: 100vh;"
      >
        <div class="text-center w-50 py-5 px-4 rounded border-dark border">
          <h4 v-if="!is_login">請登入</h4>
          <h4 v-if="is_login">哈囉! {{name}}</h4>
          <h4 v-if="is_login">您已登入嘍!</h4>
          <div
            v-if="is_error"
            class="alert alert-dark border-dark border bg-white"
            role="alert"
          >
            <i class="material-icons align-bottom">
              error_outline
            </i> 帳號或密碼錯嘍
          </div>
          <div
            class="form-group text-left"
            v-if="!is_login"
          >
            <label for="">帳號</label>
            <input
              class="form-control"
              type="text"
              v-model="username"
            />
          </div>
          <div
            class="form-group text-left"
            v-if="!is_login"
          >
            <label for="">密碼</label>
            <input
              class="form-control"
              type="password"
              v-model="password"
            />
          </div>
          <a
            class="btn btn-outline-dark mr-2"
            v-if="!is_login"
            href="javascript:;"
          >註冊</a>
          <a
            class="btn btn-outline-dark mr-2"
            v-if="!is_login"
            href="javascript:;"
          >忘記密碼</a>
          <a
            class="btn btn-dark mr-2"
            v-if="!is_login"
            href="javascript:;"
            v-on:click="login()"
          >登入</a>
          <a
            class="btn btn-outline-dark"
            href="javascript:;"
            v-if="is_login"
            v-on:click="logout"
          >登出</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "home",
    data() {
      return {
        username: "",
        password: "",
        name: "",
        is_error: false
      };
    },
    computed: {
      is_login() {
        return this.$store.state.is_login;
      },
      userid() {
        return this.$store.state.user_id;
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
        this.$store.dispatch("LOGIN", { target }).then(() => {
          if (this.is_login) {
            this.is_error = false;
            axios
              .get("http://127.0.0.1:3000/account?id=" + String(this.userid))
              .then(res => {
                if (res.data.length != 0) {
                  this.name = res.data[0].name;
                }
              });
          } else {
            this.is_error = true;
          }
        });
      },
      logout() {
        this.$store.commit("logout");
        this.is_error = false;
      }
    }
  };
</script>
