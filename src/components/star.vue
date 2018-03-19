<template>
    <div class="star" :class="starType">
      <span
        v-for="(itemClass,index) in itemClasses"
        :key="index"
        :class="itemClass"
        class="star-item"
      ></span>
    </div>
</template>

<script type="text/ecmascript-6">

  // 总长度，总分
  //  const LENGTH = 5;
  // 全星，半星，无星的样式名称
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';

  export default {
    name: 'star',
    components: {},
    props: {
      total: {
        type: Number,
        default: 5
      },
      score: {
        type: Number,
        default: 2.6
      },
      size: {
        type: Number,
        default: 36
      },
      space: {
        type: String,
        default: 'middle'
      }
    },
    data () {
      return {
//        total: this.total,
//        score: this.score
//        size: this.size,
//        space: this.space
      }
    },
    computed: {
      starType() {
        return 'star-' + this.size + ' ' + this.space + '-space';
      },
//      score: {
//        return this.score>this.total?this.total:this.score;
//      },
      itemClasses() {
        let result = [];
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = (score % 1 !== 0)
        let integer = Math.floor(score)
        for (let i=0;i<integer;i++) {
          result.push(CLS_ON);
        }
        if (hasDecimal)
          result.push(CLS_HALF);
        while(result.length < this.total)
          result.push(CLS_OFF);
        return result;
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./star.styl";
</style>
