<template>
  <div class="home">
    <div class="d-flex flex-row bd-highlight p-2">
      <div class="bd-highlight">
        <h4>Output in client side :</h4>
        <b-carousel
          id="carousel-1"
          class="carousel-homepage"
          :interval="5000"
          controls
          indicators
          background="#ababab"
          style="text-shadow: 1px 1px 2px #333;"
        >
          <b-carousel-slide v-for="image in fetchImage" :key="image._id" :img-src="image.image"></b-carousel-slide>
        </b-carousel>
        <h4 class="mt-3">Add image :</h4>
        <form @submit.prevent="addImage" class="form-inline">
          <b-form-file type="file" v-model="image" ref="file" class="w-75 mr-3"/>
          <b-button variant="success" type='submit' class="indep">Submit</b-button>
        </form>
      </div>
      <div class="ml-3 p-2 bd-highlight data">
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
                <td> <img :src="image.image" alt="loading..." style="height:4rem "></td>
                <td v-if="index < 3"><p><button type="button" class="btn btn-danger btn-sm" disabled>active</button></p></td>
                <td v-else></td>
                <td><a @click.prevent="destroy(image)" ><i class="fas fa-trash"></i></a></td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2'

export default {
  data () {
    return {
      image: null
    }
  },
  methods: {
    addImage (val) {
      const formData = new FormData()
      formData.append('image', this.image)

      this.$store.dispatch('addImageHome', formData)
        .then(({ data }) => {
          swal.fire({
            icon: 'success',
            title: `Success to added new image`,
            showConfirmButton: false,
            timer: 1500
          })
          this.image = null
          this.$store.dispatch('fetchImageHome')
          this.$store.dispatch('fetchImageHomeAll')
        })
        .catch((err) => {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
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
          this.$store.dispatch('deleteImageHome', val._id)
            .then(({ data }) => {
              swal.fire({
                title: 'Success!',
                text: 'Image success to delete',
                icon: 'success',
                confirmButtonText: 'Oke'
              })
              this.$store.dispatch('fetchImageHome')
              this.$store.dispatch('fetchImageHomeAll')
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
    }
  },
  created () {
    this.$store.commit('SET_PAGE', 'dashboardHome')
    this.$store.dispatch('fetchImageHome')
    this.$store.dispatch('fetchImageHomeAll')
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');

.home {
  height: 93vh;
  min-height: 93vh;
  overflow: scroll;
}

h4 {
  font-family: 'Dosis', sans-serif;
}

.data {
  width: 41vw !important;
  overflow: scroll;
  height: 38rem;
}

#carousel-1 {
  width: 50vw !important;
}

.w-75 {
  width: 86% !important;
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
</style>
