
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
	url: 'https://www.ppfang.top/ppf/consultin/selConsultinByTradeNo.do',
	type: 'get',
	dataType: 'json',
	data: {
		type:type,
		tradeNo:tradeNo
	},
	success:function(data){
		console.log(data)
		var module1_html='<i><img src="'+data.data.userInfo.userHead+'" alt="" /></i>'+
						 '<span><h3>'+data.data.userInfo.realName+'</h3><em>'+data.data.userInfo.createTime+'</em></span>'+
						 '<span>'+data.data.userInfo.nativePlace+'&nbsp;&nbsp;'+data.data.userInfo.constellation+'<b>¥'+data.data.order.price+'</b></span>'
		$(".module1").html(module1_html)
		if(data.data.userInfo.userLevel==1){
			var userLevel="初级"
		}
		if(data.data.userInfo.userLevel==2){
			var userLevel="中级"
		}
		if(data.data.userInfo.userLevel==3){
			var userLevel="高级"
		}

		if(data.data.userInfo.conWay==1){
			var conWay='语音'
		}
		if(data.data.userInfo.conWay==2){
			var conWay='视频'
		}
		if(data.data.userInfo.conWay==3){
			var conWay='面谈'
		}
		var module2_html='<li><i class="icon1"></i><b>'+userLevel+'</b><i class="icon2"></i><em>0-0</em></li>'+
						 '<li><i class="icon1"></i><b>'+conWay+'</b>'+
						 '<i class="icon3"></i><em>15分钟</em></li>'
		 $(".module2").html(module2_html)


		 var module6_html='<i></i>'+
						 '<span>'+data.data.userInfo.content+'</span>'
						 
		 $(".module6").html(module6_html)


		 $(".module1 img").css("height", $(".module1 img").outerWidth() + "px")

	}
})


//$(".M3line").css('height',$(".module3").height());



