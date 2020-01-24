<template>
  <div class="portofolio">
    <div class="d-flex flex-row bd-highlight p-2">
      <div class="bd-highlight w-50 p-2 pr-4 porto">
        <h4 class="title">Database image :</h4>
        <div class="image-db">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Client's</th>
                <th scope="col">Event</th>
                <th scope="col">Event Date</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(image, index) in fetchImageAll" :key="image._id">
                <th scope="row">{{index + 1}}</th>
                <td> <img :src="image.image" alt="loading..." style="height:4rem "></td>
                <td> {{ image.clientName }} </td>
                <td> {{ image.title }} </td>
                <td> {{ dateFormat(image.date) }} </td>
                <td v-if="index < 12"><p><button type="button" class="btn btn-danger btn-sm" disabled>active</button></p></td>
                <td v-else></td>
                <td><a @click.prevent="destroyImage(image)" ><i class="fas fa-trash"></i></a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 class="mt-5">Add image :</h4>
        <form @submit.prevent="addImage" class="mb-3">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>Client's men name</label>
              <input type="text" v-model="menimage" class="form-control" placeholder="Input client's men name">
            </div>
            <div class="form-group col-md-4">
              <label>Client's women name</label>
              <input type="text" v-model="womenimage" class="form-control" placeholder="Input client's women name">
            </div>
            <div class="form-group col-md-4">
              <label>Event name</label>
              <input type="text" v-model="event" class="form-control" placeholder="Input event name">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8">
              <label>Image</label>
              <b-form-file type="file" v-model="image" ref="file" class="w-100 mr-3 indep"/>
            </div>
            <div class="form-group col-md-4">
              <label>Event date</label>
              <input type="date" v-model="dateimage" class="form-control" placeholder="Input client's women name">
            </div>
          </div>
          <b-button variant="success" type='submit' class="indep mt-3">Submit</b-button>
        </form>
      </div>
      <div class="bd-highlight w-50 p-2 pl-4 testimoni">
        <h4 class="title">Database testimoni :</h4>
        <div class="testi-db">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Client's</th>
                <th scope="col">Event Date</th>
                <th class="col" scope="col">Message</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(testi, index) in fetchTestimoniAll" :key="testi._id">
                <th scope="row">{{index + 1}}</th>
                <td> {{ testi.name }} </td>
                <td> {{ dateFormat(testi.date) }} </td>
                <td> {{ testi.testimony }} </td>
                <td v-if="index < 5"><p><button type="button" class="btn btn-danger btn-sm" disabled>active</button></p></td>
                <td v-else></td>
                <td><a @click.prevent="destroy(testi)" ><i class="fas fa-trash"></i></a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 class="mt-5">Add testimoni :</h4>
        <form @submit.prevent="addTestimoni" class="mb-3">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>Client's men name :</label>
              <input type="text" v-model="men" class="form-control" placeholder="Input client's men name">
            </div>
            <div class="form-group col-md-4">
              <label>Client's women name :</label>
              <input type="text" v-model="women" class="form-control" placeholder="Input client's women name">
            </div>
            <div class="form-group col-md-4">
              <label>Event date</label>
              <input type="date" v-model="date" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label>Testimoni client :</label>
            <textarea v-model="testimony" class="form-control" placeholder="Input client testimoni" rows="3"></textarea>
          </div>
          <b-button variant="success" type='submit' class="indep">Submit</b-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import swal from 'sweetalert2'

export default {
  data () {
    return {
      image: null,
      men: '',
      women: '',
      menimage: '',
      womenimage: '',
      event: '',
      date: '',
      dateimage: '',
      testimony: ''
    }
  },
  methods: {
    dateFormat (val) {
      return moment(val).format('MMM Do YYYY')
    },
    addTestimoni () {
      const data = {
        name: this.men + ' & ' + this.women,
        date: this.date,
        testimony: this.testimony
      }
      this.$store.dispatch('addTestimoni', data)
        .then(({ data }) => {
          swal.fire({
            icon: 'success',
            title: `Success to added new testimoni`,
            showConfirmButton: false,
            timer: 1500
          })
          this.men = ''
          this.women = ''
          this.date = ''
          this.testimony = ''
          this.$store.dispatch('fetchTestimoniAll')
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
      formData.set('clientName', `${this.menimage} & ${this.womenimage}`)
      formData.set('title', this.event)
      formData.set('date', this.dateimage)

      this.$store.dispatch('addImagePortofolio', formData)
        .then(({ data }) => {
          swal.fire({
            icon: 'success',
            title: `Success to added new image`,
            showConfirmButton: false,
            timer: 1500
          })
          this.image = null
          this.womenimage = ''
          this.menimage = ''
          this.$store.dispatch('fetchImagePortofolioAll')
        })
        .catch((err) => {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    destroyImage (val) {
      swal.fire({
        title: 'Are you sure to Deleted image?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete!'
      }).then(result => {
        if (result.value) {
          this.$store.dispatch('deleteImagePortofolio', val._id)
            .then(({ data }) => {
              swal.fire({
                title: 'Success!',
                text: 'Image success to delete',
                icon: 'success',
                confirmButtonText: 'Oke'
              })
              this.$store.dispatch('fetchImagePortofolioAll')
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
          this.$store.dispatch('deleteTestimoni', val._id)
            .then(({ data }) => {
              swal.fire({
                title: 'Success!',
                text: 'Testimoni success to delete',
                icon: 'success',
                confirmButtonText: 'Oke'
              })
              this.$store.dispatch('fetchTestimoniAll')
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
    fetchImageAll () {
      return this.$store.state.dataImage
    },
    fetchTestimoniAll () {
      return this.$store.state.testimoniAll
    }
  },
  created () {
    this.$store.commit('SET_PAGE', 'dashboardPortofolio')
    this.$store.dispatch('fetchImagePortofolioAll')
    this.$store.dispatch('fetchTestimoniAll')
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');

h4 {
  font-family: 'Dosis', sans-serif;
}

.detail {
  margin-bottom: 0px;
}

.portofolio {
  height: 93vh;
  min-height: 93vh;
  overflow: scroll;
}

.col-12 {
  padding-right: 0px;
  padding-left: 0px  ;
}

.title {
  font-family: 'Dosis', sans-serif;
}

.testi-message {
  font-family: 'Kalam', cursive;
  line-height: 1.5;
  font-size: 1rem
}

.image-db {
  height: 22rem ;
  overflow: scroll
}

.testi-db {
  height: 22rem ;
  overflow: scroll
}

.w-75 {
  width: 84% !important;
}

.porto {
  height: 90vh;
  overflow: scroll
}

.testimoni {
  height: 90vh;
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

</style>
