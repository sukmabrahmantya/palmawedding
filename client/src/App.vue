<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  created () {
    const valid = localStorage.getItem('token')
    if (valid) {
      this.$store.commit('SET_LOGIN', true)
      this.$store.dispatch('verify')
    }
  }
}
</script>

<style>
</style>
