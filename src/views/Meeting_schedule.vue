<template>
  <div>
    <Nav></Nav>
    <div
      class="row"
      style="margin-top: 100px"
    >
      <div class="col-1"></div>
      <div class="col-3">
        <br><br><br><br>
        <h1>您好，<br>設計師{{name}}!</h1>
        <br>
        <h4>請規劃您的視訊會議時間</h4>
        <p>這個時間表將會提供給您的客戶作為<br>預約視訊面談的參考依據</p>
        <p>
          <span class="material-icons align-bottom">
            brightness_1
          </span>
          開放預約視訊面談
        </p>
        <p>
          <span class="material-icons text-secondary align-bottom">
            brightness_1
          </span>
          不開放預約視訊面談
        </p>
        <p>
          <span class="material-icons align-bottom">
            radio_button_unchecked
          </span>
          已有客戶預約
        </p>
      </div>
      <div class="col-7">
        <p class="text-secondary h4">2020年3月
          <a
            href="javascript:;"
            class="selflink text-secondary"
          >

            <span class="material-icons align-bottom">
              navigate_before
            </span>
          </a>
          <a
            href="javascript:;"
            class="selflink text-secondary"
          >
            <span class="material-icons align-bottom">
              navigate_next
            </span>
          </a>
        </p>
        <table
          class="table table-borderless"
          style="table-layout: fixed;"
        >
          <thead>
            <tr class="border-bottom border-dark">
              <td class="px-1 py-1 text-center align-middle text-white">
                <div class="rounded py-2 mb-2">
                </div>
              </td>
              <td class="px-1 py-1 text-center align-middle text-white">
                <div class="bg-secondary rounded py-2 mb-2">
                  週日
                  <br>
                  8
                </div>
              </td>
              <td class="px-1 py-1 text-center align-middle text-white">
                <div class="bg-secondary rounded py-2 mb-2">
                  週一
                  <br>
                  9
                </div>
              </td>
              <td class="px-1 py-1 text-center align-middle text-white">
                <div class="bg-secondary rounded py-2 mb-2">
                  週二<br>
                  10
                </div>
              </td>
              <td class="px-1 py-1 text-center align-middle text-white">
                <div class="bg-secondary rounded py-2 mb-2">
                  週三<br>
                  11
                </div>
              </td>
              <td class="px-1 py-1 text-center align-middle text-white">
                <div class="bg-secondary rounded py-2 mb-2">
                  週四<br>
                  12
                </div>
              </td>
              <td class="px-1 py-1 text-center align-middle text-white">
                <div class="bg-secondary rounded py-2 mb-2">
                  週五<br>
                  13
                </div>
              </td>
              <td class="px-1 py-1 text-center align-middle text-white">
                <div class="bg-secondary rounded py-2 mb-2">
                  週六<br>
                  14
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(each, index) in schedule[0].data"
              v-bind:key="index"
            >
              <td class="px-1 py-1 text-center align-middle text-dark">
                <h6
                  class="my-0"
                  v-bind:class="{ 'mt-2': index==0 }"
                >
                  {{index}}時~{{index+1}}時
                </h6>
              </td>
              <td
                v-for="(each_day, ed_index) in schedule"
                v-bind:key="ed_index"
                class="py-1 px-0 text-center align-middle text-white"
              >
                <a
                  href="javascript:;"
                  v-on:click="change(index, each_day.data[index],ed_index )"
                  class="selflink"
                >
                  <div
                    v-if="each_day.data[index]==0"
                    v-bind:class="{ 'mt-2': index==0 }"
                    class="bg-secondary rounded row h-100 py-2 mx-1"
                    style="min-height: 70px;"
                  >
                    <div class="col my-auto">
                    </div>
                  </div>
                  <div
                    v-else-if="each_day.data[index]==1"
                    v-bind:class="{ 'mt-2': index==0 }"
                    class="bg-dark rounded row h-100 py-2 mx-1"
                    style="min-height: 70px;"
                  >
                    <div class="col my-auto text-white">
                      開放預約
                    </div>
                  </div>
                  <div
                    v-else-if="each_day.data[index]==2"
                    v-bind:class="{ 'mt-2': index==0 }"
                    class="border border-dark text-dark rounded row h-100 py-2 mx-1"
                    style="min-height: 70px;"
                  >
                    <div class="col my-auto">
                      <b>王大明</b><br>已預約
                    </div>
                  </div>
                </a>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
  import Nav from "@/components/Nav.vue";

  export default {
    components: {
      Nav
    },
    computed: {
      name() {
        return this.$store.state.username;
      }
    },
    methods: {
      change(index, value, ed_index) {
        if (value == 2) {
          if (confirm("您確定要刪除此筆預約嗎?")) {
            var tmp = this.schedule[ed_index];
            tmp.data[index] = 1;
            this.$set(this.schedule, ed_index, tmp);
            this.$http
              .patch("http://localhost:3000/schedule/" + String(tmp.id), {
                data: tmp.data
              })
              .then(res => {
                console.log(res.data);
              });
          }
        } else if (value == 0) {
          var tmp = this.schedule[ed_index];
          tmp.data[index] = 1;
          this.$set(this.schedule, ed_index, tmp);
          this.$http
            .patch("http://localhost:3000/schedule/" + String(tmp.id), {
              data: tmp.data
            })
            .then(res => {
              console.log(res.data);
            });
        } else {
          var tmp = this.schedule[ed_index];
          tmp.data[index] = 0;
          this.$set(this.schedule, ed_index, tmp);
          this.$http
            .patch("http://localhost:3000/schedule/" + String(tmp.id), {
              data: tmp.data
            })
            .then(res => {
              console.log(res.data);
            });
        }
      }
    },
    data() {
      return {
        schedule: []
      };
    },
    mounted() {
      this.$http
        .get("http://localhost:3000/schedule?_sort=date&_order=asc")
        .then(res => {
          console.log(res.data);
          this.schedule = res.data;
        });
    }
  };
</script>