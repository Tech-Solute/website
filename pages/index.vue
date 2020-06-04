<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
  </div>
</template>

<script>
import Navbar from './../components/Navbar'
import Header from './../components/Header'

export default {
  components: { Header, Navbar },
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped></style>
