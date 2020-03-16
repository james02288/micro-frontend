<template>
  <div id="chat">
    <ChatRoom roomid="123" />
  </div>

</template>

<script>
  import ChatRoom from "@/components/Chat/ChatRoom.vue";

  export default {
    name: "home",
    components: {
      ChatRoom
    }
  };
</script>