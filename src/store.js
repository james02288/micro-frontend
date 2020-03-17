import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    is_login: false,
    username: null,
    user_id: null
  },
  mutations: {
    setLogin(state, data) {
      if (data.length == 1) {
        state.is_login = true;
        state.username = data[0].username;
        state.user_id = data[0].id;
      }
    },
    logout(state) {
      state.is_login = false;
      state.username = null;
      state.user_id = null;
    }
  },
  actions: {
    LOGIN: (context, { target }) => {
      return axios
        .get(
          "http://localhost:3000/account?username=" +
            target.username +
            "&password=" +
            target.password
        )
        .then(response => {
          context.commit("setLogin", response.data);
        });
    }
  }
});
