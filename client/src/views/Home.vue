<template>
  <div class="home">
    <Navbar />
    <!-- Carosel -->
    <div>
      <b-carousel
        id="carousel-1"
        class="carousel-homepage"
        :interval="5000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
      >

        <b-carousel-slide :img-src="require('@/assets/image/homepage1.jpeg')"></b-carousel-slide>
        <b-carousel-slide :img-src="require('@/assets/image/homepage2.jpeg')"></b-carousel-slide>
        <b-carousel-slide :img-src="require('@/assets/image/homepage3.jpeg')"></b-carousel-slide>
        <b-carousel-slide :img-src="require('@/assets/image/homepage4.jpeg')"></b-carousel-slide>
      </b-carousel>
    </div>
    <!-- Content -->
    <div class="p-2 d-flex container-fluid mt-2 content">
      <div class="d-flex flex-column flex-md-row bd-highlight ml-3 mr-3">
        <div class="p-2 pr-4 bd-highlight mx-auto quotes">
          <p>
            “A successful marriage requires falling in love many times, always with the same person.”</p>
          <p>Mignon McLaughlin</p>
        </div>
        <div class="p-2 pl-4 bd-highlight mx-auto desc">
          <p>
            Palma comes from the word "Palm" is a symbol of victory, triumph, peace, and eternal life originating in the ancient Near East and Mediterranean world. And that explains how we view every wedding that comes under our hands. Like how you would describe something close to heart, we see every planning journey of wedding services with us to be a path of dedication, authenticity and accountability.</p>
          <p>
            We believe you too envision one of the most important days of your life to be set in the same tone, with a promise for commitment, loyalty, and of course plenty of happiness and blessings. Let us make that happen for you.</p>
        </div>
      </div>
    </div>
    <!-- serve -->
    <div class="container-fluid service">
      <div class="row ml-3 mr-3">
        <div class="col-12 col-md-4 mt-4">
          <div v-if="this.service == 'concept'">
            <h4 class="title"><i>01</i> | Concept Design</h4>
            <p class="title-desc mt-4">Sit down and have a chat with us. Based on questionnaires and interactions with you, we will get to know you better. Picking out the highlights of your relationship, we inject our own ideas and conceptualise a magical theme that is uniquely yours.</p>
          </div>
          <div v-if="this.service == 'budget'">
            <h4 class="title"><i>02</i> | Budget Planning</h4>
            <p class="title-desc mt-4">Priceless wedding memories does not mean pricey wedding. Let us assist you in managing your finances! We do our best in recommending the most ideal vendors within your budget and we will track your expenditure along the way so you stay on course!.</p>
          </div>
          <div v-if="this.service == 'vendor'">
            <h4 class="title"><i>03</i> | Vendor Management</h4>
            <p class="title-desc mt-4">Every wedding requires your preferred team of specialists. It is our duty to work with everyone to make sure your big day unfolds without a glitch. We will source for the best recommended vendors, oversee the appointment making, review the contracts and manage them on the actual day!.</p>
          </div>
          <div v-if="this.service == 'design'">
            <h4 class="title"><i>04</i> | Experience Design</h4>
            <p class="title-desc mt-4">Mood, sight, smell, sound, taste and even touch. All of these go into designing the wedding experience that your guests will sit through. We will end the celebration the way you want it to be!.</p>
          </div>
          <div v-if="this.service == 'logistics'">
            <h4 class="title"><i>05</i> | Logistics Management</h4>
            <p class="title-desc mt-4">Looking beyond the big picture, we go into details such as audio, visual, layout and so on. Let our experience help you iron out all the possible wrinkles and ensure a smooth-sailing celebration.</p>
          </div>
          <div v-if="this.service == 'event'">
            <h4 class="title"><i>06</i> | Event Management</h4>
            <p class="title-desc mt-4">Be the carefree and happy Bride and Groom on your big day! Let us handle all the coordination and background work while you indulge in your celebration of love.</p>
          </div>
        </div>
        <div class="col-12 col-md-8 mt-3 mb-3">
          <div class="row menu">
            <div @click="changePage('concept')" class="col mx-auto text-center p-2 concept" :class="{active: service == 'concept'}">
                <i class="fab fa-medapps mt-2" :class="{active: service == 'concept'}"></i>
                <h5 class="mt-3 mb-2">CONCEPT DESIGN</h5>
            </div>
            <div @click="changePage('budget')" class="col mx-auto text-center p-2 budget" :class="{active: service == 'budget'}">
                <i class="fas fa-dollar-sign mt-2" :class="{active: service == 'budget'}" ></i>
                <h5 class="mt-3 mb-2">BUDGET PLANNING</h5>
            </div>
            <div @click="changePage('vendor')" class="col mx-auto text-center p-2 vendor" :class="{active: service == 'vendor'}" >
                <i class="far fa-handshake mt-2" :class="{active: service == 'vendor'}"></i>
                <h5 class="mt-3 mb-2">VENDOR MANAGEMENT</h5>
            </div>
            <div class="w-100"></div>
            <div @click="changePage('design')" class="col mx-auto text-center p-2 design" :class="{active: service == 'design'}">
                <i class="far fa-newspaper mt-2" :class="{active: service == 'design'}"></i>
                <h5 class="mt-3 mb-2">EXPERIENCE DESIGN</h5>
            </div>
            <div @click="changePage('logistics')" class="col mx-auto text-center p-2 logistic" :class="{active: service == 'logistics'}">
                <i class="far fa-list-alt mt-2" :class="{active: service == 'logistic'}"></i>
                <h5 class="mt-3 mb-2">LOGISTICS MANAGEMENT</h5>
            </div>
            <div @click="changePage('event')" class="col mx-auto text-center p-2 event" :class="{active: service == 'event'}">
                <i class="far fa-calendar mt-2" :class="{active: service == 'event'}"></i>
                <h5 class="mt-3 mb-2">EVENT MANAGEMENT</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default {
  name: 'home',
  components: {
    Navbar, Footer
  },
  data () {
    return {
      service: 'concept'
    }
  },
  methods: {
    changePage (name) {
      this.service = name
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Overpass|Playfair+Display&display=swap');

#carousel-1 {
  width: 100vw !important;
}

.quotes {
  text-align: right;
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem
}

.desc {
  font-family: 'Overpass', sans-serif;
  font-size: 1rem
}

.home {
  background-color: #f7f7f7
}

.service {
  background-color: white
}

.far, .fab, .fas {
  font-size: 4rem;
  color: rgb(201, 201, 201)
}

h5 {
  font-size: 0.9rem;
  font-family: 'Overpass', sans-serif;
}

.concept:hover {
  cursor: pointer;
  color: rgb(121, 121, 121)
}

.budget:hover {
  cursor: pointer;
  color: rgb(121, 121, 121)
}

.vendor:hover {
  cursor: pointer;
  color: rgb(121, 121, 121)
}

.design:hover {
  cursor: pointer;
  color: rgb(121, 121, 121)
}

.logistic:hover {
  cursor: pointer;
  color: rgb(121, 121, 121)
}

.event:hover {
  cursor: pointer;
  color: rgb(121, 121, 121)
}

.menu {
  color: rgb(201, 201, 201)
}

.active {
  color: rgb(121, 121, 121)
}

.title {
  font-family: 'Playfair Display', serif;
}

.title-desc {
  font-family: 'Overpass', sans-serif;
  letter-spacing: 0.00333rem;
  line-height: 1.7rem;
}

</style>
