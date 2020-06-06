<template>
  <footer>
    <span class="secondary-tertiary">
      This is copyright of TechSolute © 2020.
    </span>
  </footer>
</template>

<script>
export default {
  data() {}
}
</script>

<style lang="scss" scoped>
@import './../assets/styles/_typography.scss';
footer {
  height: 100px;
  background-color: #eee;
  padding: 1rem;
  text-align: center;
}

span {
  display: inline-block;
  padding: 20px 0;
  color: #777;
  font-size: 1.4rem;

  &:hover {
    color: rgb(36, 36, 36);
  }
}
</style>
