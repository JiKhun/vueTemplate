<template>
  <div id="app">
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="testg">+2</button>
    <ul>
      <li v-for="(item,index) in list" @click="go(index)" :key="item.id">
        {{item.id}}
      </li>
    </ul>
    <div>now is {{count}}</div>
    <div>now is {{count2}}</div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import { mapState,mapGetters, mapActions,mapMutations } from "vuex";
export default {
    name: "App",
    created() {
        console.log(this.$store)
        this.$axios.get("http://localhost:3000/123").then(res => {
          
        });
        this.$axios.post("http://localhost:3000/123").then(res => {
          
        });
        // this.$store.dispatch("getlist")
    },
    methods: {
      ...mapActions(["increment", "decrement","testg"]),
      // ...mapMutations(["increment","decrement"]),
      go(index){
        this.$store.commit('setindex',index)
      }
    },
    computed: {
        // ...mapState(["count","list"]),
        ...mapGetters(["count","list","count2"])
    }
};
</script>
 
<style lang="less">
@import "./assets/less/index.less";
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
