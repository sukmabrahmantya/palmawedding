<template>
  <div class="about">
    <div class="d-flex flex-row bd-highlight p-2">
      <div class="bd-highlight w-50">
        <h4>Output in client side :</h4>
        <div class="row ml-3 mr-3">
          <div v-for="image in fetchImage" :key="image._id" class=" p-3 col-12 col-md-3 d-flex justify-content-center align-items-center">
            <div class="card">
              <img :src="image.image" class="card-img-top" alt="...">
            </div>
          </div>
        </div>
        <h4 class="mt-5">Add image :</h4>
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
                <td v-if="index < 4"><p><button type="button" class="btn btn-danger btn-sm" disabled>active</button></p></td>
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

      this.$store.dispatch('addImageAbout', formData)
        .then(({ data }) => {
          swal.fire({
            icon: 'success',
            title: `Success to added new image`,
            showConfirmButton: false,
            timer: 1500
          })
          this.image = null
          this.$store.dispatch('fetchImageAbout')
          this.$store.dispatch('fetchImageAboutAll')
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
          this.$store.dispatch('deleteImageAbout', val._id)
            .then(({ data }) => {
              swal.fire({
                title: 'Success!',
                text: 'Image success to delete',
                icon: 'success',
                confirmButtonText: 'Oke'
              })
              this.$store.dispatch('fetchImageAbout')
              this.$store.dispatch('fetchImageAboutAll')
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
    this.$store.commit('SET_PAGE', 'dashboardAbout')
    this.$store.dispatch('fetchImageAbout')
    this.$store.dispatch('fetchImageAboutAll')
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

.about {
  height: 93vh;
  min-height: 93vh;
  overflow: scroll;
}

.data {
  width: 41vw !important;
  height: 38rem;
  overflow: scroll;
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

img {
  height: 10rem;
  object-fit: cover;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
  height: 10rem;
  border: none
}
</style>
