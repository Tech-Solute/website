<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <About></About>
  </div>
</template>

<script>
import Navbar from './../components/Navbar'
import Header from './../components/Header'
import About from './../components/About'

export default {
  components: { Header, Navbar, About },
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped></style>
