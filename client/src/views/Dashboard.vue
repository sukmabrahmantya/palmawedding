<template>
  <div class="d-flex bd-highlight">
    <Navbar />
    <div class="p-2 flex-grow-1 bd-highlight">
      <div class="username">
        <h5>Welcome {{ this.username }} <i class="pl-2 pr-3 fas fa-user-circle"></i></h5>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar'

export default {
  components: {
    Navbar
  },
  computed: {
    username () {
      return this.$store.state.username
    }
  },
  created () {
    const valid = localStorage.getItem('token')
    if (!valid) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');

h5 {
  font-family: 'Dosis', sans-serif;
}

.username {
  text-align: right;
}
</style>
