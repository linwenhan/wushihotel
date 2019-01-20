//app.js
App({
  imageUrl: "cloud://wushihotel-0a4e02.7775-wushihotel-0a4e02/",
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
