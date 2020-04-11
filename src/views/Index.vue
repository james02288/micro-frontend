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
            src="../assets/index/1.png"
            class="d-block w-100"
          >
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/index/1.png"
            class="d-block w-100"
          >
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/index/1.png"
            class="d-block w-100"
          >
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
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
        <h4>主題小舖</h4>
      </div>
      <div class="col-2">
        <h4>所有分類</h4>
      </div>
      <div class="col-2">
        <h4>居家生活</h4>
      </div>
      <div class="col-2">
        <h4>繪畫藝術</h4>
      </div>
      <div class="col-2">
        <h4>時尚穿搭</h4>
      </div>
      <div class="col-2">
        <h4>手作飾品</h4>
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
        <hr>
        <hr>
        <h3>聖誕節慶</h3>
      </div>
    </div>
  </div>
</template>


<script>
  import Navbar from "@/components/HomeNavbar.vue";

  export default {
    components: {
      Navbar
    }
  };
</script>