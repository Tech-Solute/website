<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <About></About>
    <Features></Features>
    <TabComponent></TabComponent>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './../components/Navbar'
import Header from './../components/Header'
import About from './../components/About'
import Features from './../components/Features'
import TabComponent from './../components/TabComponent'
import Contact from './../components/Contact'
import Footer from './../components/Footer'

export default {
  components: {
    Header,
    Navbar,
    About,
    Features,
    TabComponent,
    Contact,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped></style>
