<template>
  <div class="home">
    <Nav></Nav>
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center w-100"
        style="height: 100vh;"
      >
        <div
          class="text-center w-50 py-5 px-4 rounded border-dark border"
          v-if="!is_login"
        >
          <h4>請登入</h4>
          <div
            v-if="is_error"
            class="alert alert-dark border-dark border bg-white"
            role="alert"
          >
            <i class="material-icons align-bottom">
              error_outline
            </i>
            帳號或密碼錯嘍
          </div>
          <div class="form-group text-left">
            <label for="">帳號</label>
            <input
              class="form-control"
              type="text"
              v-model="username"
            />
          </div>
          <div class="form-group text-left">
            <label for="">密碼</label>
            <input
              class="form-control"
              type="password"
              v-model="password"
            />
          </div>
          <a
            class="btn btn-outline-dark mr-2"
            href="javascript:;"
          >註冊</a>
          <a
            class="btn btn-outline-dark mr-2"
            href="javascript:;"
          >忘記密碼</a>
          <a
            class="btn btn-dark mr-2"
            href="javascript:;"
            v-on:click="login()"
          >登入</a>
        </div>
        <div
          class="text-center w-100 py-5"
          v-if="is_login"
        >
          <div class="row mb-4">
            <div class="col-6">
              <div class="px-4 rounded border-dark border bg-dark text-white py-3">
                <h2><b>顧客中心</b></h2>
                <div class="rounded bg-white text-dark mx-2 py-3 px-3">
                  <div class="border-bottom border-dark px-2 py-2 py-2">
                    <router-link
                      to="/Home"
                      tag="a"
                      class="selflink"
                    >
                      <h4>
                        <span class="material-icons align-bottom">
                          person
                        </span>
                        我的帳戶
                      </h4>
                    </router-link>
                  </div>
                  <div class="border-bottom border-dark px-2 py-2">
                    <router-link
                      to="/Home"
                      tag="a"
                      class="selflink"
                    >
                      <h4>
                        <span class="material-icons align-bottom">
                          assignment
                        </span>
                        訂單查詢
                      </h4>
                    </router-link>
                  </div>
                  <div class="border-bottom border-dark px-2 py-2">
                    <router-link
                      to="/Home"
                      tag="a"
                      class="selflink"
                    >
                      <h4>
                        <span class="material-icons align-bottom">
                          favorite
                        </span>
                        我的追蹤
                      </h4>
                    </router-link>
                  </div>
                  <div class="border-bottom border-dark px-2 py-2">
                    <router-link
                      to="/Home"
                      tag="a"
                      class="selflink"
                    >
                      <h4>
                        <span class="material-icons align-bottom">
                          bookmark
                        </span>
                        商品書籤
                      </h4>
                    </router-link>
                  </div>
                  <div class="px-2 pt-2">
                    <router-link
                      to="/Home"
                      tag="a"
                      class="selflink"
                    >
                      <h4>
                        <span class="material-icons align-bottom">
                          voice_chat
                        </span>
                        會議室
                      </h4>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="px-4 rounded border-dark border py-3">
                <h2><b>設計師中心</b></h2>
                <div class="rounded bg-dark text-white mx-2 py-3 px-3">
                  <div class="border-bottom border-white text-white px-2 py-2 py-2">
                    <router-link
                      to="/Home"
                      tag="a"
                      class="selflink text-white"
                    >
                      <h4>
                        <span class="material-icons align-bottom">
                          person
                        </span>
                        我的帳戶
                      </h4>
                    </router-link>
                  </div>
                  <div class="border-bottom border-white text-white px-2 py-2 py-2">
                    <router-link
                      to="/Home"
                      tag="a"
                      class="selflink text-white"
                    >
                      <h4>
                        <span class="material-icons align-bottom">
                          view_list
                        </span>
                        管理商品
                      </h4>
                    </router-link>
                  </div>
                  <div class="border-bottom border-white text-white px-2 py-2 py-2">
                    <router-link
                      to="/Home"
                      tag="a"
                      class="selflink text-white"
                    >
                      <h4>
                        <span class="material-icons align-bottom">
                          assignment
                        </span>
                        我的訂單
                      </h4>
                    </router-link>
                  </div>
                  <div class="border-bottom border-whitepx-2 py-2 py-2">
                    <router-link
                      to="/Home"
                      tag="a"
                      class="selflink text-white"
                    >
                      <h4>
                        <span class="material-icons align-bottom">
                          image
                        </span>
                        我的展示牆
                      </h4>
                    </router-link>
                  </div>
                  <div class="text-white px-2 pt-2">
                    <router-link
                      to="/Home"
                      tag="a"
                      class="selflink text-white"
                    >
                      <h4>
                        <span class="material-icons align-bottom">
                          voice_chat
                        </span>
                        會議室
                      </h4>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="btn btn-outline-dark"
            href="javascript:;"
            v-on:click="logout"
          >登出</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Nav from "@/components/Nav.vue";

  export default {
    name: "home",
    components: {
      Nav
    },
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
