<template>
  <div class="home d-flex border">
    <Navbar />

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/navbar'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld, Navbar
  }
}
</script>

<style scoped>
.home {

}
</style>
