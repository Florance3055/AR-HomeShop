//payment.js
Page({
  data: {
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
    ]
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

  toCart: function(){
    wx.reLaunch({
      url: '../my/my'
    })
  }
})