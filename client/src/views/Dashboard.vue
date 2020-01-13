<template>
  <div class="d-flex bd-highlight">
    <Navbar />
    <div class="p-2 flex-grow-1 bd-highlight border">
      <div class="username">
        <h5>{{ this.username }}  <i class="fas fa-user-circle"></i></h5>
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
  }
}
</script>

<style scoped>
.username {
  text-align: right;
}
</style>
