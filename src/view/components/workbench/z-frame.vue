<template>
  <div class="pages-tables" id="pages-tables">
    <div class="rolling-table meal-table" ref="tableBox">
      <table class="table" id="table" cellpadding="0" cellspacing="0" ref="rollingTable">
        <tr>
          <th class="rows cross" colspan="2">
            <div>
              <div class="calendar-date">
                起始日
                <DatePicker
                  :open="open"
                  :value="startDateStr"
                  format="yyyy-MM-dd"
                  type="date"
                  @on-change="handleChange">
                  <a href="javascript:void(0)" @click="handleClick">
                    <template>{{ startDateStr }}</template>
                  </a>
                </DatePicker>
              </div>
              <div>
                <Button type="text" size="small">
                  <Icon type="ios-arrow-back"></Icon>
                  上一周
                </Button>
                <Button type="text" size="small">今天</Button>
                <Button type="text" size="small">
                  下一周
                  <Icon type="ios-arrow-forward"></Icon>
                </Button>
              </div>
            </div>
          </th>
          <th class="rows date-cell" v-for="item in stockData" :key="item.date">
            <DateCell :stock="item" :todayStr="todayStr"/>
          </th>
        </tr>
        <template v-for="(room,roomNo) in roomData">
          <tr v-for="(bed,bedNo) in room.beds" :key="bed.bedBid">
            <td class="cols room" v-if="bedNo === 0" :rowspan="room.beds.length">{{ room.houseTypeName }}</td>
            <td class="cols bed">
              <BedCell :bed="bed"/>
            </td>
            <td v-for="(i,dateNo) in 30" :key="dateNo + ',' + roomNo + ',' + bedNo"
                @mousedown="handleMouseDown(dateNo, roomNo, bedNo)"
                @mouseup="handleMouseUp"
                @mouseenter="handleMouseEnter(dateNo, roomNo, bedNo)"
                @mouseleave="handleMouseLeave(dateNo, roomNo, bedNo)">
              <StockCell :date="stockData[dateNo]" :room="roomData[roomNo]"
                         :bed="roomData[roomNo].beds[bedNo]"></StockCell>
            </td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>
<script>
import { createIScroll } from '../../../libs/iscrollTable'
import DateCell from './date-cell'
import BedCell from './bed-cell'
import StockCell from './stock-cell'

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
  components: {
    DateCell,
    BedCell,
    StockCell
  },
  data () {
    return {
      bedCount: 0,
      startDateStr: this.todayStr,
      open: false,
      stockData: this.stock,
      roomData: this.roomList
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
    },
    handleMouseDown (dateNo, roomNo, bedNo) {
      // 设置鼠标按下状态
      this.$store.commit('setMouse', true)
      // 设置原点
      this.$store.commit('setOrigin', {
        dateIndex: dateNo,
        bedIndex: this.roomData[roomNo].beds[bedNo].index
      })
      this.isSelect(dateNo, roomNo, bedNo)
    },
    handleMouseUp () {
      this.$store.commit('setModal', true)
    },
    handleClick () {
      this.open = !this.open
    },
    handleChange (date) {
      this.startDateStr = date
      this.open = false
    },
    handleMouseEnter (dateNo, roomNo, bedNo) {
      this.stockData[dateNo].isActive = true
      this.roomData[roomNo].beds[bedNo].isActive = true
      this.isSelect(dateNo, roomNo, bedNo)
      this.isNoSelect(dateNo, this.roomData[roomNo].beds[bedNo].index)
    },
    handleMouseLeave (dateNo, roomNo, bedNo) {
      this.stockData[dateNo].isActive = false
      this.roomData[roomNo].beds[bedNo].isActive = false
    },
    isSelect (dateNo, roomNo, bedNo) {
      if (this.$store.getters.mouseStatus) {
        this.stockData[dateNo].isSelect = true
        this.roomData[roomNo].beds[bedNo].isSelect = true
      }
    },
    isNoSelect (dateIndex, bedIndex) {
      if (!this.$store.getters.mouseStatus) {
        return
      }
      let origin = this.$store.getters.originData

      if (dateIndex > origin.dateIndex) {
        for (let i = 0; i < this.stockData.length; i++) {
          if (i < origin.dateIndex || i > dateIndex) {
            this.stockData[i].isSelect = false
          }
        }

        if (bedIndex < origin.bedIndex) {
          // 第一象限
          console.info('第一象限')

          this.roomData.forEach((room) => {
            room.beds.forEach((bed) => {
              if (bed.index < bedIndex || bed.index > origin.bedIndex) {
                bed.isSelect = false
              }
            })
          })
        } else {
          // 第四象限
          console.info('第四象限')
          this.roomData.forEach((room) => {
            room.beds.forEach((bed) => {
              if (bed.index > bedIndex || bed.index < origin.bedIndex) {
                bed.isSelect = false
              }
            })
          })
        }
      } else {
        for (let i = 0; i < this.stockData.length; i++) {
          if (i > origin.dateIndex || i < dateIndex) {
            this.stockData[i].isSelect = false
          }
        }

        if (bedIndex < origin.bedIndex) {
          // 第二象限
          console.info('第二象限')
          this.roomData.forEach((room) => {
            room.beds.forEach((bed) => {
              if (bed.index < bedIndex || bed.index > origin.bedIndex) {
                bed.isSelect = false
              }
            })
          })
        } else {
          // 第三象限
          console.info('第三象限')
          this.roomData.forEach((room) => {
            room.beds.forEach((bed) => {
              if (bed.index > bedIndex || bed.index < origin.bedIndex) {
                bed.isSelect = false
              }
            })
          })
        }
      }
    }
  },
  mounted () {
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
    height: 50px;
  }

  .cross {
    position: relative;
    z-index: 5;
    width: 180px;
  }

  .date-cell {
    width: 70px;
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
      height: 60px;
      line-height: 20px;
      padding: 5px;
    }
    th {
      color: #43484d;
      white-space: nowrap;
      /*height: 30px;*/
      /*line-height: 20px;*/
      padding: 5px;
      background-color: #f3f4f6;
      font-weight: normal;
      padding-bottom: 0;
      padding-top: 0;
      border: 1px solid red;
    }
  }

  tr {
    position: relative;
    background-color: #fff;
    &:nth-of-type(odd) {
      td {
        // background-color: pink;
      }
    }
  }

  .room {
    width: 110px;
  }

  .bed {
    width: 70px;
  }

  .calendar-date {
    height: 20px;
    line-height: 20px;
    text-align: center;
    outline: 0;
  }

  .calendar-date span {
    cursor: pointer;
  }

  .active {
    background: #45FAAA;
  }
</style>
