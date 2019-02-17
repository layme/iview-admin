<template>
  <div :class="{active: stock.isActive || (stock.isSelect && $store.getters.mouseStatus)}">
    <div class="date-content">
      {{ stock.date.substring(5) }}
      <span v-if="todayStr === stock.date" class="date-week today">今天</span>
      <span v-else class="date-week">{{ stock.date | weekFilter }}</span>
    </div>
    <div class="count-content">{{ stock.availableStockCount }}</div>
  </div>
</template>
<script>
import { dateStrToWeek } from '../../../libs/dateUtil'
export default {
  name: 'DateCell',
  props: {
    stock: {
      type: Object
    },
    todayStr: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  filters: {
    weekFilter (val) {
      return dateStrToWeek(val)
    }
  }
}
</script>
<style lang="less" scoped>
  .date-content {
    height: 20px;
    color: #666;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    font-size: 22px;
  }

  .count-content {
    margin-top: 4px;
    height: 18px;
    color: #666;
    line-height: 18px;
  }

  .active {
    background: #45FAAA;
  }

  .date-week{
    font-size: 14px;
    margin-left: 4px;
  }

  .date-week.today{
    color: #f63;
    font-weight: bolder;
  }
</style>
