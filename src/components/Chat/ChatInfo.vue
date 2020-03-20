<template>
  <div
    id="chatinfo"
    class="col-md-3 border-dark border-left"
    style="padding-top: 73px;"
  >
    <h3>對方資訊</h3>
    <h5>暱稱：{{ reciver.name }}</h5>
    <h5>帳號：{{ reciver.username }}</h5>
    <a
      href="javascript:;"
      class="btn btn-success"
      v-on:click="call"
    >撥打視訊</a>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "chatinfo",
    data() {
      return {
        reciver: {}
      };
    },
    computed: {},
    props: {
      reciver_id: ""
    },
    methods: {
      call() {
        console.log("call");
        axios
          .get("http://127.0.0.1:3000/online?user_id=" + this.reciver_id)
          .then(res => {
            if (res.data.length == 0) {
              alert("對方不在線上;");
            } else {
            }
          });
      }
    },
    mounted() {},
    watch: {
      reciver_id() {
        axios
          .get("http://127.0.0.1:3000/account?id=" + this.reciver_id)
          .then(res => {
            this.reciver = res.data[0];
          });
      }
    }
  };
</script>
