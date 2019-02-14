<template>
  <div>
    <Card dis-hover>
      <!-- 房型选择 -->
      <Dropdown @on-click="handleHouseType">
        <a href="javascript:void(0)">
          {{ houseTypeName }}
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem v-for="(item, index) in houseTypeList" :name="index" :key="index">{{ item.label }}
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
import { getStockWorkbench, getStockOfPerDay } from '../../api/data'
import { dateStrMove, dateStrToWeek, checkDateStr } from '../../libs/dateUtil'

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
      openModel: false,
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

      // 创建核心对象table
      table: {
        // 元素
        elmRoot: this.$refs.J_allBox, // 根元素
        Xaxis: this.$refs.J_timeAxis, // 时间x轴box
        Yaxis: this.$refs.J_bedAxis, // 床位y轴box
        tableGrid: this.$refs.J_tableGrid, // 表格框架box

        XaxisAth: [], // this.Xaxis.find('th'), // 时间x轴30个th
        YaxisOtbody: [], // this.Yaxis.find('tbody'), // 床位y轴tbody
        tableGridOtbody: [], // this.tableGrid.find('tbody'), // 表格框架tbody

        // 数据
        todayStr: '', // 表示今天的标识
        dateLeave: null, // 30天的日期加上各自剩余的床位数 arr
        bedData: null, // 当前选择房间类型对应所有信息 包括房间、床位、订单标识名字状态时间段等信息 arr
        dateToXpos: null, // 每次生成表格，记录时间和xpos对应关系
        xposToDate: null, // 每次生成表格，记录xpos和时间对应关系
        yposToRoom: null, // 每次生成表格，记录ypos和床位号对应关系
        yposTobedbid: null, // 每次生成表格，记录ypos和床位标识对应关系
        yposTohousebid: null, // 每次生成表格，记录ypos和房型标识对应关系
        projectBid: '', // 每次生成表格，记录项目标识
        ordersPos: null, // 每次生成表格，记录订单占据的坐标
        numberToOrderStatus: { '1': 'payed', '2': 'checkin', '3': 'refunding', '6': 'checkout', '-1': 'locking' }, // 用于把数字转化为床位状态
        tableStartDate: '', // 记录当前表格的第一天
        tableEndDate: '' // 记录当前表格的最后一天
      },
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
    },

    handleHouseType (name) {
      let _houseTypeName = this.houseTypeList[name].value
      if (this.houseTypeName !== _houseTypeName) {
        this.houseTypeName = this.houseTypeList[name].value
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
      this.createTable()
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
