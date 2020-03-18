<template>
  <div
    id="chatinfo"
    class="col-md-3 border-dark border-left"
  >
    <h3>對方資訊</h3>
    <h5>暱稱：{{reciver.name}}</h5>
    <h5>帳號：{{reciver.username}}</h5>
    電話
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