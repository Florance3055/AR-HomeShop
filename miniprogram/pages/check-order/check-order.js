//check-order.js
// import { fail } from "assert"

const DB = wx.cloud.database().collection('user_cart')
Page({
  data: {
    ////////// 增加的 //////////
    money: '',
    now_money: '',
    ////////// 增加的 //////////
    allprice: "0",
    recipient: "xxx",
    coupon: "未使用",
    delivery: "快递配送",
    freight: 0,
    content: [{
        index: 0,
        name: "沙发",
        detail: "大沙发大沙发",
        icon: "../../icons/shafa.png",
        url: "",
        num: 1,
        coupon: "未使用",
        freight: 0,
        price: 1050.00,
        delivery: "快递配送"
      },
      {
        index: 1,
        name: "桌子",
        detail: "大桌子小桌子",
        icon: "../../icons/zhuozi.png",
        url: "",
        num: 1,
        coupon: "未使用",
        freight: 0,
        price: 50.00,
        delivery: "快递配送"
      },
      {
        index: 2,
        name: "衣柜",
        detail: "大衣柜大衣柜大大大大大大",
        icon: "../../icons/yigui.png",
        url: "",
        coupon: "未使用",
        num: 1,
        freight: 0,
        price: 105.00,
        delivery: "快递配送"
      }
    ],
    user_info: []

  },

  onLoad: function(option) {
    var contents = JSON.parse(option.contents)
    let price = 0
    for (let i in contents) {
      price += contents[i].price * contents[i].num
    }
    this.setData({
      content: contents,
      allprice: price
    })

  },

  onShow: function() {
    ///////// 页面加载更新余额 //////////
    this.updateUserMoney()
    this.getUserBasicInfo()
  },

  addUserMoney: function() {
    console.log("消费" + this.data.allprice + "元")
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'addUserMoney',
      // 传递给云函数的event参数
      data: {
        newprice: -this.data.allprice
      }
    }).then(res => {

      // wx.showToast({
      //   title: '购买成功',
      //   icon: 'success',
      //   duration: 2000
      // })

    }).catch(err => {
      wx.showToast({
        title: '购买失败',
        icon: 'fail',
        duration: 2000
      })
      console.log("购买失败", err)
    })

    wx.reLaunch({
      url: '../payment/payment'
    })

  },

  updateUserMoney: function() {
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'updateUserMoney'
    }).then(res => {

      console.log(res.result)

      this.setData({
        now_money: res.result
      })

    }).catch(err => {
      console.log("获取失败", err)
    })
  },

  checkMoneyEnough: function() {
    if (this.data.now_money >= this.data.allprice) {
      this.addUserMoney()

      this.data.content.forEach(element => {
        console.log(element.name)
        DB.doc(element._id).remove({
          success: res => {
            console.log(res)
          },
          fail: err => {
            console.error(err)
          }
        })
      })


    } else {
      wx.showToast({
        title: '余额不足',
        icon: 'fail',
        duration: 2000
      })
    }

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
})