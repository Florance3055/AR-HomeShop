//recharge.js
Page({
  data: {
    ////////// 增加的 //////////
    money: '',
    ////////// 增加的 //////////
    radio: '1',
    pay: [{
        content: "支付宝支付",
        name: "1",
        src: "../../icons/zhifuZFB.png"
      },
      {
        content: "微信支付",
        name: "2",
        src: "../../icons/zhifuWX.png"
      },
      {
        content: "银联支付",
        name: "3",
        src: "../../icons/zhifuZGYH.png"
      }
    ],
    clickid: 1,
    newprice: 100,
    recharge: [{
      id: 0,
      title: "充值150元",
      // subtitle: "送100元",
      price: 150
    }, {
      id: 1,
      title: "充值100元",
      // subtitle: "送50元",
      price: 100
    }, {
      id: 2,
      title: "充值50元",
      // subtitle: "送20元",
      price: 50
    }, {
      id: 3,
      title: "充值20元",
      // subtitle: "",
      price: 20
    }]
  },

  addUserMoney: function() {
    console.log("充值" + this.data.newprice + "元")
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'addUserMoney',
      // 传递给云函数的event参数
      data: {
        newprice: this.data.newprice
      }
    }).then(res => {

      wx.showToast({
        title: '充值成功',
        icon: 'success',
        duration: 2000
      })

      wx.reLaunch({
        url: '../my/my'
      })

    }).catch(err => {
      wx.showToast({
        title: '充值失败',
        icon: 'fail',
        duration: 2000
      })
      console.log("充值失败", err)
    })
  },

  onChange: function(event) { //监听支付方式单选框选择
    this.setData({
      radio: event.detail
    })
  },

  onClick: function(event) { //监听支付方式点击选择
    const {
      name
    } = event.currentTarget.dataset
    this.setData({
      radio: name
    })
  },

  clickPrice: function(event) { //监听金额选择
    const {
      id
    } = event.currentTarget.dataset
    this.setData({
      clickid: id,
      newprice: this.data.recharge[id].price
    })
  }

})