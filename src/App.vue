<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>

    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
     <button v-on:click="test()">Submit</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import { WeatherForecastService, OpenAPI } from "./services/apiClient";

@Component({
  components: {
    HelloWorld,
  },
    data() {
        return {
        file: undefined
    }
    },

  methods:{
      async test(){
          OpenAPI.BASE = "https://localhost:5001"
          const formData = new FormData();
        formData.append('file', (this as any ).file);
          WeatherForecastService.postWeatherForecastService({requestBody: formData})

      },
      handleFileUpload(){
        (this as any ).file = (this.$refs.file as any).files[0];
  }
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
