<template>
  <div class="container">
    <Tabs>
      <Tab name="service" selected="true">
        <p>My name is George</p>
      </Tab>
      <Tab name="technology">
        <p>My name is Misan</p>
      </Tab>
      <Tab name="industry">
        <p>My name is Frank</p>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Tab from '@/components/Tab'
import Tabs from '@/components/Tabs'

export default {
  components: {
    Tab,
    Tabs
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 200px;
  width: 100%;
}
</style>
