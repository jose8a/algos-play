<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div id="main-content">
      <options></options>
      <deets></deets>
      <viz v-bind:indata="rawData"></viz>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Options from './components/Options';
import Deets from './components/Deets';
import Viz from './components/Viz';

export default {
  name: 'app',
  components: {
    NavBar,
    Options,
    Deets,
    Viz,
  },
  data() {
    return {
      rawData: [
        25, 15, 35, 5, 7,
        29, 31, 40, 26, 16,
        4, 33, 31, 27, 45,
        49, 11, 17, 19, 23,
        37, 43, 2, 1, 15,
      ],
    };
  },
};
</script>

<style>
:root {
  --light-blue: #28c;
  --middle-blue: #25e;
  --dark-blue: #36a;
  --light-grey: #ccc;
  --middle-grey: #888;
  --dark-grey: #555;
}

body {
  height: 100vh;
  /* background-color: var(--light-grey); */
  background-color: var(--light-grey);
  margin: 0;
  padding: 0;
}

h1, h2 {
  text-align: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#main-content {
  display: flex;
  flex-direction: row;
  height: 85vh;
  justify-content: stretch;
}

.has-border {
  border: 2px double var(--middle-grey);
}
</style>
