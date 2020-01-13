<template>
  <div>
    <b-navbar toggleable="lg" class="navbar-set fixed-top">
      <b-navbar-brand to="/">
        <img src="../../public/image/palma.jpg" alt="loading..." class="d-inline-block align-top">
      </b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about">About Us</b-nav-item>
          <b-nav-item to="/services">Services</b-nav-item>
          <b-nav-item to="/portofolio">Portofolio</b-nav-item>
        </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/login"><i class="fas fa-sign-in-alt"></i></b-nav-item>
      </b-navbar-nav>
      </b-collapse>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');

.navbar-set {
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-weight: bold;
  font-family: 'Ubuntu', sans-serif;
}

img {
  height: 50px;
}
.navbar-light .navbar-nav .nav-link {
    color: #6a4625;
}

/* .navbar-light .navbar-nav .nav-link:hover {
    color: #6a4625;
} */
</style>
