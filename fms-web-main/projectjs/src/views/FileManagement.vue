<template>
  <va-navbar color="primary" shape class="mb-2">
    <template #left>
      <va-navbar-item style="font-size: 25px"
        >การจัดการไฟล์ต่าง ๆ</va-navbar-item
      >
    </template>
    <template #center>
      <va-navbar-item></va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item
        >คุณเจตนิพัทธ์ ประกอบนา
        <va-avatar
          size="small"
          src="https://play-lh.googleusercontent.com/tIeI_EWZFBCoHmV50hngRaWOqKfoERUNlROYjDuiDpc7yv_S-6_CpyNWIbN6C-aBAVtq=w240-h480-rw"
      /></va-navbar-item>
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
        :items="items"
        :columns="columns"
        :filter="filter"
        :filter-method="customFilteringFn"
        @filtered="filteredCount = $event.items.length"
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
      <va-button @click="LogOut"> ออกจากระบบ </va-button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "FileManagement",
  components: {},
  data() {
    const users = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447",
        website: "ramiro.info",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        phone: "493-170-9623 x156",
        website: "kale.biz",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        phone: "(254)954-1289",
        website: "demarco.info",
      },
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447",
        website: "ramiro.info",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        phone: "493-170-9623 x156",
        website: "kale.biz",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        phone: "(254)954-1289",
        website: "demarco.info",
      },
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447",
        website: "ramiro.info",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        phone: "493-170-9623 x156",
        website: "kale.biz",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        phone: "(254)954-1289",
        website: "demarco.info",
      },
    ];

    const columns = [
      { key: "id", sortable: true },
      { key: "username", sortable: true },
      { key: "name", sortable: true },
      { key: "email", sortable: true },
      { key: "phone" },
    ];

    return {
      items: users,
      columns,
      filter: "",
      useCustomFilteringFn: false,
      filteredCount: users.length,
    };
  },

  computed: {
    customFilteringFn() {
      return this.useCustomFilteringFn ? this.filterExact : undefined;
    },
  },

  methods: {
    filterExact(source) {
      if (this.filter === "") {
        return true;
      }

      return source?.toString?.() === this.filter;
    },

    LogOut() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "คุณต้องการออกจากระบบ<br>ใช่หรือไม่?",
          text: "",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "ใช่",
          cancelButtonText: "ไม่ใช่",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$router.push({ name: "LogIn" });
          }
        });
    },
  },
};
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
