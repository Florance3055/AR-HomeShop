//good.js
Page({
  data: {
    NavigationBarTitle: "",
    product: [],
    locker: [{
      name: '储物柜',
      icon: '../../icons/allproduct/chuwugui.png',
      detail: '140*70cm',
      price: 50
    }],
    bed: [{
      name: '床',
      icon: '../../icons/allproduct/chuang.png',
      detail: '140*70cm',
      price: 50
    }],
    mirror: [{
      name: '镜子',
      icon: '../../icons/allproduct/jingzi.png',
      detail: '140*70cm',
      price: 50
    }],
    sofa: [{
      name: '沙发',
      icon: '../../icons/allproduct/shafa.png',
      detail: '140*70cm',
      price: 50
    }],
    lamp: [{
      name: '灯具',
      icon: '../../icons/allproduct/dengju.png',
      detail: '140*70cm',
      price: 50
    }],
    tableware: [{
      name: '餐具',
      icon: '../../icons/allproduct/canju.png',
      detail: '140*70cm',
      price: 50,
    }],
    television: [{
      name: '电视机',
      icon: '../../icons/allproduct/dianshi.png',
      detail: '140*70cm',
      price: 50
    }],
    cookern: [{
      name: '厨具',
      icon: '../../icons/allproduct/chuju.png',
      detail: '140*70cm',
      price: 50
    }],
    doll: [{
      name: '玩偶',
      icon: '../../icons/allproduct/wanou.png',
      detail: '140*70cm',
      price: 50
    }],
    desk: [{
        name: '桌子1',
        icon: '../../icons/goods/zhuozi1.png',
        detail: '140*70cm',
        price: 50
      },
      {
        name: '桌子2',
        icon: '../../icons/goods/zhuozi2.png',
        detail: '140*70cm',
        price: 50
      },
      {
        name: '桌子3',
        icon: '../../icons/goods/zhuozi3.png',
        detail: '140*70cm',
        price: 50
      },
      {
        name: '桌子4',
        icon: '../../icons/goods/zhuozi4.png',
        detail: '140*70cm',
        price: 50
      }
    ],
    closet: [{
      name: '衣柜',
      icon: '../../icons/allproduct/yigui.png',
      detail: '140*70cm',
      price: 50
    }],
    box: [{
      name: '收纳柜',
      icon: '../../icons/allproduct/shounagui.png',
      detail: '140*70cm',
      price: 50
    }],
    livingroom: [{
      name: '客厅',
      icon: '../../icons/allroom/keting.png',
      detail: '140*70cm',
      price: 50
    }],
    bedroom: [{
      name: '卧室',
      icon: '../../icons/allroom/woshi.png',
      detail: '140*70cm',
      price: 50
    }],
    study: [{
      name: '书房',
      icon: '../../icons/allroom/shufang.png',
      detail: '140*70cm',
      price: 50
    }],
    showerroom: [{
      name: '浴室',
      icon: '../../icons/allroom/yushi.png',
      detail: '140*70cm',
      price: 50
    }],
    veranda: [{
      name: '阳台',
      icon: '../../icons/allroom/yangtai.png',
      detail: '140*70cm',
      price: 50
    }],
    kitchen: [{
      name: '厨房',
      icon: '../../icons/allroom/chufang.png',
      detail: '140*70cm',
      price: 50
    }]
  },

  onLoad: function(option) {
    //console.log(option.query)
    wx.setNavigationBarTitle({
      title: option.category
    })

    switch (option.category) {
      case "储物柜":
        this.setData({
          product: this.data.locker
        })
        break
      case "床":
        this.setData({
          product: this.data.bed
        })
        break
      case "镜子":
        this.setData({
          product: this.data.mirror
        })
        break
      case "沙发":
        this.setData({
          product: this.data.sofa
        })
        break
      case "灯具":
        this.setData({
          product: this.data.lamp
        })
        break
      case "餐具":
        this.setData({
          product: this.data.tableware
        })
        break
      case "电视机":
        this.setData({
          product: this.data.television
        })
        break
      case "厨具":
        this.setData({
          product: this.data.cookern
        })
        break
      case "玩偶":
        this.setData({
          product: this.data.doll
        })
        break
      case "桌子":
        this.setData({
          product: this.data.desk
        })
        break
      case "衣柜":
        this.setData({
          product: this.data.closet
        })
        break
      case "收纳柜":
        this.setData({
          product: this.data.box
        })
        break
      case "客厅":
        this.setData({
          product: this.data.livingroom
        })
        break
      case "卧室":
        this.setData({
          product: this.data.bedroom
        })
        break
      case "书房":
        this.setData({
          product: this.data.study
        })
        break
      case "浴室":
        this.setData({
          product: this.data.showerroom
        })
        break
      case "阳台":
        this.setData({
          product: this.data.veranda
        })
        break
      case "厨房":
        this.setData({
          product: this.data.kitchen
        })
        break
    }
  },

  toDetail: function(event) { //利用ES6结构获取参数跳转到指定detail页面
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

})