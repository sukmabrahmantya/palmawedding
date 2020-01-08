<template>
  <div id="app">
    <Navbar />
      <transition name="fade">
        <router-view/>
      </transition>
  </div>
</template>

<script>
import Navbar from './components/navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
</style>
