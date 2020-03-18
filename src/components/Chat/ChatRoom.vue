<template>
  <div id="chatroom">
    <a href="javascript:;">{{roomid}}</a>
    <input
      type="text"
      v-model="roomid"
    >
    <div class="container">
      <!-- 區塊：name area -->
      <div class="name">
        <h3>Name：{{ userName }}</h3>

      </div>
      <!-- 區塊：chat room -->
      <div class="chatRoom">
        <!-- 區塊：head -->
        <div class="roomHead">
          <div class="roomHead__topButtons">
            <div class="roomHead__button close"></div>
            <div class="roomHead__button minimize"></div>
            <div class="roomHead__button zoom"></div>
          </div>
          <div class="roomHead__title">聊天室</div>
        </div>
        <!-- 區塊：body -->
        <div
          id="js-roomBody"
          class="roomBody"
        >
          <!-- 註解：使用template來當迴圈容器，或是判斷用的容器，當條件達成時產出template內容 -->
          <template v-for="item in messages">
            <!-- other people -->
            <template v-if="item.userName != userName">
              <div class="messageBox">
                <div class="messageBox__content text-left">
                  <!-- 註解：Vue使用雙花括號{{}}來顯示script中data:的資料 -->
                  <div class="messageBox__name">{{item.userName}}</div>
                  <div class="messageBox__text bg-light">{{item.message}}</div>
                  <div class="messageBox__time text-muted">{{item.timeStamp}}</div>
                </div>
              </div>
            </template>
            <!-- 區塊：self -->
            <template v-if="item.userName == userName">
              <div class="messageBox messageBox--self text-right">
                <div class="messageBox__content messageBox__content--self">
                  <div class="messageBox__text messageBox__text--self bg-success">{{item.message}}</div>
                  <div class="messageBox__time messageBox__time--self text-muted">{{item.timeStamp}}</div>
                </div>
              </div>
            </template>
          </template>
        </div>
        <!-- 區塊：bottom -->
        <!-- 註解：使用:class來寫class是否顯示的判斷式{ class: 判斷式 } -->
        <div
          class="roomBottom"
          :class="{ disable: !userName }"
        >
          <div class="roomBottom__tools"></div>
          <div class="roomBottom__input">
            <!-- 若要再帶入原生js的event(e)到function中，必須使用$event當參數傳入 -->
            <textarea
              id="js-message"
              class="roomBottom__input__textarea"
              :class="{ disable: !userName }"
              @keydown.enter="sendMessage($event)"
            ></textarea>
          </div>
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
          <div class="modal__body">
            <!-- 註解：使用@keydown.enter來偵測keydown enter，觸發時執行method中的saveName() -->

            <div
              class="button"
              @click="saveName()"
            >設定</div>
          </div>
          <footer class="modal__footer"></footer>
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
    // mounted是vue的生命週期之一，代表模板已編譯完成，已經取值準備渲染HTML畫面了
    mounted() {
      console.log(1);
      msgRef = firebase.database().ref("/messages-" + this.roomid + "/");
      const vm = this;
      msgRef.on("value", function(snapshot) {
        const val = snapshot.val();
        vm.messages = val;
      });
    },
    // update是vue的生命週期之一，接再munted後方代表HTML元件渲染完成後
    updated() {
      // 當畫面渲染完成，把聊天視窗滾到最底部(讀取最新消息)
      const roomBody = document.querySelector("#js-roomBody");
      roomBody.scrollTop = roomBody.scrollHeight;
    }
  };
</script>
