// pages/index/index.js
const app = getApp();
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
      imageUrl:app.imageUrl,
      imagelist: [
        {
          id: '0',
          imageSrc: app.imageUrl+'main_0.jpg'
        }, 
        {
          id: '1',
          imageSrc: app.imageUrl +'main_1.jpg'
        }, 
        {
          id: '2',
          imageSrc: app.imageUrl +'main_2.jpg'
        }, 
        {
          id: '3',
          imageSrc: app.imageUrl +'main_3.jpg'
        }, 
        {
          id: '4',
          imageSrc: app.imageUrl +'main_4.jpg'
        }, 
        {
          id: '5',
          imageSrc: app.imageUrl +'main_5.jpg'
        }
      ],
    messagelist:[
      {
        id: 'map',
        name: '地址：漳浦县旧镇镇苑上村乌石宾馆',
        open:false,
        pages: [{id:'openMap',name:'打开地图'}]
      }, 
      {
        id: 'time',
        name: '营业时间：全天营业',
        open: null,
        pages: []
      }, 
      {
        id: 'phone',
        name: '联系电话：15892028032（林女士）',
        open: false,
        pages: [{ id: 'callPhone', name: '拨打电话' }]
      }, 
    ]
  },
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.messagelist
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        if (list[i].open!=null){
          list[i].open = !list[i].open
        }
      } else {
        if (list[i].open != null) {
          list[i].open = false
        }
      }
    }
    this.setData({
      messagelist :list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  },

  openMap: function () {
    wx.openLocation({
      latitude: 24.070868,
      longitude: 117.729203,
      scale: 28
    })
  },

  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '15892028032',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.reportAnalytics('enter_home_programmatically', {})
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