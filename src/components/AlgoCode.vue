<template>
  <div class="algo-code">
    <pre><code>{{ msg }}</code></pre>
  </div>
</template>

<script>
export default {
  name: 'algo-code',
  data() {
    return {
      msg:
`CODE (or PSEUDOCODE) goes HERE
   LINE2
   LINE3
   ...
`,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.algo-code {
  flex-grow: 1;
  padding: 10px;
}

code {
  text-align: left;
}

</style>
