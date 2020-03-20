<style>
  textarea {
    resize: none;
  }
</style>
<template>
  <div
    id="chatroom"
    class="col-md-6 overflow-auto"
    style="padding-top: 73px;height:100vh; padding-bottom: 40px;"
  >
    <div>
      <div>
        <!-- 區塊：body -->
        <div
          id="js-roomBody"
          class="roomBody"
        >
          <!-- 註解：使用template來當迴圈容器，或是判斷用的容器，當條件達成時產出template內容 -->
          <template v-for="item in messages">
            <!-- other people -->
            <template v-if="item.userName != userName">
              <div class="text-left">
                <!-- 註解：Vue使用雙花括號{{}}來顯示script中data:的資料 -->
                <div>{{item.userName}}</div>
                <div class="border border-dark d-inline-block shadow-sm px-4 py-2 rounded-lg">{{item.message}}</div>
                <div class="text-muted">{{item.timeStamp}}</div>
              </div>
            </template>
            <!-- 區塊：self -->
            <template v-if="item.userName == userName">
              <div class="text-right">
                <div>我</div>
                <div class="bg-dark d-inline-block shadow-sm px-4 py-2 text-white rounded-lg">{{item.message}}</div>
                <div class="text-muted">{{item.timeStamp}}</div>
              </div>
            </template>
          </template>
        </div>
        <!-- 區塊：bottom -->
        <!-- 註解：使用:class來寫class是否顯示的判斷式{ class: 判斷式 } -->
        <div
          class="position-fixed col-md-6 mx-auto px-3"
          style="bottom:5px; left:0; right: 0; height: 35px;"
        >
          <!-- 若要再帶入原生js的event(e)到function中，必須使用$event當參數傳入 -->
          <textarea
            id="js-message"
            class="rounded-pill col-10"
            style="height: 35px;"
            @keydown.enter="sendMessage($event)"
          ></textarea>
          <a
            href="javascript:;"
            class="ml-2 selflink"
            v-on:click="sendMessage($event)"
          >
            <i
              class="material-icons"
              style="font-size: 35px"
            >
              send
            </i>
          </a>
        </div>
      </div>
      <!-- 區塊：modal -->
      <div
        id="js-modal"
        class="modal"
        style="display: none;"
      >
        <div class="modal__container">
          <header class="modal__header">
            <h2 class="view-title">輸入名稱</h2>
          </header>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var msgRef = null;
  // msgRef = firebase中的資料表/messages/，若沒有的會自動建立
  export default {
    // 指定此頁使用的name
    name: "ChatRoom",
    // 資料位置，於html中可用{{}}渲染出來
    data() {
      return {
        messages: []
      };
    },
    computed: {
      userName() {
        return this.$store.state.username;
      },
      is_login() {
        return this.$store.state.is_login;
      }
    },
    props: {
      roomid: String
    },
    // 這個頁面的functions
    methods: {
      /** 彈出設定視窗 */
      setName() {
        document.querySelector("#js-modal").style.display = "block";
      },
      /** 儲存設定名稱 */
      saveName() {
        // vue的mtthod中this是指export中這整塊的資料
        const vm = this;
        if (this.userName.trim() == "") {
          return;
        }
        document.querySelector("#js-modal").style.display = "none";
      },
      /** 取得時間 */
      getTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const format = hours >= 12 ? "下午" : "上午";
        return `${format} ${hours}:${minutes}`;
      },
      /** 傳送訊息 */
      sendMessage(e) {
        const vm = this;
        let message = document.querySelector("#js-message");
        // 如果是按住shift則不傳送訊息(多行輸入)
        if (e.shiftKey) {
          return false;
        }
        // 如果輸入是空則不傳送訊息
        if (message.value.length <= 1 && message.value.trim() == "") {
          // 避免enter產生的空白換行
          e.preventDefault();
          return false;
        }
        // 對firebase的db做push，db只能接受json物件格式，若要用陣列要先轉字串來存
        msgRef.push({
          userName: this.userName,
          message: message.value,
          // 取得時間，這裡的vm.getTime()就是method中的getTime
          timeStamp: vm.getTime()
        });
        // 清空輸入欄位並避免enter產生的空白換行
        message.value = "";
        e.preventDefault();
      }
    },
    // update是vue的生命週期之一，接再munted後方代表HTML元件渲染完成後
    updated() {
      // 當畫面渲染完成，把聊天視窗滾到最底部(讀取最新消息)
      const roomBody = document.querySelector("#chatroom");
      roomBody.scrollTop = roomBody.scrollHeight;
    },
    watch: {
      roomid() {
        msgRef = null;
        this.messages = [];
        msgRef = firebase.database().ref("/messages-" + this.roomid + "/");
        const vm = this;
        msgRef.on("value", function(snapshot) {
          const val = snapshot.val();
          vm.messages = val;
        });
      }
    },
    mounted() {
      if (!this.is_login) {
        this.$router.push("/");
      }
      msgRef = firebase.database().ref("/messages-" + this.roomid + "/");
      const vm = this;
      msgRef.on("value", function(snapshot) {
        const val = snapshot.val();
        vm.messages = val;
      });
    }
  };
</script>