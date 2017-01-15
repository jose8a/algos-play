<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div id="main-content">
      <options></options>
      <deets></deets>
      <viz></viz>
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
