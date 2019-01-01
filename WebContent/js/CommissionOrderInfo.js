function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 匹配目标参数
  var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
  if (result != null) {
    return decodeURIComponent(result[2]);
  } else {
    return null;
  }
}


var userId=localStorage.getItem("userId")
var type=getQueryString("type")
var tradeNo=getQueryString("tradeNo")


$.ajax({
	url: 'https://www.ppfang.top/ppf/commission/selCommissionByTradeNo.do',
	type: 'get',
	dataType: 'json',
	data: {
		tradeNo:tradeNo,
		type:type,
		userId:userId
	},
	success:function(data){
		console.log(data)
		var module1='<i><img src="'+data.data.userInfo.userHead+'" alt="" /></i>'+
					'<span><h3>'+data.data.userInfo.userName+'</h3><em>'+data.data.userInfo.createTime+'</em></span>'+
					'<span>'+data.data.userInfo.conAddress+'&nbsp;&nbsp;'+data.data.userInfo.constellation+'<b>¥'+data.data.userInfo.price+'</b></span>';
		$(".module1").html(module1)
		$(".module1 i").css("height",$(".module1 i").outerWidth()+"px")

		// <i><img src="upload/consult_pic01.jpg" alt="" /></i>
		// <span><h3>王女士</h3><em>2017-08-09&nbsp;&nbsp;17:35</em></span>
		// <span>上海&nbsp;&nbsp;金牛座<b>¥800</b></span>
		if(data.data.userInfo.LEVEL==1){
			var level="初级"
		}
		if(data.data.userInfo.LEVEL==2){
			var level="中级"
		}
		if(data.data.userInfo.LEVEL==3){
			var level="高级"
		}
		var module2='<li><i class="icon1"></i><b>'+level+'</b><i class="icon3"></i><em>'+data.data.userInfo.seeTime+'</em></li>'+
					'<li><i class="icon1"></i><b>'+data.data.userInfo.area+'</b><i class="icon2"></i><em>'+data.data.userInfo.conAddress+'</em></li>'+
					'<li><i class="icon1"></i><b>'+data.data.userInfo.comType+'</b></li>'
		$(".module2").html(module2)
		// <li><i class="icon1"></i><b>高级</b><i class="icon2"></i><em>2018-02-01  9:00-11:00</em></li>
		// <li><i class="icon1"></i><b>南翔</b><i class="icon3"></i><em>上海市嘉定区南翔镇丰翔路3109弄</em></li>
		// <li><i class="icon1"></i><b>别墅</b></li>

		var arr=data.data.userInfo.transaction.split(",")
		for (var i=0;i<arr.length;i++){
			$(".module3").append('<li><span>'+arr[i]+'</span></li>')
		}
	}
})




