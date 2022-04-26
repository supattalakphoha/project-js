<template>
  <va-navbar color="primary" shape class="mb-2">
    <template #left>
      <va-navbar-item style="font-size: 25px;">
        การจัดการไฟล์ต่าง ๆ
      </va-navbar-item>
    </template>
    <template #center>
      <va-navbar-item></va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item>
        คุณเจตนิพัทธ์ ประกอบนา
        <va-avatar
          size="small"
          src="https://play-lh.googleusercontent.com/tIeI_EWZFBCoHmV50hngRaWOqKfoERUNlROYjDuiDpc7yv_S-6_CpyNWIbN6C-aBAVtq=w240-h480-rw"
        />
      </va-navbar-item>
    </template>
  </va-navbar>
  <br />
  <div class="row">
    <div class="flex md1"></div>
    <div class="flex md10">
      <div class="row">
        ค้นหา
        <va-input
          class="flex mb-2 md12"
          placeholder="Filter..."
          v-model="filter"
        />
      </div>

      <va-data-table
        :key="key"
        :items="userList"
        :columns="columns"
        :filter="filter"
        :filter-method="customFilteringFn"
        @filtered="filteredCount = 1"
      />

      <va-alert class="mt-3" border="left">
        <span>
          Number of filtered items:
          <va-chip>{{ filteredCount }}</va-chip>
        </span>
      </va-alert>
    </div>
    <div class="flex md1"></div>
  </div>
  <br />
  <div class="row">
    <div class="flex md12">
      <va-button @click="LogOut">ออกจากระบบ</va-button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
  name: 'UserManagement',
  components: {},
  data() {
    var userList = []

    const columns = [
      { key: 'id', sortable: true },
      { key: 'username', sortable: true },
      { key: 'first_name', sortable: true },
      { key: 'last_name', sortable: true },
      { key: 'email', sortable: true },
      { key: 'phone' },
    ]

    return {
      key: 1,
      items: userList,
      columns,
      filter: '',
      useCustomFilteringFn: false,
      filteredCount: 1,
    }
  },

  computed: {
    customFilteringFn() {
      return this.useCustomFilteringFn ? this.filterExact : undefined
    },
  },

  mounted() {
    this.getUserList()
  },
  methods: {
    getUserList() {
      axios
        .get('https://jet44.app.ruk-com.cloud/userList', {
          headers: { 'Access-Control-Allow-Origin': '*' },
        })
        .then((response) => {
          console.log('-----------------------------', response.data.data)
          this.userList = response.data.data
          this.key = this.key++
        })
        .catch((error) => {
          console.log(error)
          Swal.fire('มีข้อผิดพลาด', error.message, 'error')
        })
    },
    filterExact(source) {
      if (this.filter === '') {
        return true
      }

      return source?.toString?.() === this.filter
    },

    LogOut() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
      })

      swalWithBootstrapButtons
        .fire({
          title: 'คุณต้องการออกจากระบบ<br>ใช่หรือไม่?',
          text: '',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'ใช่',
          cancelButtonText: 'ไม่ใช่',
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$router.push({ name: 'LogIn' })
          }
        })
    },
  },
}
</script>

<style>
.btn {
  display: inline-block;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  margin: 0 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.25;
  border-radius: 0.25rem;
  transition: all 0.15s ease-in-out;
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>
