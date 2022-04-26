<template>
  <div class="row" style="padding-top: 10%;">
    <div class="flex md4"></div>
    <div class="flex md4">
      <va-card style="background-color: rgb(241 241 241);">
        <va-card-title></va-card-title>
        <va-card-content>
          <div class="row">
            <div class="flex md12">
              <va-avatar
                size="large"
                src="https://play-lh.googleusercontent.com/tIeI_EWZFBCoHmV50hngRaWOqKfoERUNlROYjDuiDpc7yv_S-6_CpyNWIbN6C-aBAVtq=w240-h480-rw"
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="flex md12">
              <div style="font-size: 25px;">เข้าสู่ระบบ</div>
            </div>
          </div>
          <br />
          <br />
          <div class="row">
            <div class="flex md2"></div>
            <div class="flex md8" style="text-align: left;">ชื่อผู้ใช้งาน</div>
            <div class="flex md2"></div>
          </div>
          <div class="row" style="text-align: center;">
            <div class="flex md2"></div>
            <div class="flex md8">
              <va-input
                class="mb-4"
                v-model="userName"
                placeholder="กรุณากรอกชื่อผู้ใช้งาน"
              />
            </div>
            <div class="flex md2"></div>
          </div>
          <div class="row">
            <div class="flex md2"></div>
            <div class="flex md8" style="text-align: left;">รหัสผ่าน</div>
            <div class="flex md2"></div>
          </div>
          <div class="row" style="text-align: center;">
            <div class="flex md2"></div>
            <div class="flex md8">
              <va-input
                class="mb-4"
                v-model="password"
                placeholder="กรุณากรอกรหัสผ่าน"
              />
            </div>
            <div class="flex md2"></div>
          </div>
          <div class="row">
            <div class="flex md2"></div>
            <div class="flex md4" style="text-align: left;">
              <router-link to="/CreateAccount">สร้างบัญชีผูัใช้งาน</router-link>
            </div>
            <div class="flex md4" style="text-align: right;">
              <!-- <router-link to="/userManagement">
                <va-button>เข้าสู่ระบบ</va-button>
              </router-link> -->
              <va-button @click="Login">เข้าสู่ระบบ</va-button>
            </div>
            <div class="flex md2"></div>
          </div>
        </va-card-content>
      </va-card>
    </div>
    <div class="flex md4"></div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
  name: 'LogIn',
  components: {},
  data: () => ({
    userName: '',
    password: '',
    //urlBackend: 'http://localhost:3000',
    urlBackend: 'https://jet44.app.ruk-com.cloud',
  }),
  methods: {
    Login() {
      console.log(this.userName)
      console.log(this.password)
      axios
        .get(
          this.urlBackend + '/login/' + this.userName + '/' + this.password,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
        )
        .then((response) => {
          console.log('-----------------------------', response.data.data)
          let userObj = response.data.data
          if (userObj != undefined && userObj != '') {
            console.log('ผ่าน')
            this.$router.push({ name: 'UserManagement' })
          } else {
            console.log('ไม่ผ่าน')
            Swal.fire(
              'มีข้อผิดพลาด',
              'ไม่พบผู้ใช้งานหรือusernameและpasswordไม่ถูกต้อง',
              'error',
            )
          }
        })

        .catch((error) => {
          Swal.fire('มีข้อผิดพลาด', error.message, 'error')
          console.log(error)
        })
    },
  },
}
</script>

<style>
.row {
  padding: 5px;
}
</style>
