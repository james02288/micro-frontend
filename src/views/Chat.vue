<template>
  <div id="chat">
    <div id="chatList">
      <ol>
        <li v-for="(chatroom) in chatrooms">
          <a
            href="javascript:;"
            v-on:click="selectRoom(chatroom.roomid)"
          >{{chatroom.reciver}}</a>
        </li>
      </ol>
    </div>
    <ChatRoom :roomid="currentRoom" />
    {{chatrooms}}
  </div>

</template>

<script>
  import ChatRoom from "@/components/Chat/ChatRoom.vue";
  import axios from "axios";
  export default {
    name: "home",
    data() {
      return {
        chatrooms: [],
        currentRoom: ""
      };
    },
    components: {
      ChatRoom
    },
    methods: {
      selectRoom(roomid) {
        this.currentRoom = String(roomid);
      }
    },
    mounted() {
      axios
        .get("http://localhost:3000/chat?user1=" + this.$store.state.user_id)
        .then(res => {
          res.data.forEach(chatroom => {
            this.chatrooms.push({
              roomid: chatroom.id,
              reciver_id: chatroom.user2,
              reciver: chatroom["user2-name"]
            });
          });
        })
        .then(() => {
          axios
            .get("http://localhost:3000/chat?user2=" + this.$store.state.user_id)
            .then(res => {
              res.data.forEach(chatroom => {
                this.chatrooms.push({
                  roomid: chatroom.id,
                  reciver_id: chatroom.user1,
                  reciver: chatroom["user1-name"]
                });
              });
            })
            .then(() => {
              if (this.chatrooms.length != 0) {
                this.currentRoom = String(this.chatrooms[0].roomid);
              }
            });
        });
    }
  };
</script>