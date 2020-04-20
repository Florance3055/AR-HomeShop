//index.js

import Toast from '../../vant/toast/toast' //导入Toast组件

Page({
  data: {
    value: '',
    icons: [{
        name: "沙发",
        icon: "../../icons/shafa.png"
      },
      {
        name: "电视机",
        icon: "../../icons/SYdianshigui.png"
      },
      {
        name: "床",
        icon: "../../icons/allproduct/chuang.png"
      },
      {
        name: "收纳柜",
        icon: "../../icons/shounagui.png"
      },
      {
        name: "衣柜",
        icon: "../../icons/yigui.png"
      },
      {
        name: "玩偶",
        icon: "../../icons/allproduct/wanou.png"
      },
      {
        name: "储物柜",
        icon: "../../icons/SYczy.png"
      },
      {
        name: "桌子",
        icon: "../../icons/zhuozi.png"
      }
    ],
    content: [{
        image: "../../icons/banner.png",
        name: "中式典雅大气阳台",
        tourl: ""
      },
      {
        image: "../../icons/index/keting.png",
        name: "高压轻奢舒适客厅",
        tourl: ""
      },
      {
        image: "../../icons/index/weishengjian.png",
        name: "明亮大气卫生间",
        tourl: ""
      }
    ]
  },

  onChange: function(event) { //输入框监听事件
    this.setData({
      value: event.detail
    })
  },

  onSearch: function() { //输入框信息提示
    Toast('搜索' + this.data.value)
  },

  toGoods: function(event) { //利用ES6结构获取category跳转到指定category页面
    const {
      category
    } = event.currentTarget.dataset
    wx.navigateTo({
      url: '../goods/goods?category=' + category
    })
  },

  toRecognition: function() { //跳转至recognition页面
    wx.navigateTo({
      url: '/ar_package/pages/recognition/recognition'
    })
  }

})