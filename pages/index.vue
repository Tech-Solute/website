<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <div v-scroll-spy="section" class="main">
      <About></About>
      <TabComponent></TabComponent>
      <Contact></Contact>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import scrollSpy, { Easing } from 'vue2-scrollspy'
import Navbar from './../components/Navbar'
import Header from './../components/Header'
import About from './../components/About'
import TabComponent from './../components/TabComponent'
import Contact from './../components/Contact'
import Footer from './../components/Footer'

Vue.use(scrollSpy, {
  easing: Easing.Cubic.In
})

export default {
  components: {
    Header,
    Navbar,
    About,
    TabComponent,
    Contact,
    Footer
  },
  data() {
    return {
      section: 0
    }
  }
}
</script>

<style lang="sass" scoped></style>
