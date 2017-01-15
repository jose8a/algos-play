<template>
  <div class="deets has-border">
    <h1>{{ msg }}</h1>
    <algo-code></algo-code>
    <algo-bigo></algo-bigo>
  </div>
</template>

<script>
import AlgoCode from './AlgoCode';
import AlgoBigo from './AlgoBigo';

export default {
  name: 'deets',
  components: {
    AlgoCode,
    AlgoBigo,
  },
  data() {
    return {
      msg: 'Algorithm Deets',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.deets {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 30vw;
  background-color: #28c;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
}

h1, h2 {
  font-weight: normal;
  color: var(--light-grey);
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
