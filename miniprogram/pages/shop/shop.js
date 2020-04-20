//shop.js
Page({
  data: {
    checkedall: false,
    allprice: 0.00,
    content: [],
    checkContent: [],
    result: []
  },

  onShow: function() {
    ///////// 页面加载更新余额 //////////
    this.updateUserCart()
  },

  updateUserCart: function() {
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'updateUserCart'
    }).then(res => {

      console.log(res.result)

      this.setData({
        content: res.result.data
      })

    }).catch(err => {
      console.log("获取失败", err)
    })
  },

  onClickButton: function() { //监听确认订单按钮点击，跳转至check-order页面
    var contents = JSON.stringify(this.data.checkContent)
    if (this.data.checkContent.length == 0) {
      wx.showToast({
        title: '请选择商品',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.navigateTo({
        url: "../check-order/check-order?contents=" + contents
      })
    }
  },

  onChange: function(event) { //监听多选框
    this.setData({
      result: event.detail
    })
    let pageData = event.detail
    let priceNum = 0
    let checkC = []
    for (let index in pageData) {
      priceNum += this.data.content[pageData[index]].price * this.data.content[pageData[index]].num
      checkC[index] = this.data.content[pageData[index]]
    }
    this.setData({
      allprice: priceNum,
      checkContent: checkC,
    })

    if (this.data.result.length == this.data.content.length) {
      this.setData({
        checkedall: true
      })
    } else {
      this.setData({
        checkedall: false
      })
    }
  },

  toDetail: function(event) { //监听商品点击，跳转至detail页面
    const {
      name
    } = event.currentTarget.dataset
    const {
      icon
    } = event.currentTarget.dataset
    const {
      detail
    } = event.currentTarget.dataset
    const {
      price
    } = event.currentTarget.dataset
    wx.navigateTo({
      url: '../detail/detail?name=' + name + '&icon=' + icon + '&detail=' + detail + '&price=' + price
    })
  },
  noop: function() {},

  checkAll: function(event) { //监听全选点击
    if (this.data.checkedall == true) {
      this.setData({
        result: [],
        checkedall: false,
        allprice: 0
      })
    } else {
      var all = []
      var price = 0
      for (var index in this.data.content) {
        all.push(index)
        price += this.data.content[index].price * this.data.content[index].num
      }
      this.setData({
        result: all,
        checkedall: true,
        allprice: price,
        checkContent: this.data.content,
      })
    }
  },

  numChange: function(event) { //监听商品数量变化
    let Nindex = event.currentTarget.dataset.cells
    let Nnum = event.detail
    let con = this.data.content
    con[Nindex].num = Nnum
    this.setData({
      content: con
    })
    let pageData = this.data.result
    let priceNum = 0
    for (let index in pageData) {
      priceNum += this.data.content[pageData[index]].price * this.data.content[pageData[index]].num
    }

    this.setData({
      allprice: priceNum
    })
  }
})