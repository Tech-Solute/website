<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <About></About>
    <Features></Features>
    <TabComponent></TabComponent>
    <Mission></Mission>
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
import Mission from './../components/Mission'
import Footer from './../components/Footer'

export default {
  components: {
    Header,
    Navbar,
    About,
    Features,
    TabComponent,
    Contact,
    Mission,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped></style>
