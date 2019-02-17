<template>
  <div :class="{active: isActive}">
    <!--<div v-show="date.isActive && bed.isActive">-->
    <div v-show="isActive">
    <div>{{ date.date }}</div>
    <div>{{ room.areaShowName }}-{{ bed.bedCode }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BedCell',
  props: {
    date: {
      type: Object
    },
    room: {
      type: Object
    },
    bed: {
      type: Object
    }
  },
  data () {
    return {}
  },
  computed: {
    isActive () {
      return (this.date.isActive && this.bed.isActive) || (this.date.isSelect && this.bed.isSelect && this.$store.getters.mouseStatus)
    }
  }
}
</script>
<style lang="less" scoped>
  .active {
    background: #45FAAA;
    width: 100%;
    height: 100%;
  }
</style>
