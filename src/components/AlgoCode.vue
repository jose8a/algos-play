<template>
  <div class="algo-code">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'algo-code',
  data() {
    return {
      msg: 'I am Code Lorem ..!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.algo-code {
  flex-grow: 1;
}

h1, h2 {
  font-weight: normal;
}
</style>
