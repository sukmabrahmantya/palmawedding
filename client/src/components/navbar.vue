<template>
  <div>
    <div v-if="(!this.login)">
      <User />
    </div>
    <div v-else>
      <Admin />
    </div>
  </div>
</template>

<script>
import User from './navbarUser'
import Admin from './navbarAdmin'

export default {
  components: {
    User, Admin
  },
  computed: {
    login () {
      return this.$store.state.login
    }
  }
}
</script>

<style scoped>

</style>
