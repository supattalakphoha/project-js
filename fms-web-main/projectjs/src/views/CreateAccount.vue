<template>
  <div class="row" style="padding-top: 5%;">
    <div class="flex md3"></div>
    <div class="flex md6">
      <va-card style="background-color: rgb(241 241 241);">
        <va-card-title
          style="
            font-size: 25px;
            background-color: cadetblue;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          "
        >
          สร้างบัญชีผูัใช้งาน
        </va-card-title>
        <va-card-content>
          <br />
          <br />
          <div class="row" style="text-align: left;">
            <div class="flex md5">ชื่อ</div>
            <div class="flex md2"></div>
            <div class="flex md5">นามสกุล</div>
          </div>
          <div class="row">
            <div class="flex md5">
              <va-input class="mb-12" v-model="firstname" />
            </div>
            <div class="flex md2"></div>
            <div class="flex md5">
              <va-input class="mb-12" v-model="lastname" />
            </div>
          </div>
          <div class="row" style="text-align: left;">
            <div class="flex md12">อีเมล</div>
          </div>
          <div class="row" style="text-align: left;">
            <div class="flex md12">
              <va-input v-model="email" />
            </div>
          </div>
          <div class="row" style="text-align: left;">
            <div class="flex md5">ชื่อผู้ใช้งาน</div>
            <div class="flex md2"></div>
            <div class="flex md5">เบอร์โทรศัพท์</div>
          </div>
          <div class="row">
            <div class="flex md5">
              <va-input class="mb-12" v-model="username" />
            </div>
            <div class="flex md2"></div>
            <div class="flex md5">
              <va-input class="mb-12" v-model="phone" />
            </div>
          </div>
          <div class="row" style="text-align: left;">
            <div class="flex md5">รหัสผ่าน</div>
            <div class="flex md2"></div>
            <div class="flex md5">ยืนยันรหัสผ่านอีกครั้ง</div>
          </div>
          <div class="row">
            <div class="flex md5">
              <va-input class="mb-12" v-model="password" />
            </div>
            <div class="flex md2"></div>
            <div class="flex md5">
              <va-input class="mb-12" v-model="confirmPassword" />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="flex md12">
              <va-button @click="CreateAccount">
                สร้างบัญชีผูัใช้งาน
              </va-button>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>
    <div class="flex md3"></div>
  </div>
  <div class="row">
    <div class="flex md6"></div>
    <div class="flex md6"></div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'CreateAccount',
  components: {},
  data: () => ({
    // urlBackend: 'http://localhost:3000',
    urlBackend: 'https://jet44.app.ruk-com.cloud',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    userName: '',
    password: '',
    confirmPassword: '',
  }),

  methods: {
    CreateAccount() {
      let data = {
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        phone: this.phone,
        userName: this.username,
        password: this.password,
        id: uuidv4(),
        confirmPassword: this.confirmPassword,
      }
      console.log(data)
      axios
        .post(this.urlBackend + '/createUser', data)
        .then(function (response) {
          console.log(response)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'บันทึกข้อมูลสำเร็จ',
            showConfirmButton: false,
            timer: 1500,
          }).then((result) => {
            console.log(result)
            // this.$router.push({ name: '/' })
            //  window.location.replace('http://localhost:8080')
            window.location.replace('https://jet44.app.ruk-com.cloud')
          })
        })
        .catch(function (error) {
          console.log(error)
          Swal.fire('มีข้อผิดพลาด', error.message, 'error')
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
