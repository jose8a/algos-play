<template>
  <div class="options has-border">
    <h1>{{ msg }}</h1>
    <div id="opt-config">
      <div class="search-item">BinSearch</div>
      <div class="search-item">BFS</div>
      <div class="search-item">DFS</div>
      <div class="sort-item">Selection Sort</div>
      <div class="sort-item">Insertion Sort</div>
      <div class="sort-item">Merge Sort</div>
      <div class="sort-item">Quick Sort</div>
      <div class="sort-item">Bubble Sort</div>
      <div class="sort-item">Combsort</div>
      <div class="sort-item">Heapsort</div>
      <div class="sort-item">Radix Sort</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'options',
  data() {
    return {
      msg: 'Algorithm',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.options {
  background-color: var(--dark-blue);
  min-width: 25vw;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
}

#opt-config {
  display: flex;
  flex-direction: column;
  align-content: center;
}

h1, h2 {
  font-weight: normal;
  color: var(--light-grey);
}

.search-item,
.sort-item {
  width: 90%;
  color: var(--light-grey);
  align-self: center;
  margin: 1px;
}

.sort-item:hover,
.search-item:hover {
  background-color: var(--light-blue);
}

</style>
