<template>
  <div id="app">
    <div
      class="position-fixed d-flex justify-content-center align-items-center w-100"
      style="height: 100vh; width: 100vw; z-index:99999; background-color: #00000050;"
      v-if="is_call"
    >
      <div
        class="card"
        style="width: 18rem;"
      >
        <div class="card-body">
          <h5 class="card-title">來電者：</h5>
          <p class="card-text">有人打來嘍</p>
          <a
            href="#"
            class="card-link"
          >接聽</a>
          <a
            href="#"
            class="card-link"
          >拒絕</a>
        </div>
      </div>
    </div>
    <div
      class="position-fixed d-flex justify-content-center align-items-center w-100"
      style="height: 100vh; width: 100vw; z-index:99999; background-color: #00000050;"
      v-if="call"
    >
      <div
        class="card"
        style="width: 18rem;"
      >
        <div class="card-body">
          <h5 class="card-title">撥號中</h5>
          <p class="card-text">撥號給</p>
          <a
            href="#"
            class="card-link"
          >取消</a>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
  a.selflink:link {
    color: rgb(82, 82, 82);
    background-color: transparent;
    text-decoration: none;
    transition: all 0.15s ease-in-out;
  }

  a.selflink:visited {
    color: black;
    background-color: transparent;
    text-decoration: none;
  }

  a.selflink:hover {
    color: black;
    background-color: transparent;
    text-decoration: none;
  }

  a.selflink:active {
    color: black;
    background-color: transparent;
    text-decoration: none;
  }
</style>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        current_online_id: ""
      };
    },
    computed: {
      is_login() {
        return this.$store.state.is_login;
      },
      user_id() {
        return this.$store.state.user_id;
      },
      call() {
        return this.$store.state.call;
      },
      is_call() {
        return this.$store.state.is_call;
      }
    },
    methods: {
      beforeunloadFn(e) {
        peer = null;
        conn = null;
        axios.delete("http://127.0.0.1:3000/online/" + this.current_online_id);
      }
    },
    created() {
      window.addEventListener("beforeunload", e => this.beforeunloadFn(e));
    },
    watch: {
      is_login() {
        if (this.is_login) {
          peer = new Peer();
          conn = null;
          const user_id = this.user_id;
          var self = this;
          peer.on("open", function(id) {
            axios
              .post("http://127.0.0.1:3000/online", {
                user_id: user_id,
                seed: id
              })
              .then(res => {
                self.current_online_id = String(res.data.id);
              });
          });
          peer.on("connection", function(con) {
            con.on("open", function() {
              // Receive messages
              con.on("data", function(data) {
                console.log("Received " + data);
              });
              // Send messages
              con.send("Hello!");
              conn = con;
              self.$router.push("/");
            });
          });
        } else {
          peer = null;
          conn = null;
          axios.delete("http://127.0.0.1:3000/online/" + this.current_online_id);
        }
      }
    },
    destroyed() {
      window.removeEventListener("beforeunload", e => this.beforeunloadFn(e));
    }
  };
</script>
