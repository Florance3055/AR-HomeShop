//bankcard.js
Page({
  data: {
    nowId: 0,
    bankList: [{
      id: 0,
      image: "../../icons/bankcard/zhaoshang.png",
      image1: "../../icons/bankcard/zhaoshang1.png"
    }, {
      id: 1,
      image: "../../icons/bankcard/jianshe.png",
      image1: "../../icons/bankcard/jianshe1.png"
    }, {
      id: 2,
      image: "../../icons/bankcard/rongye.png",
      image1: "../../icons/bankcard/rongye1.png"
    }, {
      id: 3,
      image: "../../icons/bankcard/gongshang.png",
      image1: "../../icons/bankcard/gongshang1.png"
    }]
  },

  onClick: function(event) { //监听点击事件，切换银行卡
    const {
      id
    } = event.currentTarget.dataset
    this.setData({
      nowId: id
    })
  }
})