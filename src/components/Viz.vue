<template>
  <div class="viz has-border">
    <div>{{ msg }}</div>
    <div v-on:click="nextSort" id="sort-container">
      <div v-for="item in sorter.getData()" class="sort-item"
            v-bind:style="{ width: (item*100)/100 + '%'}">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import sort from '../lib/select-sort';

export default {
  name: 'viz',
  props: ['indata'],
  data() {
    return {
      msg: '',
      sorter: {},
    };
  },
  created() {
    this.sorter = sort();
    this.sorter.init(this.indata);
  },
  methods: {
    nextSort() {
      const vm = this;
      this.sorter.nextTick(vm);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.viz {
  flex-grow: 1;
  background-color: var(--dark-grey);
  margin: 5px;
  display: flex;
  flex-direction: column;
}

.sort-item {
  background-color: var(--dark-blue);
  border-radius: 5px;
  border: 1px solid #eee;
  padding-left: 10px;
  color: var(--light-grey);
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
