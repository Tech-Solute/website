<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <div class="main" v-scroll-spy="section">
      <About></About>
      <TabComponent></TabComponent>
    </div>
    <Mission></Mission>
    <Contact></Contact>
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
import Mission from './../components/Mission'
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
    Mission,
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
