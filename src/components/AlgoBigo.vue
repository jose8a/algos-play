<template>
  <div class="big-o">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'algo-bigo',
  data() {
    return {
      msg: 'I am BigO Ipsum !!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.big-o {
  flex-grow: 1;
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
