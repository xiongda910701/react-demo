//定义axios数据请求函数
function doAxiosPost(url,params,callback){
    axios({
        method: "post",
        url: url,
        params:{},
        data: params
    }).then(function(response){
       callback(response)
    }).cache(function(error){

    });
}


export  default doAxiosPost;