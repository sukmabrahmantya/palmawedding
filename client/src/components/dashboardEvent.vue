<template>
  <div class="event border">
    <h1>ini Dashboard Event</h1>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('SET_PAGE', 'dashboardEvent')
  }
}
</script>

<style scoped>
.event {
  height: 92vh;
  min-height: 92vh;
  overflow: scroll;
}
</style>
