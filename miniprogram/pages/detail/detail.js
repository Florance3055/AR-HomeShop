//detail.js
Page({
  data: {
    show: false,
    index: 0,
    name: "吊灯",
    detail: "41-50W",
    icon: "../../icons/diaodeng.png",
    num: 1,
    price: 300,
    size: "LB8134",
    activity: "1元预定 6折特权",
    iconUrl: "../../icons/dagou.png",
    icons: [
      "自营销售",
      "质量保证",
      "七天无理由退货"
    ],
    shareIcon: "../../icons/share.png",
    arIcon: "../../icons/seeAR.png",
    // banner
    imgUrls: [
      "../../icons/diaodeng.png",
      "../../icons/diaodeng.png",
      "../../icons/diaodeng.png",
      "../../icons/diaodeng.png"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    // 商品详情介绍
    detailImg: [
      "../../icons/diaodeng.png",
      "../../icons/diaodeng.png"
    ]

  },

  onLoad: function(option) {
    //console.log(option.query)
    wx.setNavigationBarTitle({
      title: option.name,
    })
    this.setData({
      name: option.name,
      icon: option.icon,
      detail: option.detail,
      price: option.price,
    })
    let imgs = []
    let deatilimg = []
    for (let i in this.data.imgUrls) {
      imgs = imgs.concat(option.icon)
    }
    for (let i in this.data.detailImg) {
      deatilimg = deatilimg.concat(this.data.icon)
    }
    this.setData({
      imgUrls: imgs,
      detailImg: deatilimg
    })
  },

  onClickButton1: function() { //加入购物车
    wx.cloud.callFunction({
      name: "addUserCart",
      data: {
        index: this.data.index,
        name: this.data.name,
        detail: this.data.detail,
        icon: this.data.icon,
        num: this.data.num,
        price: this.data.price
      },
      success: function(res) {
        console.log(res)
        wx.showToast({
          title: '加入购物车成功',
          icon: 'success',
          duration: 1000
        })
        // this.setData({
        //   show: true
        // })
      },
      fail(res) {
        console.log("加入购物车失败", res)
      }
    })
  },

  previewImage: function(event) { //预览图片
    var current = event.target.dataset.src

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },

  toShop: function() {
    wx.switchTab({ // 跳到购物车
      url: '../shop/shop'
    })
  },

  onClickButton2: function() { // 立即购买
    // wx.showToast({
    //   title: '购买成功',
    //   icon: 'success',
    //   duration: 2000
    // })
    let good = [{
      index: this.data.index,
      name: this.data.name,
      detail: this.data.detail,
      icon: this.data.icon,
      num: this.data.num,
      price: this.data.price
    }]
    var contents = JSON.stringify(good)
    wx.navigateTo({
      url: "../check-order/check-order?contents=" + contents
    })
  },

  //客服
  onClickIcon: function() {
    wx.showToast({
      title: '点击客服',
      icon: 'success',
      duration: 2000
    })
  }
})