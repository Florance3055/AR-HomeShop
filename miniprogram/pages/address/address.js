//address.js

Page({
  data: {
    addAddress: "",
    addPhone: "",
    addName: "",
    changeAddress: "",
    changePhone: "",
    changeName: "",
    defaultID: '0',
    addressList: [{
      id: 0,
      address: "福建省 漳州市 龙海市漳州经济开发区厦门大学嘉庚学院北区",
      phone: "17350222222",
      name: "XXX1"
    }, {
      id: 1,
      address: "福建省 漳州市 龙海市漳州经济开发区厦门大学嘉庚学院南区",
      phone: "17350111111",
      name: "XXX2"
    }]
  },

  onChange: function(event) { //监听点击事件，改变默认地址
    this.setData({
      defaultID: event.detail
    })
  },

  toDelete: function(event) { //监听点击事件，删除地址
    const {
      id
    } = event.currentTarget.dataset
    wx.showModal({
      title: '提示',
      content: '是否删除地址',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#937467',
      success: (result) => {
        let that = this
        if (result.confirm) {
          var addressL = that.data.addressList
          addressL.splice(id, 1)
          that.setData({
            addressList: addressL
          })
        }
      },
      fail: () => {},
      complete: () => {}
    })
  }
})