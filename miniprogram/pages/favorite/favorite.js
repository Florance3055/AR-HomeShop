//favorite.js
Page({
  data: {
    favoriteSum: 0
  },

  toCategory: function() { //跳转到分类界面
    wx.switchTab({
      url: '../category/category'
    })
  }
})