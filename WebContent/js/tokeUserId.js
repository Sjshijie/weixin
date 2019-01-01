var local=window.location.href
	var localArr=local.split("/")
	var localarr=localArr[localArr.length-1].split("?")
	var localStr=localarr[0]
	//console.log(localStr)
	
	var userId=localStorage.getItem("userId")
	if(!userId){
		var url=encodeURI("https://www.ppfang.top/PPfWxin/WebContent/"+localStr)
		function getQueryString(name) { 
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	        var r = window.location.search.substr(1).match(reg); 
	        if (r != null) return unescape(r[2]); 
	        return null; 
	  	}
	  	var code=getQueryString("code")
		if(code==null){
			location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx063064705c96c8fa&redirect_uri="+url+"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"
		}
		if(code){
			$.ajax({
				url:"https://www.ppfang.top/ppf/login/getUserInfoAccessToken.do",
				data:{
					code:code
				},
				async:false, 
				success:function(data){
					localStorage.setItem("userId",data.userId)
					localStorage.setItem("openId",data.openId)
					console.log(data.openId)
				}
			})
		}
	}