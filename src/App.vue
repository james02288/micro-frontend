<template>
  <div id="app">
    <Nav />
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<style>
</style>

<script>
  import Nav from "@/components/Nav.vue";
  import axios from "axios";
  export default {
    components: {
      Nav
    },
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
      }
    },
    methods: {
      beforeunloadFn(e) {
        axios.delete("http://127.0.0.1:3000/online/" + this.current_online_id);
      }
    },
    created() {
      window.addEventListener("beforeunload", e => this.beforeunloadFn(e));
    },
    watch: {
      is_login() {
        console.log("hello");
        if (this.is_login) {
          axios
            .post("http://127.0.0.1:3000/online", {
              user_id: this.user_id,
              seed: "hello"
            })
            .then(res => {
              this.current_online_id = String(res.data.id);
            });
        } else {
          axios.delete("http://127.0.0.1:3000/online/" + this.current_online_id);
        }
      }
    },
    destroyed() {
      window.removeEventListener("beforeunload", e => this.beforeunloadFn(e));
    }
  };
</script>
