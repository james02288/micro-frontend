<template>
  <div
    id="chat"
    class="row"
  >
    <div
      id="chatList"
      class="col-md-3 border-dark border-right"
    >
      <ol>
        <li v-for="(chatroom) in chatrooms">
          <a
            href="javascript:;"
            v-on:click="selectRoom(chatroom.roomid, chatroom.reciver_id)"
          >{{chatroom.reciver}}</a>
        </li>
      </ol>
    </div>
    <ChatRoom :roomid="currentRoom" />
    <ChatInfo :reciver_id="currentUserId" />
  </div>

</template>

<script>
  import ChatRoom from "@/components/Chat/ChatRoom.vue";
  import ChatInfo from "@/components/Chat/ChatInfo.vue";
  import axios from "axios";
  export default {
    name: "home",
    data() {
      return {
        chatrooms: [],
        currentRoom: "",
        currentUserId: ""
      };
    },
    components: {
      ChatRoom,
      ChatInfo
    },
    methods: {
      selectRoom(roomid, userId) {
        this.currentRoom = String(roomid);
        this.currentUserId = String(userId);
      }
    },
    mounted() {
      axios
        .get("http://127.0.0.1:3000/chat?user1=" + this.$store.state.user_id)
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
            .get("http://127.0.0.1:3000/chat?user2=" + this.$store.state.user_id)
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
                this.currentUserId = String(this.chatrooms[0].reciver_id);
              }
            });
        });
    }
  };
</script>