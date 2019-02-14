<template>
  <div class="pages-tables " id="pages-tables">
    <div class="rolling-table meal-table" ref="tableBox">
      <table class="table" id="table" cellpadding="0" cellspacing="0" ref="rollingTable">
        <tr>
          <th class="rows cross" colspan="2"></th>
          <th class="rows" v-for="(item, index) in stock" :key="index">{{item.date.substring(5)}}</th>
        </tr>
          <template v-for="(room,roomNo) in roomList">
            <tr v-for="(bed,bedNo) in room.beds" :key="bedNo">
              <td class="cols" v-if="bedNo === 0" :rowspan="room.beds.length">{{ room.houseTypeName }}</td>
              <td class="cols">{{ bed.bedCode }}</td>
              <td v-for="i in 30" :key="roomNo + ',' + bedNo + ',' + i">{{ roomNo }},{{ bedNo }},{{ i }}</td>
            </tr>
          </template>
      </table>
    </div>
  </div>
</template>
<script>
import { createIScroll } from '../../libs/iscrollTable'
export default {
  name: 'ZFrame',
  props: {
    todayStr: {
      type: String
    },
    projectBid: {
      type: String
    },
    roomList: {
      type: Array
    },
    stock: {
      type: Array
    }
  },
  data () {
    return {
      bedCount: 0
    }
  },
  methods: {
    getBedCount () {
      let temp = 0
      if (this.roomList.length > 0) {
        this.roomList.forEach((room) => {
          room.beds.forEach((bed) => {
            temp++
          })
        })
      }
      this.bedCount = temp
    }
  },
  mounted () {
    this.maxHeight = window.screen.height
    createIScroll('.meal-table')
  }
}
</script>
<style lang="less" scoped>
  .pages-tables {
    -webkit-overflow-scrolling: auto;
    position: relative;
    height: 100%;
    /*width: 600px;*/
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .rolling-table {
    height: 500px;
    font-size: 14px;
    color: #86939a;
    background-color: #fff;
    width: 100%;
    -webkit-overflow-scrolling: auto;
    position: relative;
    top: 0;
    overflow: hidden;
  }
  .rows {
    position: relative;
    z-index: 3;
  }
  .cross {
    position: relative;
    z-index: 5;
  }
  table td {
    border: 0 solid #000;
    font-size: 14px;
    background: #fff;
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .table {
    //   border-collapse: collapse; //去掉重复的border
    color: #86939e;
    font-size: 14px;
    border: 0px solid #000;
    min-height: 100%;
    text-align: center;
    td {
      border-bottom: 1px solid #eee;
      border-left: 1px dashed #eee;
      white-space: nowrap;
      height: 20px;
      line-height: 20px;
      padding: 5px;
    }
    th {
      color: #43484d;
      white-space: nowrap;
      height: 30px;
      line-height: 20px;
      padding: 5px;
      background-color: #f3f4f6;
      font-weight: normal;
      padding-bottom: 0;
      padding-top: 0;
      border: 1px solid red;
    }
  }
  tr{
    position: relative;
    background-color: #fff;
    &:nth-of-type(odd){
      td{
        // background-color: pink;
      }
    }
  }
</style>
