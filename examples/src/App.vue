<template>
  <div id="app">
     <k-tabs>
        <k-tab name="Tab 1" :tags="[{ content:'new'}]" :selected="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nobis architecto, ipsum ratione, harum inventore mollitia impedit neque aliquam debitis magni suscipit ut maxime labore laudantium sint fugit aliquid eligendi.
        </k-tab>
        <k-tab name="Tab 2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, totam? Reprehenderit, ducimus ea nesciunt possimus ipsum eligendi minus! Neque iusto ipsum error illo, asperiores assumenda perferendis aliquam fuga eligendi vitae?
        </k-tab>
        <k-tab name="Tab 3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, non cupiditate maiores, inventore totam omnis atque accusamus voluptas maxime dolores labore deserunt culpa vel modi at tempore magnam facilis quisquam?
        </k-tab>
        <k-tab name="Tab 4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quo atque odio dignissimos iusto recusandae eius fugiat id officiis vitae, distinctio nisi, officia magnam repellendus excepturi possimus delectus inventore sequi.
        </k-tab>
     </k-tabs>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
body {
  margin:0;
  padding:0;
  background-image:url('https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg?auto=compress&cs=tinysrgb&h=750&w=1260');
  background-size:auto;
  background-repeat: no-repeat;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}
ul {
  padding:0;
}
</style>
