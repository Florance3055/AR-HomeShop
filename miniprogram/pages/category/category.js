// category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        // 导航名称
        text: '新品',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: []
      },
      {
        text: '所有商品',
        disabled: false,
        children: []
      },
      {
        text: '所有房间',
        disabled: false,
        children: []
      }
    ],

    //当前页展示的商品
    show: [],

    //新品
    newProduct: [{
        name: '桌子',
        image: '../../icons/zhuozi.png',
        url: ''
      },
      {
        name: '衣柜',
        image: '../../icons/yigui.png',
        url: ''
      },
      {
        name: '收纳柜',
        image: '../../icons/shounagui.png',
        url: ''
      },
      {
        name: '沙发',
        image: '../../icons/shafa.png',
        url: ''
      }
    ],

    //所有商品
    allProduct: [{
        name: '储物柜',
        image: '../../icons/allproduct/chuwugui.png',
        url: ''
      },
      {
        name: '床',
        image: '../../icons/allproduct/chuang.png',
        url: ''
      },
      {
        name: '镜子',
        image: '../../icons/allproduct/jingzi.png',
        url: ''
      },
      {
        name: '沙发',
        image: '../../icons/allproduct/shafa.png',
        url: ''
      },
      {
        name: '灯具',
        image: '../../icons/allproduct/dengju.png',
        url: ''
      },
      {
        name: '餐具',
        image: '../../icons/allproduct/canju.png',
        url: ''
      },
      {
        name: '电视机',
        image: '../../icons/allproduct/dianshi.png',
        url: ''
      },
      {
        name: '厨具',
        image: '../../icons/allproduct/chuju.png',
        url: ''
      },
      {
        name: '玩偶',
        image: '../../icons/allproduct/wanou.png',
        url: ''
      },
      {
        name: '桌子',
        image: '../../icons/allproduct/zhuozi.png',
        url: ''
      },
      {
        name: '衣柜',
        image: '../../icons/allproduct/yigui.png',
        url: ''
      },
      {
        name: '收纳柜',
        image: '../../icons/allproduct/shounagui.png',
        url: ''
      }
    ],

    //所有房间
    allRoom: [{
        name: '客厅',
        image: '../../icons/allroom/keting.png',
        url: ''
      },
      {
        name: '卧室',
        image: '../../icons/allroom/woshi.png',
        url: ''
      },
      {
        name: '书房',
        image: '../../icons/allroom/shufang.png',
        url: ''
      },
      {
        name: '浴室',
        image: '../../icons/allroom/yushi.png',
        url: ''
      },
      {
        name: '阳台',
        image: '../../icons/allroom/yangtai.png',
        url: ''
      },
      {
        name: '厨房',
        image: '../../icons/allroom/chufang.png',
        url: ''
      }
    ],
    mainActiveIndex: 0,
  },

  onLoad: function(options) { //生命周期函数--监听页面加载
    this.setData({
      show: this.data.newProduct
    })
  },

  onClickNav: function({
    detail = {}
  }) { //监听左侧导航点击，切换展示的商品
    this.setData({
      mainActiveIndex: detail.index || 0,
    })
    if (detail.index == 1) {
      this.setData({
        show: this.data.allProduct
      })
    } else if (detail.index == 2) {
      this.setData({
        show: this.data.allRoom
      })
    } else {
      this.setData({
        show: this.data.newProduct
      })
    }
  },

  toGoods: function(event) { //利用ES6结构获取category跳转到指定category页面
    const {
      category
    } = event.currentTarget.dataset
    wx.navigateTo({
      url: '../goods/goods?category=' + category
    })
  }



})