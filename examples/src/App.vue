<template>
  <div id="app">
     <k-tabs>
        <k-tab name="Tab 1" :tags="[{ content:'102002'}]" :selected="true">tab1</k-tab>
        <k-tab name="Tab 2">tab2</k-tab>
        <k-tab name="Tab 3">tab3</k-tab>
        <k-tab name="Tab 4">tab4</k-tab>
     </k-tabs>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
