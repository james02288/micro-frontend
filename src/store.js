import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    is_login: false,
    username: null,
    user_id: null,
    call: false,
    is_call: false
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
    },
    callChange(state) {
      state.call = !state.call;
    },
    isCallChange(state) {
      state.is_call = !state.is_call;
    }
  },
  actions: {
    LOGIN: (context, { target }) => {
      return axios
        .get(
          "http://127.0.0.1:3000/account?username=" +
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
