<template>
  <div>
    <div class="p-2 flex-shrink-1 bd-highlight" id="navbar">
      <div
        class="d-flex align-content-between flex-wrap bd-highlight"
        style="justify-content: center">
        <b-button to="/dashboard" :class="{ active: this.page == 'dashboardHome' }" class="btn navbar-btn">
          <i class="fas fa-home" id="icon"></i>
        </b-button>
        <b-button to="/dashboard/about" :class="{ active: this.page == 'dashboardAbout' }" class="btn navbar-btn">
          <i class="fas fa-question-circle" id="icon"></i>
        </b-button>
        <b-button to="/dashboard/service" :class="{ active: this.page == 'dashboardService' }" class="btn navbar-btn">
          <i class="fas fa-gem" id="icon"></i>
        </b-button>
        <b-button to="/dashboard/portofolio" :class="{ active: this.page == 'dashboardPortofolio' }" class="btn navbar-btn">
          <i class="far fa-images" id="icon"></i>
        </b-button>
        <b-button v-if="(this.status === 'Super Admin')" :class="{ active: this.page == 'dashboardEvent' }" to="/dashboard/event" disabled class="btn navbar-btn">
         <i class="fas fa-users" id="icon"></i>
        </b-button>
        <b-button v-if="(this.status === 'Super Admin')" :class="{ active: this.page == 'dashboardEvent' }" to="/dashboard/event" disabled class="btn navbar-btn">
          <i class="far fa-calendar-alt" id="icon"></i>
        </b-button>
        <b-button v-if="(this.status === 'Super Admin')" :class="{ active: this.page == 'dashboardEvent' }" to="/dashboard/event" disabled class="btn navbar-btn">
          <i class="fas fa-dollar-sign" id="icon"></i>
        </b-button>
        <b-button v-if="(this.status === 'Super Admin')" :class="{ active: this.page == 'dashboardAddAdmin' }" to="/dashboard/add-admin" class="btn navbar-btn">
          <i class="fas fa-user-plus" id="icon"></i>
        </b-button>
        <b-button @click.prevent="logout" class="btn navbar-btn">
          <i class="fas fa-sign-out-alt" id="icon"></i>
        </b-button>
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
          this.$store.commit('SET_PAGE', '')
          this.$router.push('/')
        }
      })
    }
  },
  computed: {
    status () {
      return this.$store.state.status
    },
    page () {
      return this.$store.state.page
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

.btn {
  background-color: #8ec54a !important ;
  border-color: #8ec54a;
  color: black
}

.navbar-btn {
  box-shadow: none !important;
}

.btn:hover, .btn:focus {
  background-color: #6b9a32 !important;
  border-color: #6b9a32;
  box-shadow: none !important;
  color: black !important;
}

.active {
  background-color: #6b9a32 !important;
  border-color: #6b9a32 !important;
  box-shadow: none !important;
  color: black !important;
}
</style>
