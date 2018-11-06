Page({
  data: {
    weeklyMovieList: [
      {
        name: "网络谜踪",
        comment: "桌面电影新高度",
        imagePath: "/images/searching.jpg",
        isHighlyRecommended: false,
        score: 8.7,
        id: 27615441
      },
      {
        name: "这个杀手不太冷",
        comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事",
        imagePath: "/images/leon.jpg",
        isHighlyRecommended: false,
        score: 9.4,
        id: 1295644
      },
      {
        name: "风味人间",
        comment: "舌尖上的世界",
        imagePath: "/images/biteOfWorld.jpg",
        isHighlyRecommended: true,
        score: 9.4,
        id: 30156039
      },
    ],
    currentIndex: 0,
    count: 0,
  },
  // 常用于数据初始化
  onLoad: function(options){
    this.setData(
      {
        currentIndex: this.data.weeklyMovieList.length-1
      }
    )
  },
  // onShow: function(){

  // },
  // onReady: function(){

  // },
  // onHide: function(){

  // },
  // onUnload: function(){

  // }
  returnIndex: function(event){
    this.setData({
      currentIndex: this.data.weeklyMovieList.length-1
    })
  },
  jumpToDetail: function(event){
    var movieId = event.currentTarget.dataset.movieId
    wx.navigateTo({
      url: '/pages/detail/detail?id='+movieId,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
})