<template>
  <div>
    <Card dis-hover>
      <!-- 房型选择 -->
      <span>当前房型：</span>
      <Dropdown @on-click="handleHouseType">
        <a href="javascript:void(0)">
          {{ houseTypeName }}
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem v-for="(item, index) in houseTypeOptions" :name="index" :key="index">{{ item.houseName }}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <!-- 床位日历表 -->
      <BedCalendar />

      <!--弹窗-->
      <ActionModal startDate="2019-02-13" endDate="2019-02-15" />
    </Card>
  </div>
</template>

<script>
import BedCalendar from './bed-calendar'
import ActionModal from './action-modal'
import { getStockWorkbench, getStockOfPerDay } from '../../../api/data'
import { dateStrMove, dateStrToWeek, checkDateStr } from '../../../libs/dateUtil'

export default {
  name: 'Workbench',
  props: {
    houseTypeList: {
      type: Array
    }
  },
  components: { BedCalendar, ActionModal },
  data () {
    return {
      dateOpen: false,
      houseTypeName: '全部房型',
      houseTypeOptions: this.houseTypeList,

      oDate: '',
      m: '',
      d: '',
      dataStr: '',
      bedData: {},
      dateLeave: [],
      houseTypeBid: '',
      todayStr: '',
      orderEnums: '{0:"android",1:"ios",2:"walk in",3:"OTA-去哪儿",4:"OTA-艺龙",100:"锁定",5:"OTA-青芒果",6:"OTA-去呼呼",7:"OTA-booking",8:"OTA-携程"}',

      // 操作对话框
      openModel: this.$store.getters.modalStatus,
      step: 0,
      createOrder: {},
      lockBed: {
        bedNo: [],
        startDate: '',
        endDate: '',
        reason: '1',
        remark: ''
      },
      unlockBed: {},

      lockReasonList: [{ value: '1', label: 'OTA库存' }, { value: '2', label: '装修' }, {
        value: '3',
        label: '维修'
      }, { value: '4', label: '其他' }]
    }
  },
  methods: {
    /**
       * 初始化函数
       */
    init () {
      this.oDate = new Date()
      this.m = (this.oDate.getMonth() + 1) >= 10 ? '' + (this.oDate.getMonth() + 1) : '0' + (this.oDate.getMonth() + 1)
      this.d = this.oDate.getDate() >= 10 ? '' + this.oDate.getDate() : '0' + this.oDate.getDate()
      this.dataStr = dateStrMove(this.oDate.getFullYear() + '-' + this.m + '-' + this.d, -1)
      this.houseTypeOptions.unshift({
        bid: '',
        houseName: '全部房型'
      })
    },

    handleHouseType (name) {
      let _houseTypeName = this.houseTypeList[name].houseName
      if (this.houseTypeName !== _houseTypeName) {
        this.houseTypeName = this.houseTypeList[name].houseName
        // getData
      }
    },

    isToday (val) {
      return checkDateStr(this.todayStr, val) === 0
    },

    /**
       * 日历选择器改变响应方法
       * @param date
       */
    handleChange (date) {
      this.dataStr = date
      this.dateOpen = false
    },

    /**
       * 周切换
       * @param val: -1上一周/0今天/1下一周
       */
    weekChange (val) {
      switch (val) {
        case -1:
          this.dataStr = dateStrMove(this.dataStr, -7)
          break
        case 0:
          this.dataStr = dateStrMove(this.todayStr, -1)
          break
        case 1:
          this.dataStr = dateStrMove(this.dataStr, 7)
          break
      }
      this.buildCalendar()
    },

    buildCalendar () {
      this.getData()
    },

    /**
       * 获取数据方法
       */
    getData () {
      getStockWorkbench(this.dataStr, dateStrMove(this.dataStr, 30), this.houseTypeBid).then(res => {
        let workData = res.data
        this.bedData = workData
        this.todayStr = workData.todayBid
      })

      getStockOfPerDay(this.dataStr, dateStrMove(this.dataStr, 30), this.houseTypeBid).then(res => {
        this.dateLeave = res.data
      })
    }
  },
  filters: {
    weekFilter (val) {
      return dateStrToWeek(val)
    }
  },
  created () {
    this.init()
    this.getData()
  },
  mounted () {
    // this.createTable()

    // this.buildCalendar()
  }
}
</script>

<style lang="less">
  /*@import "../single-page/home/workbench";*/
</style>
