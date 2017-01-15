<template>
  <div class="top-nav has-border">
    <div class="brand">
      <img src="../assets/logo.png">
      <span>{{ msg }}</span>
    </div>
    <div class="menu-nav">
      <span><a href="http://#" target="_blank">vue-router</a></span>
      <span><a href="http://#" target="_blank">vuex</a></span>
      <span><a href="http://#" target="_blank">vue-loader</a></span>
      <span><a href="https://#" target="_blank">awesome-vue</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      msg: 'AlgoEDU',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-nav {
  background-color: #25e;
  height: 15vh;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
}

h1, h2 {
  font-weight: normal;
}

img {
  height: 10vh;
}

.top-nav {
  display: flex;
  justify-content: space-between;
}

.menu-nav {
  list-style-type: none;
  margin-bottom: 0;
  display: flex;
  min-width: 30vw;
}

span {
  align-items: bottom;
  display: inline-block;
  margin-bottom: 5px;
  flex-grow: 1;
  display: flex;
  justify-content: space-betwen;
  align-items: flex-end;
}

a {
  color: var(--light-grey);
  transform: skewX(-25deg);
  font-size: 1.25em;
  text-decoration: none;
}

a:hover {
  transform: scale(1.20) skewX(-25deg);
}
</style>
