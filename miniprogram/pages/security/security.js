//security.js
Page({
  data: {
    showPhone: false,
    patchPhone: '',
    phone: '17350000000',
    loginPW: '',
    withdrawPW: ''
  },

  onShowPhone: function() { //监听更换手机点击，展示手机号码输入弹窗
    this.setData({
      showPhone: true,
      patchPhone: this.data.phone
    })
  },

  onClosePhone: function() { //关闭弹窗
    this.setData({
      showPhone: false
    })
  },

  onConfirmPhone: function() { //确认弹窗
    this.setData({
      showPhone: false,
      phone: this.data.patchPhone
    })
  },

  changePhone: function(event) { //监听弹窗输入框
    this.setData({
      patchPhone: event.detail
    })
  },
})