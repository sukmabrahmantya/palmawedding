<template>
  <div class="portofolio">
    <Navbar />
    <div class="container-fluid about mt-5 pl-5 pr-5 pt-5 text-center">
      <p class="p-5 mt-5 pr-4 mb-5">We’ve planned more than a hundred weddings and events. It was a challenge to fill this page but here are some of them that made a lasting impression on us and on the clients. Take a browse!</p>
    </div>
    <hooper
      :itemsToShow="2"
      :autoPlay="true"
      :playSpeed="4000"
      :infiniteScroll="true"
      :centerMode="true"
      :wheelControl="false"
      class="hoper p-2">
      <slide v-for="porto in fetchImage" :key="porto._id" class=" p-2">
        <div class="card pl-1 pr-1" style="height: 18rem;">
          <img :src="porto.image" alt="">
        </div>
        <div class="card mt-3 d-flex align-items-center pl-1 pr-1 pt-3 pb-3">
          <h4>{{ porto.clientName }}</h4>
          <p class="detail"> {{ porto.title }} -</p>
          <p class="detail"> {{ dateFormat(porto.date) }}</p>
        </div>
      </slide>
      <hooperNavigation slot="hooper-addons"></hooperNavigation>
    </hooper>
    <div class="border spacing">
      <p class="p-5 mt-3 pr-4 mb-3 text-right">The word “Wedding” ends with “ing” – signifying a term that is progressively ongoing. That is because marriage is built day by day. On the day you and your partner announce your commitments, we strive to make sure the journey sets out on the right note.</p>
    </div>
    <div class="spacing">
      <hooper class="p-2 hoper-2 pl-5"
        :itemsToShow="1"
        :autoPlay="true"
        :playSpeed="5000"
        :infiniteScroll="true"
        :centerMode="true"
        :wheelControl="false">
        <slide class="p-2 pr-5" v-for="testi in fetchTestimoni" :key="testi._id">
          <div class="card p-3 pt-5" style="height: 15rem;" >
            <h5 class="card-title"> <strong>{{ testi.name }}</strong> </h5>
            <p class="font-italic"> {{ dateFormat(testi.date) }} </p>
            <h4 class="testi-message mt-2"> {{ testi.testimony }} </h4>
          </div>
        </slide>
        <hooperNavigation slot="hooper-addons"></hooperNavigation>
      </hooper>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/navbar'
import moment from 'moment'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'
import Footer from '../components/footer'

export default {
  components: {
    Navbar, hooper: Hooper, slide: Slide, hooperNavigation: HooperNavigation, Footer
  },
  methods: {
    dateFormat (val) {
      return moment(val).format('MMM Do YYYY')
    }
  },
  computed: {
    fetchImage () {
      return this.$store.state.image
    },
    fetchTestimoni () {
      return this.$store.state.testimoni
    }
  },
  created () {
    this.$store.dispatch('fetchImagePortofolio')
    this.$store.dispatch('fetchTestimoni')
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Overpass|Playfair+Display&display=swap');
@import url('https://fonts.googleapis.com/css?family=Marck+Script&display=swap');
@import url('https://fonts.googleapis.com/css?family=Kalam&display=swap');

.portofolio {
  background-color: white
}

@media only screen and (max-width: 500px) {
  h4 {
    font-size: 0.75rem
  }

  .detail {
    font-size: 0.9rem;
    margin-bottom: 0px;
  }
}

.spacing {
  background-color: #e8e1dd
}

.detail {
  margin-bottom: 0px;
}

p, .card-title {
  font-family: 'Overpass', sans-serif;
}

img {
  height: 20rem;
  object-fit: cover;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
  border: none;
  overflow: hidden;
}

.hoper {
  height: 29rem;
}

.hoper-2 {
  height: 19rem;
}

.col-12 {
  padding-right: 0px;
  padding-left: 0px  ;
}

.fas {
  color: #cdbdb2
}

h4 {
  font-family: 'Marck Script', cursive;
}

.testi-message {
  font-family: 'Kalam', cursive;
  line-height: 1.5;
  font-size: 1rem
}

h5 {
  line-height: 0.5;
}

</style>
