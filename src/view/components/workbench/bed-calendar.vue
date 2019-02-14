<template>
  <div>
    <ZFrame :todayStr="todayStr" :projectBid="projectBid" :roomList="roomList" :stock="stock" />
  </div>
</template>

<script>
import Vue from 'vue'
import ZFrame from './z-frame'

export default {
  name: 'BedCalendar',
  components: { ZFrame },
  props: {},
  data () {
    return {
      todayStr: '2019-02-12',
      projectBid: '63615afa5a344153a047aca1ea32cc51',
      roomList: [
        {
          houseTypeBid: '61703b4d76d2450d912600f449a3d4de',
          houseTypeName: '4人间（男生）',
          areaBid: 'ef9e673f52144e26945b8cc36cd5d56b',
          areaShowName: 'A房间',
          projectBid: '63615afa5a344153a047aca1ea32cc51',
          beds: [{
            bedBid: '0b81c1517cb246cb83aaaf1ea970e131',
            bedCode: '01',
            bedStatus: 1,
            orders: []
          }, {
            bedBid: '85f50f29467c4fd8adfb86c98786f5f4',
            bedCode: '02',
            bedStatus: 1,
            orders: []
          }, {
            bedBid: '31b9891870d14c61a0b8f74ad2962a5b',
            bedCode: '03',
            bedStatus: 1,
            orders: []
          }, {
            bedBid: '22650ccbec034c9dbcbca6c6f9c55f7f',
            bedCode: '04',
            bedStatus: 1,
            orders: []
          }]
        }, {
          houseTypeBid: '86656b45809b4442bf08af4ae042302c',
          houseTypeName: '6人间（男生）',
          areaBid: '425e8d1db8b248c0a54b86ce7c1dbe41',
          areaShowName: 'B房间',
          projectBid: '63615afa5a344153a047aca1ea32cc51',
          beds: [{
            bedBid: '01461ff00c4d4503935d62e50bd50cc0',
            bedCode: '01',
            bedStatus: 1,
            orders: [{
              orderBid: 'a37ef1f3c477468bba660cceafd0cddc',
              orderNumber: 'BJ101190205034',
              channel: '9',
              name: '季阳',
              startDate: '2019-02-20',
              endDate: '2019-02-22',
              orderStatus: 1
            }, {
              orderBid: 'd249b5077afc4c11b0034e5dd11d9eed',
              orderNumber: 'BJ101190210073',
              channel: '0',
              name: '王纯',
              startDate: '2019-02-11',
              endDate: '2019-02-12',
              orderStatus: 6
            }]
          }, {
            bedBid: 'f1df5f794bff494fbf11e4e613db442a',
            bedCode: '02',
            bedStatus: 1,
            orders: []
          }, {
            bedBid: '9cafe86ebfa14d8fae3a85e500cf1d43',
            bedCode: '03',
            bedStatus: 1,
            orders: [{
              orderBid: '84ee1dac89e24e5b87fb05baa36eef6b',
              orderNumber: 'BJ101190205027',
              channel: '8',
              name: '郑梓聪',
              startDate: '2019-02-07',
              endDate: '2019-02-13',
              orderStatus: 2
            }, {
              orderBid: 'afb3291231954d6d8818c6fc80ee9637',
              orderNumber: 'BJ101190206042',
              channel: '1',
              name: '邓春雨',
              startDate: '2019-02-13',
              endDate: '2019-02-14',
              orderStatus: 1
            }]
          }, {
            bedBid: 'b5ac3bf79fa7458b834d7e14bb6850d9',
            bedCode: '04',
            bedStatus: 1,
            orders: [{
              orderBid: '667aef4ee19d4917b584f50d9ef8d983',
              orderNumber: 'BJ101190201021',
              channel: '0',
              name: '王连旭',
              startDate: '2019-02-11',
              endDate: '2019-02-13',
              orderStatus: 2
            }, {
              orderBid: 'cc1b53dabee74126897f58d210cac9c0',
              orderNumber: 'BJ101190201044',
              channel: '4',
              name: '叶圣航',
              startDate: '2019-02-15',
              endDate: '2019-02-19',
              orderStatus: 1
            }, {
              orderBid: 'cffa0f2388cc4cb59deebab14b3bf0e0',
              orderNumber: 'BJ101190212061',
              channel: '1',
              name: '陈涛',
              startDate: '2019-02-19',
              endDate: '2019-02-22',
              orderStatus: 1
            }, {
              orderBid: '4addee1e0140438880df5fb4acc2c663',
              orderNumber: 'BJ101190212072',
              channel: '0',
              name: '王连旭',
              startDate: '2019-02-13',
              endDate: '2019-02-15',
              orderStatus: 1
            }]
          }, {
            bedBid: '3a9442a166b14a70a62f16c798b21da3',
            bedCode: '05',
            bedStatus: 1,
            orders: []
          }, {
            bedBid: '04d6d02158a7439b93ec1a0654c7ca70',
            bedCode: '06',
            bedStatus: 1,
            orders: []
          }]
        }, {
          houseTypeBid: '61703b4d76d2450d912600f449a3d4de',
          houseTypeName: '4人间（男生）',
          areaBid: '76d6202f47d54bb3b32c3490b813d740',
          areaShowName: 'C房间',
          projectBid: '63615afa5a344153a047aca1ea32cc51',
          beds: [{
            bedBid: 'e980d80903de41baa9381693aa782191',
            bedCode: '01',
            bedStatus: 1,
            orders: []
          }, {
            bedBid: 'db5af6d22ca64960851111779ef8e372',
            bedCode: '02',
            bedStatus: 1,
            orders: []
          }, {
            bedBid: '5a74c6afe20f433d8d8d9ca2e8cfdea3',
            bedCode: '03',
            bedStatus: 1,
            orders: []
          }, {
            bedBid: '7316f705af904245b811e814ea7f7098',
            bedCode: '04',
            bedStatus: 1,
            orders: []
          }]
        }, {
          houseTypeBid: '61703b4d76d2450d912600f449a3d4de',
          houseTypeName: '4人间（男生）',
          areaBid: '57a4e5d80ea7422383d317d08ab968af',
          areaShowName: 'D房间',
          projectBid: '63615afa5a344153a047aca1ea32cc51',
          beds: [{
            bedBid: 'b054602378c84ef8bf60d150392261f9',
            bedCode: '01',
            bedStatus: 1,
            orders: []
          }, {
            bedBid: 'a230dca1ceb9439f80ee62662ed3db56',
            bedCode: '02',
            bedStatus: 1,
            orders: []
          }, {
            bedBid: 'a623f56e050d4783ad46d38753be17ef',
            bedCode: '03',
            bedStatus: 1,
            orders: []
          }, {
            bedBid: '5ec294ea241c432a89f20e48e7f9daec',
            bedCode: '04',
            bedStatus: 1,
            orders: []
          }]
        }],
      stock: [
        {
          date: '2019-02-11',
          availableStockCount: 29
        },
        {
          date: '2019-02-12',
          availableStockCount: 31
        },
        {
          date: '2019-02-13',
          availableStockCount: 41
        },
        {
          date: '2019-02-14',
          availableStockCount: 39
        },
        {
          date: '2019-02-15',
          availableStockCount: 40
        },
        {
          date: '2019-02-16',
          availableStockCount: 43
        },
        {
          date: '2019-02-17',
          availableStockCount: 49
        },
        {
          date: '2019-02-18',
          availableStockCount: 51
        },
        {
          date: '2019-02-19',
          availableStockCount: 50
        },
        {
          date: '2019-02-20',
          availableStockCount: 53
        },
        {
          date: '2019-02-21',
          availableStockCount: 58
        },
        {
          date: '2019-02-22',
          availableStockCount: 61
        },
        {
          date: '2019-02-23',
          availableStockCount: 61
        },
        {
          date: '2019-02-24',
          availableStockCount: 68
        },
        {
          date: '2019-02-25',
          availableStockCount: 69
        },
        {
          date: '2019-02-26',
          availableStockCount: 70
        },
        {
          date: '2019-02-27',
          availableStockCount: 70
        },
        {
          date: '2019-02-28',
          availableStockCount: 71
        },
        {
          date: '2019-03-01',
          availableStockCount: 72
        },
        {
          date: '2019-03-02',
          availableStockCount: 72
        },
        {
          date: '2019-03-03',
          availableStockCount: 73
        },
        {
          date: '2019-03-04',
          availableStockCount: 74
        },
        {
          date: '2019-03-05',
          availableStockCount: 74
        },
        {
          date: '2019-03-06',
          availableStockCount: 74
        },
        {
          date: '2019-03-07',
          availableStockCount: 74
        },
        {
          date: '2019-03-08',
          availableStockCount: 72
        },
        {
          date: '2019-03-09',
          availableStockCount: 72
        },
        {
          date: '2019-03-10',
          availableStockCount: 74
        },
        {
          date: '2019-03-11',
          availableStockCount: 74
        },
        {
          date: '2019-03-12',
          availableStockCount: 74
        }
      ]
    }
  },
  methods: {
    wrapStockData () {
      this.stock.forEach((item) => {
        Vue.set(item, 'isActive', false)
      })
    },
    wrapRoomData () {
      this.roomList.forEach((room) => {
        room.beds.forEach((bed) => {
          Vue.set(bed, 'isActive', false)
        })
      })
    }
  },
  mounted () {
    this.wrapStockData()
    this.wrapRoomData()
  }
}
</script>
