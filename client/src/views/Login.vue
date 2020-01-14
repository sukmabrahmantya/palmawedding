<template>
  <div class="d-flex page">
    <Navbar />
    <div class="d-flex container justify-content-center align-items-center login mt-5">
      <div class="d-flex flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight mt-3">
          <b-card class="card">
            <b-card-text>
              <div class="d-flex flex-column flex-md-row bd-highlight">
                <div class="p-2 d-flex bd-highlight justify-content-center align-items-center mx-auto">
                  <div class="logo-palma">
                    <img src="@/assets/palma.jpg" alt="loading..." class="img-fluid">
                  </div>
                </div>
                <div class="p-2 w-100 bd-highlight form-login">
                  <div class="ml-4 mr-4 form">
                    <b-form @submit.prevent="login">
                      <b-form-group id="email" label="Email" class="label mt-2">
                        <b-form-input
                          v-model="email"
                          required
                          type="email"
                          placeholder="Enter your email"
                          class="input"
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group id="password" label="Password" class="label">
                        <b-form-input
                          v-model="password"
                          required
                          type="password"
                          placeholder="Enter your password"
                          class="input"
                        ></b-form-input>
                      </b-form-group>
                      <b-button type="submit" variant="primary" class="indep mt-3">Login</b-button>
                    </b-form>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar'
import Swal from 'sweetalert2'

export default {
  components: {
    Navbar
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const value = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', value)
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: `Login Successful, Welcome ${data.username}`,
            showConfirmButton: false,
            timer: 1500
          })
          this.email = ''
          this.password = ''
          localStorage.setItem('token', data.token)
          this.$store.commit('SET_LOGIN', true)
          this.$store.dispatch('verify')
          this.$router.push('/dashboard')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    }
  },
  created () {
    const valid = localStorage.getItem('token')
    if (valid) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');

.page {
  height: 100vh;
  align-content: center;
  justify-content: center
}
.login {
  font-family: 'Ubuntu', sans-serif;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
}

.palma-logo {
  height: 130px;
}

.form-login {
  border-left: 3px solid #8ec54a !important;
}
.label {
  text-align: left;
  font-weight: bold;
  color: #6a4625;
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
.input {
  box-shadow: none !important;
}
.input:focus,
.input:hover {
  box-shadow: none !important;
  border: 2px solid #8ec54a;
}

</style>
