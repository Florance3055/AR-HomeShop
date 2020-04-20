//my-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_info: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onShow: function() {
    this.getUserBasicInfo()
  },

  getUserBasicInfo: function() {
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'getUserBasicInfo'
    }).then(res => {

      console.log(res.result)

      // let price = 'workicon3[2].num'
      this.setData({
        user_info: res.result
      })

    }).catch(err => {
      console.log("获取失败", err)
    })

  },

  // updateUserBasicinfo: function () {


  // },

  phone_input: function(e) {
    console.log(e.detail)
    this.setData({
      phone: e.detail
    })
  },

  address_input: function(e) {
    console.log(e.detail)
    this.setData({
      address: e.detail
    })
  },

  postcode_input: function(e) {
    console.log(e.detail)
    this.setData({
      postcode: e.detail
    })
  },

  submit: function() {
    console.log(this.data.phone)
    wx.cloud.callFunction({
      name: "addUserBasicInfo",
      data: {
        avatarUrl: this.data.user_info.avatarUrl,
        city: this.data.user_info.city,
        country: this.data.user_info.country,
        gender: this.data.user_info.gender,
        language: this.data.user_info.language,
        nickName: this.data.user_info.nickName,
        province: this.data.user_info.province,
        phone: this.data.phone,
        address: this.data.address,
        postcode: this.data.postcode
      },
      success: function(res) {
        console.log(res)
        wx.showToast({
          title: '修改成功',
          icon: 'success',
          duration: 2000
        })
        wx.reLaunch({
          url: '../my/my',
        })
      },
      fail(res) {
        console.log("获取失败", res)
      }
    })



  }
})