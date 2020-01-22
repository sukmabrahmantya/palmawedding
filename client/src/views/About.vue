<template>
  <div>
    <Navbar />
    <div class="container-fluid about mt-5 pl-5 pr-5 pt-5 text-center">
      <h1 class="p-5 mt-5">TAKE US TOGETHER WITH YOU</h1>
      <p class="pl-4 pr-4 mb-5">Be it an extravagant engagement or an intimate reception for your nearest and dearest with a thousand guests, all of these events and celebrations deserve our full attention.</p>
    </div>
    <div class="container-fluid mt-5 pt-5 mx-auto">
      <div class="row ml-3 mr-3">
        <div class=" p-3 col-12 col-md-3 d-flex justify-content-center align-items-center">
          <div class="card">
            <img src="@/assets/image/homepage1.jpeg" class="card-img-top" alt="...">
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 text-center p-5">
      <h4 class="mb-5">The Team</h4>
      <p class="pl-4 pr-4">We at <strong>Palma</strong>, work not just for you but with you. We believe good events and good relationships come from good collaboration. Hence, we believe in getting to know you, hearing you out and creating something wonderful and memorable together.</p>
    </div>
  <Footer />
  </div>
</template>

<script>
import Navbar from '../components/navbar'
import Footer from '../components/footer'
export default {
  components: {
    Navbar, Footer
  },
  computed: {
    fetchImage () {
      return this.$store.state.image
    }
  },
  created () {
    this.$store.dispatch('fetchImageAbout')
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Overpass|Playfair+Display&display=swap');

/* .about {
  height: 300px;
  max-height: 100vh;
} */

h1 {
  font-family: 'Playfair Display', serif;
}

p {
  font-family: 'Overpass', sans-serif;
}

h4 {
  font-family: 'Playfair Display', serif;
}

img {
  height: 20rem;
  object-fit: cover;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
  height: 20rem;
  border: none
}
</style>
