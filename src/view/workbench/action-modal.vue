<template>
  <!-- 弹窗操作 -->
  <Modal v-model="openModel" width="360">
    <p slot="header">
      <Icon type="md-compass"/>
      <span>{{ step | titleFilter}}</span>
    </p>

    <!-- 单选空白区域：新建订单必有，锁定 -->
    <div v-if="step === 0">
      <p>日期：{{ startDate }} 至 {{ endDate }}</p>
      <p>床位号：{{ bedCode }}</p>
      <p>
        <Row :gutter="20">
          <Col span="12">
            <Button type="primary" @click="createOrder">新建订单</Button>
          </Col>
          <Col span="12">
            <Button type="primary" @click="openLockBed">锁定床位</Button>
          </Col>
        </Row>
      </p>
    </div>

    <!-- 选择锁定，选择原因，填写备注 -->
    <div v-if="step === 1">
      <Form :model="lockBed" :label-width="80">
        <FormItem label="原因：">
          <Select v-model="lockBed.reason">
            <Option v-for="item in lockReasonList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="备注：">
          <Input v-model="lockBed.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                 placeholder="Enter something..."></Input>
        </FormItem>
      </Form>
      <div style="text-align: center">
        <Button type="primary" @click="lockBed">锁定</Button>
      </div>
    </div>

    <!-- 查看订单 -->
    <div v-if="step === 2" style="text-align: center">
      <Button type="primary" @click="openOrderDetail">查看</Button>
    </div>

    <!-- 解锁 -->
    <div v-if="step === 3">
      <Form :model="lockBed" :label-width="80">
        <FormItem label="原因：">
          OTA库存
        </FormItem>
        <FormItem label="备注：">
          美团投放
        </FormItem>
      </Form>
      <div style="text-align: center">
        <Button type="primary" @click="unlockBed">解锁</Button>
      </div>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'ActionModal',
  props: {
    openModel: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 0
    },
    startDate: {
      type: String
    },
    endDate: {
      type: String
    },
    orderBid: {
      type: String
    },
    bedCode: {
      type: Array
    }
  },
  data () {
    return {
      lockReasonList: [],
      lockBedDto: {}
    }
  },
  methods: {
    createOrder () {},
    openLockBed () {
      this.step = 1
      this.getLockReasonList()
    },
    getLockReasonList () {
      if (this.lockReasonList.length === 0) { }
    },
    lockBed () {},
    openOrderDetail () {
      let orderBid = this.orderBid
      let route = {
        name: 'order_detail',
        params: {
          orderBid
        },
        meta: {
          title: '订单详情'
        }
      }
      this.$router.push(route)
    },
    unlockBed () {}
  },
  filters: {
    titleFilter (val) {
      switch (val) {
        case 0: return '选择操作'
        case 1: return '锁定床位'
        case 2: return '选择操作'
        case 3: return '解锁床位'
      }
    }
  }
}
</script>
