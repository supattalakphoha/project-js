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
              <router-link to="/userManagement">
                <va-button>เข้าสู่ระบบ</va-button>
              </router-link>
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
export default {
  name: 'LogIn',
  components: {},
  data: () => ({
    userName: '',
    password: '',
  }),
}
</script>

<style>
.row {
  padding: 5px;
}
</style>
