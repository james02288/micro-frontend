<template>
  <div id="chatroom">
    <a href="javascript:;">{{roomid}}</a>
    <input
      type="text"
      v-model="roomid"
    >
  </div>
</template>

<script>
  export default {
    props: {
      roomid: String
    }
  };
</script>
