//my.js
import Dialog from '../../vant/dialog/dialog'
const app = getApp()

Page({
  data: {
    userOpenId: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    avatarUrl: '../../icons/touxiang.png',
    showAddress: false,
    showMoney: false,
    workicon1: [{
        active: 1,
        name: "待付款",
        icon: '../../icons/daifukuan.png',
        click: "toMyOrder"
      },
      {
        active: 2,
        name: "待发货",
        icon: "../../icons/daifahuo.png",
        click: "toMyOrder"
      },
      {
        active: 2,
        name: "待收货",
        icon: "../../icons/daishouhuo.png",
        click: "toMyOrder"
      },
      {
        active: 3,
        name: "待评价",
        icon: "../../icons/daipingjia.png",
        click: "toMyOrder"
      },
      {
        active: 4,
        name: "退换货",
        icon: "../../icons/tuihuanhuo.png",
        click: "toMyOrder"
      }
    ],

    workicon2: [{
        name: "收藏",
        icon: "../../icons/shoucang.png",
        click: "toFavorite"
      },
      {
        name: "优惠券",
        icon: "../../icons/youhui.png",
        click: "toCoupon"
      },
      {
        name: "礼物",
        icon: "../../icons/liwu.png",
        click: "toGift"
      },
      {
        name: "红包",
        icon: "../../icons/hongbao.png",
        click: "toRedPacket"
      },
      {
        name: "收货地址",
        icon: "../../icons/shouhuodizhi.png",
        click: "toAddress"
      },
      {
        name: "账户安全",
        icon: "../../icons/zhanghuanquan.png",
        click: "toSecurity"
      },
      {
        name: "银行卡",
        icon: "../../icons/yinhangka.png",
        click: "toBankcard"
      },
      {
        name: "帮助",
        icon: "../../icons/bangzhu.png",
        click: "toHelp"
      }
    ],

    workicon3: [{
        name: "积分",
        num: 0,
        icon: "",
        click: ""
      },
      {
        name: "佣金",
        num: 0,
        icon: "",
        click: ""
      },
      {
        name: "余额",
        num: 0,
        icon: "",
        click: ""
      },
      {
        name: "充值",
        icon: "../../icons/chongzhi.png",
        click: "toRecharge"
      }
    ]
  },

  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })

    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  onShow: function() {
    ///////// 页面加载更新余额 //////////
    this.updateUserMoney()
  },

  getUserInfo: function(event) { //获取用户信息
    app.globalData.userInfo = event.detail.userInfo
    console.log(event.detail)
    console.log(event.detail.userInfo)
    if (event.detail.userInfo != undefined) {
      this.setData({
        userInfo: event.detail.userInfo,
        hasUserInfo: true
      })

      wx.cloud.callFunction({
        name: "addUserBasicInfo",
        data: {
          avatarUrl: app.globalData.userInfo.avatarUrl,
          city: app.globalData.userInfo.city,
          country: app.globalData.userInfo.country,
          gender: app.globalData.userInfo.gender,
          language: app.globalData.userInfo.language,
          nickName: app.globalData.userInfo.nickName,
          province: app.globalData.userInfo.province,
          phone: '',
          address: '',
          postcode: ''
        },
        success: function(res) {
          console.log(res)
        },
        fail(res) {
          console.log("获取失败", res)
        }
      })
    } else {
      console.log("登录失败")
    }

  },

  updateUserMoney: function() {
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'updateUserMoney'
    }).then(res => {

      console.log(res.result)

      let price = 'workicon3[2].num'
      this.setData({
        [price]: res.result
      })

    }).catch(err => {
      console.log("获取失败", err)
    })
  },

  toRedPacket: function() { //跳转至red-packet页面
    wx.navigateTo({
      url: '../red-packet/red-packet'
    })
  },

  toAddress: function() { //跳转至address页面
    wx.navigateTo({
      url: '../address/address'
    })
  },

  toHelp: function() { //跳转至help页面
    wx.navigateTo({
      url: '../help/help'
    })
  },

  toBankcard: function() { //跳转至bankcard页面
    wx.navigateTo({
      url: '../bankcard/bankcard'
    })
  },

  toFavorite: function() { //跳转至favorite页面
    wx.navigateTo({
      url: '../favorite/favorite'
    })
  },

  toSecurity: function() { //跳转至security页面
    wx.navigateTo({
      url: '../security/security'
    })
  },

  toGift: function() { //跳转至gifte页面
    wx.navigateTo({
      url: '../gift/gift'
    })
  },

  toCoupon: function() { //跳转至coupon页面
    wx.navigateTo({
      url: '../coupon/coupon'
    })
  },

  toMyOrder: function(event) { //跳转至my-order页面
    const {
      active
    } = event.currentTarget.dataset
    wx.navigateTo({
      url: "../my-order/my-order?active=" + active
    })
  },

  toRecharge: function() { //跳转至recharge页面
    wx.navigateTo({
      url: '../recharge/recharge'
    })
  },

  toMyInfo: function() { //跳转至my-info页面
    wx.navigateTo({
      url: '../my-info/my-info'
    })
  },

})

//////充值////////
// onShowMoney() {
//   this.setData({
//     showMoney: true
//   })
// },
// onCloseMoney() {
//   this.setData({
//     showMoney: false
//   })
// },
// onConfirmMoney() {
//   this.setData({
//     showMoney: false
//   })
// },
//////充值////////


// onShowAddress() {
//   this.setData({
//     showAddress: true
//   })
// },

// onCloseAddress() {
//   this.setData({
//     showAddress: false
//   })
// },

// onConfirmAddress: function (event) {
//   console.log(this.data.phone)
//   console.log(this.data.address)
//   if ((this.data.phone == undefined) || (this.data.address == undefined)) {
//     Dialog.alert({
//       message: '请填写完整信息'
//     }).then(() => {
//       // on close
//     })
//   } else {
//     ////////// 修改的 //////////
//     this.addUserAnotherInfo()
//     ////////// 修改的 //////////
//   }
// },

// changePhone(event) {
//   console.log(event.detail)
//   this.setData({
//     phone: event.detail
//   })
// },

// changeAddress(event) {
//   console.log(event.detail)
//   this.setData({
//     address: event.detail
//   })
// },

////////// 增加的 //////////
// changeMoney(event) {
//   console.log(event.detail)
//   this.setData({
//     money: event.detail
//   })
// },


// getLastRecord() {
//   wx.cloud.callFunction({
//     // 要调用的云函数名称
//     name: 'getLastRecord'
//   }).then(res => {

//     console.log(res.result)

//     if (res.result.phone) {
//       this.setData({
//         rightInfo: '手机号:' + res.result.phone + ' | ' + '地址:' + res.result.address + ' | ' + '金额:' + res.result.money
//       })
//     } else {
//       this.setData({
//         rightInfo: res.result
//       })
//     }

//     console.log(res.result.money)
//     if (res.result.money != undefined) {
//       let workicon = this.data.workicon3
//       workicon[2].num = res.result.money
//       this.setData({
//         workicon3: workicon
//       })
//     }

//   }).catch(err => {
//     console.log("获取失败", err)
//   })

// },
////////// 增加的 //////////