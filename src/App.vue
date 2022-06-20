<template>
  <div id="app">
    <h1>Calculadora</h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from "./main/Calculator.vue";
export default {
  components: { Calculator },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Courier New", Courier, monospace;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background: rgb(46, 8, 55);
  background: linear-gradient(
    90deg,
    rgba(46, 8, 55, 1) 46%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>