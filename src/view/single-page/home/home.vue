<template>
  <div>
    <workbench :houseTypeList="houseTypeList"/>
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import Example from './example.vue'
import Workbench from '../../components/workbench/workbench'

export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Example,
    Workbench
  },
  data () {
    return {
      houseTypeList: [
        {
          bid: 'b70f7358fba3430fad473a07a6e780fe',
          houseName: '4人间'
        }, {
          bid: 'b70f7358fba3430fad473a07a6e781fe',
          houseName: '6人间'
        }, {
          bid: 'b70f7358fba3430fad473a07a6e782fe',
          houseName: '8人间'
        }
      ]
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less">
  .count-style {
    font-size: 50px;
  }
</style>
