<template>
  <div class="footer">
    <div class="d-flex flex-row bd-highlight pt-2">
      <div class="p-2 bd-highlight col-6 information">
        <p><a href="tel:+62-123-997-2595">(+62) 1329 972 595</a><i class="fas fa-phone pl-2"></i></p>
        <p><a href="https://wa.me/621239972595">(+62) 1329 972 595</a><i class="fab fa-whatsapp pl-2"></i></p>
        <p>
          <a href="mailto:palma.eo23@gmail.com?subject=Wedding-Information">palma.eo23@gmail.com<i class="fas fa-envelope-open-text pl-2"></i></a>
        </p>
      </div>
      <div class="p-2 bd-highlight col-6 address">
        <p><i class="fas fa-home pr-2"></i>Jalan Kabupaten, Nusupan</p>
        <p class="address2">Trihanggo, Gamping, Sleman</p>
        <p class="address2">DI Yogyakarta 55291</p>
      </div>
    </div>
    <div class="pb-2 pt-1 copy">
      <p>© 2020 Palma Wedding Organizer by Brahmantya
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  width: 100vw;
  border-top: 0.25rem solid #8cc847;
  background-color: #6a4625;
  color: white
}

p {
  font-size: x-small;
  margin-bottom: 0.2rem
}

a, a:hover {
  color: white;
  text-decoration: none
}

.information {
  text-align: right;
}

.address {
  text-align: left;
}

.address2 {
  padding-left: 1.2rem;
}

.copy {
  font-size: 0.5rem;
  text-align: center
}

</style>
