Page({
    data: {

    },
    onLoad: function(options){
        console.log(options.id)
        this.setData({
            mid: options.id
        })


        // 保存当前页面对象
        var page = this
    
        wx.request({
            url: 'https://douban.uieee.com/v2/movie/' + options.id,
            method: 'GET',
            // 不能直接使用 datatype: json 的方式, 此方式仍将导致 400 Bad Request
            header:{
                'content-type': 'json'  
            },
            responseType: 'text',
            success: (result)=>{
                console.log(result)
                if (result.statusCode == 200)
                {
                    // 需要通过前面保存的 page 变量访问数据而不能直接使用 this
                    page.setData({
                        movie: result.data
                    })
                    wx.hideNavigationBarLoading();
                    wx.setNavigationBarTitle({
                        title: result.data.title,
                    });
                } 
            },
            fail: ()=>{},
            complete: ()=>{},
            
        });
        wx.showNavigationBarLoading();
    }
})