<template>
  <div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import Navbar from './../components/Navbar'
import Header from './../components/Header'

export default {
  components: {
    'app-header': Header,
    'nav-bar': Navbar
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped></style>
