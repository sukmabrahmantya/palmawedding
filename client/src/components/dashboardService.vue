<template>
  <div class="service">
    <div class="d-flex flex-row bd-highlight p-2">
      <div class="bd-highlight w-50">
        <h4>Output in client side :</h4>
        <div class="d-flex flex-row bd-highlight p-2">
        <div class="bd-highlight w-50">
          <h4 class="pl-3">1. Carousel (up) :</h4>
          <div class="services">
            <img v-if="fetchImage" :src="fetchImage[1].image" alt="loading...">
          </div>
        </div>
        <div class="bd-highlight w-50 ml-3">
          <h4 class="pl-3">2. Carousel (down) :</h4>
          <div class="services pricelist-img">
            <img v-if="fetchImage" :src="fetchImage[0].image" alt="loading...">
          </div>
        </div>
        </div>
        <h4 class="mt-5">Add image :</h4>
        <form @submit.prevent="addImage" class="form-inline">
          <b-form-file type="file" v-model="image" ref="file" class="w-75 mr-3"/>
          <b-button variant="success" type='submit' class="indep">Submit</b-button>
        </form>
        <h4 class="mt-5">Add pricelist :</h4>
        <form @submit.prevent="addPricelist" class="form-inline">
          <b-form-file type="file" v-model="pricelist" ref="file" class="w-75 mr-3"/>
          <b-button variant="success" type='submit' class="indep">Submit</b-button>
        </form>
      </div>
      <div class="ml-3 p-2 bd-highlight data">
        <div class="image-db">
          <h4>Database image :</h4>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(image, index) in fetchImageAll" :key="image._id">
                <th scope="row">{{index + 1}}</th>
                <td> <img :src="image.image" alt="loading..." style="height:4rem"></td>
                <td v-if="index == 0 || index == 1"><p><button type="button" class="btn btn-danger btn-sm" disabled>active</button></p></td>
                <td v-else></td>
                <td><a @click.prevent="destroy(image)" ><i class="fas fa-trash"></i></a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 pricelist-db">
          <h4>Database pricelist :</h4>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Pricelist</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(price, index) in fetchPricelistAll" :key="price._id">
                <th scope="row">{{index + 1}}</th>
                <td>{{ price.pricelist }}</td>
                <td v-if="index == 0"><p><button type="button" class="btn btn-danger btn-sm" disabled>active</button></p></td>
                <td v-else></td>
                <td><a @click.prevent="destroyPricelist(price)" ><i class="fas fa-trash"></i></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2'

export default {
  data () {
    return {
      image: null,
      pricelist: null
    }
  },
  methods: {
    addPricelist (val) {
      const formData = new FormData()
      formData.append('file', this.pricelist)

      this.$store.dispatch('addPricelist', formData)
        .then(({ data }) => {
          swal.fire({
            icon: 'success',
            title: `Success to added new pricelist`,
            showConfirmButton: false,
            timer: 1500
          })
          this.pricelist = null
          this.$store.dispatch('fetchPricelist')
          this.$store.dispatch('fetchPricelistAll')
        })
        .catch((err) => {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    addImage (val) {
      const formData = new FormData()
      formData.append('image', this.image)

      this.$store.dispatch('addImageService', formData)
        .then(({ data }) => {
          swal.fire({
            icon: 'success',
            title: `Success to added new image`,
            showConfirmButton: false,
            timer: 1500
          })
          this.image = null
          this.$store.dispatch('fetchImageService')
          this.$store.dispatch('fetchImageServiceAll')
        })
        .catch((err) => {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    destroyPricelist (val) {
      swal.fire({
        title: 'Are you sure to Deleted pricelist?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete!'
      }).then(result => {
        if (result.value) {
          this.$store.dispatch('deletePricelist', val._id)
            .then(({ data }) => {
              swal.fire({
                title: 'Success!',
                text: data.message,
                icon: 'success',
                confirmButtonText: 'Oke'
              })
              this.$store.dispatch('fetchPricelist')
              this.$store.dispatch('fetchPricelistAll')
            })
            .catch(err => {
              swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err
              })
            })
        }
      })
    },
    destroy (val) {
      swal.fire({
        title: 'Are you sure to Deleted image?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete!'
      }).then(result => {
        if (result.value) {
          this.$store.dispatch('deleteImageService', val._id)
            .then(({ data }) => {
              swal.fire({
                title: 'Success!',
                text: data.message,
                icon: 'success',
                confirmButtonText: 'Oke'
              })
              this.$store.dispatch('fetchImageService')
              this.$store.dispatch('fetchImageServiceAll')
            })
            .catch(err => {
              swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message
              })
            })
        }
      })
    }
  },
  computed: {
    fetchImage () {
      return this.$store.state.image
    },
    fetchImageAll () {
      return this.$store.state.dataImage
    },
    fetchPricelist () {
      return this.$store.state.pricelist
    },
    fetchPricelistAll () {
      return this.$store.state.pricelistAll
    }
  },
  created () {
    this.$store.commit('SET_PAGE', 'dashboardService')
    this.$store.dispatch('fetchImageService')
    this.$store.dispatch('fetchImageServiceAll')
    this.$store.dispatch('fetchPricelist')
    this.$store.dispatch('fetchPricelistAll')
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');

h4 {
  font-family: 'Dosis', sans-serif;
}

.w-50 {
  width: 60% !important
}

.w-75 {
  width: 86% !important;
}

.service {
  height: 93vh;
  min-height: 93vh;
  overflow: scroll;
}

.data {
  width: 41vw !important;
  overflow: scroll;
}

.image-db {
  height: 19rem ;
  overflow: scroll
}

.pricelist-db {
  height: 17rem ;
  overflow: scroll
}

a {
  cursor: pointer;
  color: #6f6f6f
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

.services {
  /* height: 35rem; */
  overflow: hidden;
}

img {
  width: 100%;
  object-fit: cover;
}

</style>
