<template>
  <div id="app">
    <div class="settings-content">
      <ul class="settings">
        <li>
          <p>总分</p>
          <input type="text" v-model="total">
        </li>
        <li>
          <p>评分（0~总分）</p>
          <input type="text" v-model="score">
        </li>
        <li>
          <p>大小</p>
          <select v-model="size">
            <option value="48">48px</option>
            <option value="36">36px</option>
            <option value="24">24px</option>
          </select>
        </li>
        <li>
          <p>间隔</p>
          <select v-model="space">
            <option value="large">大</option>
            <option value="middle">中</option>
            <option value="small">小</option>
          </select>
        </li>
      </ul>
      <p>显示效果</p>
      <star
        :total="total"
        :score="score"
        :size="size"
        :space="space"
      ></star>
    </div>
  </div>
</template>

<script>

  import star from './lib/star.vue'
export default {
  name: 'App',
  components: {
    star
  },
  data() {
    return {
        total: 5,
        score: 2.6,
        size: 48,
        space: 'middle'
    }
  }
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

  .settings {
    /*display: inline-block;*/
    padding-bottom: 10px;
    border-bottom: 5px solid greenyellow;
  }
  .settings li {
    /*display: inline-block;*/
  }
</style>
