// pages/recognition/recognition.js
import upng from '../../libs/UPNG.js'

var app = getApp();

Page({
  data: {
    height: '360',
    width: '20',
    status: false,
    scanStatus: 'none',
    msg: "请点击识别图片",
    src: '',
    listener: null,
    isReuqest: false,
    canvasWidth: '10',
    canvasHeight: '10',
  },

  onLoad: function(options) {
    this.ctx = wx.createCameraContext();

    wx.getSystemInfo({
      success: res => {
        this.setData({
          height: res.windowHeight * 0.8,
          width: res.windowWidth
        });
      }
    });


  },

  onReady: function() {
    this.takePhoto()
    // setTimeout(, 1000);

  },

  stopScan: function() {
    this.setData({
      scanStatus: 'none'
    });
  },

  onShow: function() {
    this.setData({
      msg: '请点击识别图片'
    });
  },

  error: function(e) {
    this.setData({
      msg: '打开摄像头失败，请点击“立即体验'
    });
  },


  searchPhoto: function(imageBase64) {
    let that = this;

    wx.request({
      url: 'https://cn1-crs.easyar.com:8443/search',
      data: {
        image: imageBase64
      },
      header: {
        'Authorization': '+cE6ZuzcnKHT53ffVuFTKSIwKFEkOW23LOQ88MWl8aghg751+cj+hKJLDk+fSHnL/agvx9eBSjXl0QmXg+B2Jg==',
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success(res) {
        that.setData({
          isReuqest: false
        });

        if (res.data.statusCode == 0) {
          that.listener.stop();
          // console.log(res.data.result.target.name)
          app.globalData.obj_url = res.data.result.target.name;
          that.setData({
            msg: '识别成功'
          });
          setTimeout(() => {
            console.info('go to webar');
            wx.navigateTo({
              url: '../obj/index'
            });
          }, 500);
        }
      },

      fail(err) {
        console.log(err)
        that.status = false;
        that.setData({
          msg: '识别失败，请点击重试' + JSON.stringify(err),
          isReuqest: false
        });
      }
    })
  },

  transformArrayBufferToBase64: function(frame) {
    const data = new Uint8ClampedArray(frame.data);
    this.setData({
      isReuqest: true
    });
    let pngData = upng.encode([frame.data], frame.width, frame.height, 16, 0);
    let base64 = wx.arrayBufferToBase64(pngData);
    setTimeout(() => {
      this.searchPhoto(base64)
    }, 5000);

  },

  takePhoto: function(e) {
    if (this.status) return;
    this.status = true;
    const context = wx.createCameraContext()
    this.listener = context.onCameraFrame((frame) => {
      if (!this.data.isReuqest) {
        this.transformArrayBufferToBase64(frame);
      }
    });
    this.listener.start({
      success: () => {
        console.log('监听成功')
      },
      fail: (err) => {
        console.log('监听失败')
        console.log(err)
      }
    })
  }
})