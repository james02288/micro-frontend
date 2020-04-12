<template>
  <div
    id="navbar"
    class="border-bottom border-dark py-2 px-2"
  >
    <div class="row">
      <div class="col-3 text-right align-middle">
        <img
          src="../assets/logo.jpg"
          width="80"
        >
      </div>
      <div class="col-6 text-left align-middle">
        <h6>設計師的服務業</h6>
        <div class="row">
          <div class="col-11">
            <input
              type="text"
              class="form-control"
              style="width: 100%;"
              placeholder="搜尋屬於您的客製化商品或設計師"
            >
          </div>
          <div class="col-1 text-left">
            <span class="material-icons align-bottom">
              search
            </span>
          </div>
        </div>

        <h6 class="mt-2">
          現在最熱門 --> 聖誕禮物 交換禮物 手機殼 環保吸管 環保杯套
        </h6>
      </div>
      <div class="col-3 text-center align-middle py-2">
        <div class="row">
          <div class="col-6 text-right py-2">
            <router-link
              to="/Home"
              tag="a"
              class="btn btn-outline-dark btn-lg"
            >
              註冊/登入
            </router-link>
          </div>
          <div class="col-3">
            <span
              class="material-icons"
              style="font-size:45px;"
            >
              favorite_border
            </span>
            <br>
            我的追蹤
          </div>
          <div class="col-3">
            <router-link
              to="/Home"
              tag="a"
              class="selflink"
            >
              <span
                class="material-icons"
                style="font-size:45px;"
              >
                person
              </span>
              <br>
              我的帳戶
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>