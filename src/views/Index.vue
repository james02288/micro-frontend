<template>
  <div id="index">
    <Navbar></Navbar>
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="1"
        ></li>
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="2"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://i.imgur.com/GRO0m7r.png"
            class="d-block w-100"
          >
        </div>
        <div class="carousel-item">
          <img
            src="https://i.imgur.com/GRO0m7r.png"
            class="d-block w-100"
          >
        </div>
        <div class="carousel-item">
          <img
            src="https://i.imgur.com/GRO0m7r.png"
            class="d-block w-100"
          >
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="row text-center pt-3 pb-2 border-dark border-bottom">
      <div class="col-2">
        <a
          href="javascript:;"
          class="selflink"
        >
          <h4>主題小舖</h4>
        </a>
      </div>
      <div class="col-2">
        <a
          href="javascript:;"
          class="selflink"
        >
          <h4>所有分類</h4>
        </a>
      </div>
      <div class="col-2">
        <a
          href="javascript:;"
          class="selflink"
        >
          <h4>居家生活</h4>
        </a>
      </div>
      <div class="col-2">
        <a
          href="javascript:;"
          class="selflink"
        >
          <h4>繪畫藝術</h4>
        </a>
      </div>
      <div class="col-2">
        <a
          href="javascript:;"
          class="selflink"
        >
          <h4>時尚穿搭</h4>
        </a>
      </div>
      <div class="col-2">
        <a
          href="javascript:;"
          class="selflink"
        >
          <h4>手作飾品</h4>
        </a>
      </div>
    </div>
    <div class="row px-5 mt-4">
      <div class="col-2">
        <div class="card mb-2">
          <div class="card-header bg-dark text-white">
            商品搜尋
          </div>
          <div class="card-body">
            <p class="card-text">您想得到的客製化商品？</p>
            <input
              type="text"
              class="form-control"
              style="width: 100%;"
            >
            <p class="card-text">您的客製化商品預算？</p>
            <input
              type="range"
              class="form-control-range"
              id="formControlRange"
            >
            <label for="">0</label>
            <br>
            <p class="text-right">
              <button class="btn btn-outline-dark">開始搜尋</button>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-header bg-dark text-white">
            商品分類
          </div>
          <div class="card-body">
            <div class="row text-center">
              <div class="col-6">
                <a
                  href="javascript:;"
                  class="btn btn-outline-dark rounded-pill"
                >
                  主題小舖
                </a>
                <br>
                聖誕節慶<br>
                交換禮物<br>
                暖心冬季<br><br>
                <a
                  href="javascript:;"
                  class="btn btn-outline-dark rounded-pill"
                >
                  居家生活
                </a>
                <br>
                裝飾布置<br>
                質感家具<br>
                精緻電器<br><br>
                <a
                  href="javascript:;"
                  class="btn btn-outline-dark rounded-pill"
                >
                  手作飾品
                </a>
                <br>
                手鍊<br>
                項鍊<br>
                耳環<br><br>
              </div>
              <div class="col-6">
                <a
                  href="javascript:;"
                  class="btn btn-outline-dark rounded-pill"
                >
                  時尚穿搭
                </a>
                <br>
                插畫<br>
                四顏繪<br>
                壁畫<br><br>
                <a
                  href="javascript:;"
                  class="btn btn-outline-dark rounded-pill"
                >
                  繪畫藝術
                </a>
                <br>
                圍巾<br>
                外套<br>
                手套<br>
                上衣<br>
                襪子<br>
                鞋子<br><br>
                <a
                  href="javascript:;"
                  class="btn btn-outline-dark rounded-pill"
                >
                  美食饗宴
                </a>
                <br>
                甜點<br>
                鹹食<br><br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-10">
        <h3>編輯精選</h3>
        <div class="row">
          <div
            class="col-xl-2 col-lg-4 col-md-6"
            v-for="(item, index) in featureds"
            v-bind:key="index"
          >
            <a
              href="javascript:;"
              class="selflink"
            >
              <div class="card item">
                <img
                  v-bind:src="item.image"
                  class="card-img-top"
                >
                <div class="card-body">
                  <h5 class="card-title"><b>{{item.title}}</b></h5>
                  <p class="card-text">設計師 {{item.auther}}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-4">
            <h3>快閃活動</h3>
            <a
              href="javascript:;"
              class="selflink"
            >
              <div class="card item">
                <img
                  src="https://i.imgur.com/YhB1DKr.jpg"
                  class="card-img-top"
                >
                <div class="card-body">
                  <h5 class="card-title"><b>【快閃活動】</b></h5>
                  <p class="card-text">查看詳情</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-8">
            <h3>今日新星</h3>
            <div class="row">
              <div
                class="col-3 mb-3"
                v-for="(item, index) in today"
                v-bind:key="index"
              >
                <a
                  href="javascript:;"
                  class="selflink"
                >
                  <div class="card item">
                    <img
                      v-bind:src="item.image"
                      class="card-img-top"
                    >
                    <div class="card-body">
                      <h5 class="card-title"><b>{{item.title}}</b></h5>
                      <p class="card-text">設計師 {{item.auther}}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <h3>聖誕節慶</h3>
        <div class="row">
          <div
            class="col-xl-2 col-lg-4 col-md-6 mb-3"
            v-for="(item, index) in santa"
            v-bind:key="index"
          >
            <a
              href="javascript:;"
              class="selflink"
            >
              <div class="card item">
                <img
                  v-bind:src="item.image"
                  class="card-img-top"
                >
                <div class="card-body">
                  <h5 class="card-title"><b>{{item.title}}</b></h5>
                  <p class="card-text">設計師 {{item.auther}}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Navbar from "@/components/HomeNavbar.vue";
  export default {
    components: {
      Navbar
    },
    data() {
      return {
        featureds: [],
        today: [],
        santa: []
      };
    },
    mounted() {
      this.$http.get("http://localhost:3000/featured").then(res => {
        this.featureds = res.data;
      });
      this.$http.get("http://localhost:3000/today").then(res => {
        this.today = res.data;
      });
      this.$http.get("http://localhost:3000/santa").then(res => {
        this.santa = res.data;
      });
    }
  };
</script>

<style>
  .item {
    box-shadow: 0px 0px 5px #00000020;
    transition: 0.3s;
  }
  .item:hover {
    box-shadow: 0px 0px 10px #00000050;
  }
</style>