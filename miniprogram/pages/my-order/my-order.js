//my-order.js
Page({
  data: {
    active: 0,
    allorder: [{
      id: 1,
      msg: "等待买家付款",
      product: [{
        id: 1,
        img: '../../icons/my-order/diaodeng.png'
      }, {
        id: 2,
        img: '../../icons/my-order/zhuozi1.png'
      }, {
        id: 3,
        img: '../../icons/my-order/zhuozi2.png'
      }],
      payStatus: false,
      allprice: 150.00,
      express: 0.00
    }, {
      id: 2,
      msg: "等待卖家发货",
      product: [{
        id: 1,
        img: '../../icons/my-order/diaodeng.png'
      }, {
        id: 2,
        img: '../../icons/my-order/zhuozi1.png'
      }, {
        id: 3,
        img: '../../icons/my-order/zhuozi2.png'
      }],
      payStatus: true,
      allprice: 150,
      express: 0
    }],

    allstay: [{
      id: 1,
      msg: "等待买家付款",
      product: [{
        id: 1,
        img: '../../icons/my-order/diaodeng.png'
      }, {
        id: 2,
        img: '../../icons/my-order/zhuozi1.png'
      }, {
        id: 3,
        img: '../../icons/my-order/zhuozi2.png'
      }],
      payStatus: false,
      allprice: 150.00,
      express: 0.00
    }],
    allpay: [{
      id: 1,
      msg: "等待卖家发货",
      product: [{
        id: 1,
        img: '../../icons/my-order/diaodeng.png'
      }, {
        id: 2,
        img: '../../icons/my-order/zhuozi1.png'
      }, {
        id: 3,
        img: '../../icons/my-order/zhuozi2.png'
      }],
      payStatus: true,
      allprice: 150.00,
      express: 0.00
    }],
    allfinish: [{
      id: 1,
      msg: "订单已完成",
      product: [{
        id: 1,
        img: '../../icons/my-order/diaodeng.png'
      }, {
        id: 2,
        img: '../../icons/my-order/zhuozi1.png'
      }, {
        id: 3,
        img: '../../icons/my-order/zhuozi2.png'
      }],
      payStatus: true,
      allprice: 150.00,
      express: 0.00
    }],
    allcancel: [{
      id: 1,
      msg: "订单已取消",
      product: [{
        id: 1,
        img: '../../icons/my-order/diaodeng.png'
      }, {
        id: 2,
        img: '../../icons/my-order/zhuozi1.png'
      }, {
        id: 3,
        img: '../../icons/my-order/zhuozi2.png'
      }],
      payStatus: true,
      allprice: 150.00,
      express: 0.00
    }]
  },

  onLoad: function(option) {
    var active = JSON.parse(option.active)
    this.setData({
      active: active,
    })
  }
})