<template>
  <div class="add border">
    <div class="d-flex flex-row bd-highlight p-2">
      <div class="bd-highlight w-50 p-2 pr-4 create">
        <h4 class="title">Add admin member :</h4>
        <div class="container">
          <form @submit.prevent="addAdmin">
            <div class="form-group">
              <label>Full name</label>
              <input v-model="name" type="text" placeholder="Insert admin fullname" class="form-control">
            </div>
            <div class="form-group">
              <label>Username</label>
              <input v-model="username" type="text" placeholder="insert admin username" class="form-control">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input v-model="email" type="email" placeholder="Insert admin email" class="form-control">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input v-model="password" type="password" placeholder="Insert admin password" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary indep mt-3">Submit</button>
          </form>
        </div>
      </div>
      <div class="bd-highlight w-50 p-2 pr-4 database">
        <h4 class="title">Database admin :</h4>
        <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(admin, index) in fetchAdminAll" :key="admin._id">
                <th scope="row">{{index + 1}}</th>
                <td> {{ admin.name }} </td>
                <td> {{ admin.username }} </td>
                <td> {{ admin.email }} </td>
                <td><a @click.prevent="destroy(admin)" ><i class="fas fa-trash"></i></a></td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2'

export default {
  data () {
    return {
      name: '',
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    addAdmin (val) {
      const formData = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('addAdmin', formData)
        .then(({ data }) => {
          swal.fire({
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.name = ''
          this.username = ''
          this.email = ''
          this.password = ''
          this.$store.dispatch('fetchAdminAll')
        })
        .catch((err) => {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    destroy (val) {
      swal.fire({
        title: 'Are you sure to Deleted admin?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete!'
      }).then(result => {
        if (result.value) {
          this.$store.dispatch('deleteAdmin', val._id)
            .then(({ data }) => {
              swal.fire({
                title: 'Success!',
                text: 'Admin success to delete',
                icon: 'success',
                confirmButtonText: 'Oke'
              })
              this.$store.dispatch('fetchAdminAll')
            })
            .catch(err => {
              swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message
              })
            })
        }
      })
    }
  },
  computed: {
    fetchAdminAll () {
      return this.$store.state.dataImage
    }
  },
  created () {
    this.$store.commit('SET_PAGE', 'dashboardAddAdmin')
    this.$store.dispatch('fetchAdminAll')
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');

h4 {
  font-family: 'Dosis', sans-serif;
}

.database {
  height: 38rem;
  overflow: scroll;
}

.add {
  height: 93vh;
  min-height: 93vh;
  overflow: scroll;
}

a {
  cursor: pointer;
  color: #6f6f6f
}

.indep,
.indep:focus {
  background-color: #8ec54a !important;
  border: #8ec54a !important;
  box-shadow: none !important;
}

.indep:hover {
  background-color: #6b9a32 !important;
  border: #6b9a32 !important;
}
</style>
