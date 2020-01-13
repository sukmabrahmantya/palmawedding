<template>
  <div>
    <div class="p-2 flex-shrink-1 bd-highlight" id="navbar">
      <div
        class="d-flex align-content-between flex-wrap bd-highlight"
        style="justify-content: center">
        <a class="btn navbar-btn" role="button">
          <i class="fas fa-home" id="icon"></i>
        </a>
        <a class="btn navbar-btn" role="button">
          <i class="fas fa-gem" id="icon"></i>
        </a>
        <a v-if="(this.status === 'Super Admin')" class="btn navbar-btn" role="button">
          <i class="far fa-calendar-alt" id="icon"></i>
        </a>
        <a class="btn navbar-btn active disabled" role="button">
          <img src="https://img.icons8.com/color/48/000000/palm-tree.png" id="icon-mini">
        </a>
        <a v-if="(this.status === 'Super Admin')" class="btn navbar-btn" role="button">
          <i class="fas fa-user-plus" id="icon"></i>
        </a>
        <a class="btn navbar-btn" role="button">
          <i class="far fa-images" id="icon"></i>
        </a>
        <a class="btn navbar-btn" @click="logout" role="button">
          <i class="fas fa-sign-out-alt" id="icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  methods: {
    logout () {
      Swal.fire({
        title: 'Are you sure to Logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Logout!'
      }).then(result => {
        if (result.value) {
          Swal.fire({
            title: 'Success!',
            text: 'See you soon.....',
            icon: 'success',
            confirmButtonText: 'Oke'
          })
          localStorage.removeItem('token')
          this.$store.commit('SET_LOGIN', false)
          this.$store.commit('SET_USERNAME', '')
          this.$store.commit('SET_STATUS', '')
          this.$router.push('/')
        }
      })
    }
  },
  computed: {
    status () {
      return this.$store.state.status
    }
  }
}
</script>

<style scoped>
#navbar {
  width: 70px;
  display: flex;
  height: 100vh;
  background-color: #8ec54a
}

#icon-mini {
  width: 24px !important;
  height: 24px !important;
}

#icon {
  width: 24px !important;
  height: 24px !important;
}

.navbar-btn {
  box-shadow: none !important;
}

.navbar-btn:hover {
  background-color: #6b9a32;
  border-color: #6b9a32;
  box-shadow: none !important;
  color: #6a4625;
}

.active {
  background-color: #6b9a32;
  border-color: #6b9a32;
  box-shadow: none !important;
  color: #6a4625;
}
</style>
