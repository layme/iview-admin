<template>
  <div :class="{active: bed.isActive || (bed.isSelect && $store.getters.mouseStatus)}">
    <!--<div class="subscript">-->
      <!--角标-->
    <!--</div>-->
    {{ bed.bedCode }}
  </div>
</template>
<script>
export default {
  name: 'BedCell',
  props: {
    bed: {
      type: Object
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
  .active {
    background: #45FAAA;
    width: 100%;
    height: 100%;
  }

  .subscript{
    color: #fff;
    height: 30px;
    width: 100px;
    position: absolute;
    right: -30px;
    text-align: center;
    line-height: 30px;
    font-family: "黑体";
    background-color: #0c60ee;
    -moz-transform:rotate(45deg);
    -webkit-transform:rotate(45deg);
    -o-transform:rotate(45deg);
    -ms-transform:rotate(45deg);
    transform:rotate(45deg);
  }
</style>
