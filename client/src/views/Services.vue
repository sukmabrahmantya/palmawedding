<template>
  <div>
    <Navbar />
    <div class="mt-5 services">
      <img v-if="fetchImage" :src="fetchImage[1].image" alt="loading...">
    </div>
    <div class="content-desc pt-5 pl-5 pr-5 pb-2 container mt-4 d-flex flex-column justify-content-center">
      <h4>Be the Guest at your Wedding</h4>
      <p class="mt-4">On your wedding day, the roles are clear. Our job is to run it, your job is to pick up a drink & enjoy the celebration!</p>
    </div>
    <div class="content col-12 p-5 mb-5 d-flex align-items-center justify-content-center">
      <div class="row d-flex align-items-center">
        <div class="col mx-auto text-center p-2 mt-2">
            <i class="fab fa-medapps mt-2 ico"></i>
            <h5 class="mt-3 mb-2">CONCEPT DESIGN</h5>
        </div>
        <div class="col mx-auto text-center p-2 mt-2">
            <i class="fas fa-dollar-sign mt-2 ico"></i>
            <h5 class="mt-3 mb-2">BUDGET PLANNING</h5>
        </div>
        <div class="col mx-auto text-center p-2 mt-2">
            <i class="far fa-handshake mt-2 ico"></i>
            <h5 class="mt-3 mb-2">VENDOR MANAGEMENT</h5>
        </div>
        <div class="w-100"></div>
        <div class="col mx-auto text-center p-2 mt-2">
            <i class="far fa-newspaper mt-2 ico"></i>
            <h5 class="mt-3 mb-2">EXPERIENCE DESIGN</h5>
        </div>
        <div class="col mx-auto text-center p-2 mt-2">
            <i class="far fa-list-alt mt-2 ico"></i>
            <h5 class="mt-3 mb-2">LOGISTICS MANAGEMENT</h5>
        </div>
        <div class="col mx-auto text-center p-2 mt-2">
            <i class="far fa-calendar mt-2 ico"></i>
            <h5 class="mt-3 mb-2">EVENT MANAGEMENT</h5>
        </div>
      </div>
    </div>
    <div class="d-flex bd-highlight pricelist">
      <div class="w-75 bd-highlight pricelist-img">
        <img v-if="fetchImage" :src="fetchImage[0].image" alt="loading...">
      </div>
      <div class="p-2 w-25 flex-shrink-1 bd-highlight pricelist-file d-flex flex-column align-items-center">
        <p id="pricelist-title" class="pt-5 pb-3 pl-3 pr-3" >Let us assist you in managing your finances! We do our best in recommending the most ideal vendors within your budget and we will track your expenditure along the way so you stay on course!.</p>
        <a class="btn btn-primary w-50 mb-5 mt-3 indep" :href="fetchPricelist.pricelist" role="button"><i class="fas fa-download pr-2"></i>Download Brochure</a>
      </div>
    </div>
    <Footer/>
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
    },
    fetchPricelist () {
      return this.$store.state.pricelist
    }
  },
  created () {
    this.$store.dispatch('fetchImageService')
    this.$store.dispatch('fetchPricelist')
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/css?family=Overpass|Playfair+Display&display=swap');

@media only screen and (max-width: 500px) {
  img {
    height: 100%;
    object-fit: cover;
  }

  .pricelist {
    flex-direction: column !important;
  }

  .pricelist-img {
    width: 100% !important;
  }

  .pricelist-file {
    width: 100% !important;
  }
}

@media (min-width: 768px) {
  .col-md-8 {
      -ms-flex: 0 0 66.666667%;
      -webkit-box-flex: 0;
      flex: 0 0 66.666667%;
      max-width: 100%;
  }
}

h4 {
  font-family: 'Playfair Display', serif;
  text-align: center;
  color: #6a4625;
  font-weight: bold
}

p {
  font-family: 'Overpass', sans-serif;
  text-align: center;
  color: #6a4625
}

.content {
  font-family: 'Ubuntu', sans-serif;
}

img {
  width: 100%;
  object-fit: cover;
}

.services {
  height: 35rem;
  overflow: hidden;
}

.pricelist-img {
  height: 25rem;
  overflow: hidden;
}

.ico {
  font-size: 4rem;
  color: #6886bb
}

.pricelist-file {
  background-color: #677ea5;
}

#pricelist-title {
  color: white;
  line-height: 1.8
}

.btn {
  width: 50%;
  font-weight: bold;
}
.indep,
.indep:focus {
  background-color: #8ec54a !important;
  border: #8ec54a !important;
  box-shadow: none !important;
}
.indep:hover {
  background-color: #6b9a32 !important;
  border: #6b9a32 !important;
}

</style>
