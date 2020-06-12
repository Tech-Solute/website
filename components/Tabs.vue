<template>
  <div>
    <header class="tabs">
      <div class="offers-tab">
        <div v-for="(tab, index) in tabs" :key="index">
          <h4
            :class="{ 'is-active': tab.isActive }"
            @click="selectTab(tab)"
            class="nav-item"
          >
            {{ tab.name }}
          </h4>
        </div>
      </div>
    </header>
    <section class="tabs-details">
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.tabs {
  /*  border-bottom: 2px solid rgba(50, 50, 50, 0.1); */
  margin: 0 10px;
}

.tabs-details {
  padding: 10px;
}

.offers-tab {
  display: grid;
  /*   -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  -webkit-box-flex: 0;
  flex: 0 1 auto; */
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  max-width: 930px;
  margin-bottom: 70px;
  overflow: hidden;
}

.nav-item {
  position: relative;
  -webkit-box-flex: 0;
  flex: 0 1 33.3333%;
  cursor: pointer;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(50, 50, 50, 0.1);
  color: #323232;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.88;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out 0s;

  /*   &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    background-color: red;
    visibility: hidden;

    &:hover {
      visibility: visible;
    }
  }
 */
  &:hover {
    color: #3f7fe7;
  }

  &.is-active {
    color: #3f7fe7;
    border-bottom: 2px solid #2a73e7;
  }
}
</style>
