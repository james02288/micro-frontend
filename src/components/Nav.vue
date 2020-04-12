<template>
  <div id="nav">
    <nav class="navbar navbar-expand-sm navbar-light bg-white fixed-top border-bottom border-dark">
      <router-link
        to="/"
        tag="a"
        class="navbar-brand"
      >
        <img
          src="../assets/logo.jpg"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        >
        Micro客製雲
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav my-2 my-lg-0">
          <li
            class="nav-item"
            v-if="is_login"
          >
            <router-link
              to="/chat"
              tag="a"
              class="nav-link"
            >
              <i class="material-icons align-bottom">
                voice_chat
              </i>
              會議室
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/Home"
              tag="a"
              class="nav-link"
            >
              <i class="material-icons align-bottom">
                home
              </i>
              回工作室
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    computed: {
      is_login() {
        return this.$store.state.is_login;
      }
    }
  };
</script>