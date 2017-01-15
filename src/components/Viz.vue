<template>
  <div class="viz has-border">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'viz',
  data() {
    return {
      msg: 'An SVG (or CSS) Animation will go HERE!!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.viz {
  flex-grow: 1;
  background-color: var(--dark-grey);
  margin: 5px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
