// pages/house/house.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagelist: [
      {
        id: '0',
        imageSrc: '../image/main_0.jpg'
      },
      {
        id: '1',
        imageSrc: '../image/main_1.jpg'
      },
      {
        id: '2',
        imageSrc: '../image/main_2.jpg'
      },
      {
        id: '3',
        imageSrc: '../image/main_3.jpg'
      },
      {
        id: '4',
        imageSrc: '../image/main_4.jpg'
      },
      {
        id: '5',
        imageSrc: '../image/main_5.jpg'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("1"+options.name);
    const db = wx.cloud.database();
    // 查询当前用户所有的 counters
    db.collection('house').where({
      name: options.name
    }).get({
      success: res => {
        const app = getApp();
        for (var a = 0; a < res.data[0].images.length; a++) {
          res.data[0].images[a] = app.imageUrl + res.data[0].images[a];
        }
        const data = res.data[0];
        this.setData({
          house:data
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})