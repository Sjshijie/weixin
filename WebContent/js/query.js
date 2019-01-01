$(function(){
		// var url=encodeURI("http://199j1371u3.51mypc.cn/PPfWxin/WebContent/query.html")
		// function getQueryString(name) { 
	 //        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	 //        var r = window.location.search.substr(1).match(reg); 
	 //        if (r != null) return unescape(r[2]); 
	 //        return null; 
  //   	}
  //   	var code=getQueryString("code")
		// if(code==null){
		// 	location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx063064705c96c8fa&redirect_uri="+url+"&response_type=code&scope=snsapi_base&state=123#wechat_redirect"
		// }
		// if(code){
		// 	console.log(code)
		// 	$.ajax({
		// 		url:"https://www.ppfang.top/ppf/login/getUserInfoAccessToken.do",
		// 		data:{
		// 			code:code
		// 		},
		// 		success:function(data){
					
		// 		}
		// 	})


		// }
	//点击立即找房

	//01087c3cdfbe4e68a973dc6abe6050ed
	//c04a5fa359294dbc8da97d3d6564f2ab
	//7bd2b3fde0454ff09fb7018b603f491d 
	var userId="7bd2b3fde0454ff09fb7018b603f491d"
	localStorage.setItem("userId",userId)
	$(".btn").click(function(){
		
		var text1=parseInt($("#text1").val());
		var text2=parseInt($("#text2").val());
		var text3=parseInt($("#text3").val());
		var text4=parseInt($("#text4").val());
		var area=$(".select-value").val();
		var metro=$(".select-value1").val();
		var rentType=$(".rentType .cho_li").html();
		var houseDec=$(".houseDec .cho_li").html()
		var houseType=$(".houseType .cho_li").html()
		var houseFloor=$(".houseFloor .cho_li").html()
		var rentType=$(".rentType .cho_li").html()
		var payType=$(".payType .cho_li").html();
		var houseModel=$(".houseModel .cho_li").html()
		var allocation_list=$(".allocation .cho_li")
		var allocation_arr=[];
		allocation_list.each(function(index){
			allocation_arr.push($(this).text())
		})
		var allocation=allocation_arr.join(",")
		var rentMoney=text1+"-"+text2
		var totalArea=text3+"-"+text4

		
		




		// $.ajax({
		// 	url: 'https://www.ppfang.top/ppf/housing/selWilfulByOne.do',
		// 	type: 'post',
		// 	dataType: 'json',
		// 	data: {
		// 		totalArea:totalArea,
		// 		rentMoney:rentMoney,
		// 		area:area,
		// 		metro:metro,
		// 		rentType:rentType,
		// 		houseDec:houseDec,
		// 		houseType:houseType,
		// 		houseFloor:houseFloor,
		// 		allocation:allocation,
		// 		payType:payType,
		// 		houseModel:houseModel,
		// 		userId:userId
		// 	},
		// 	success:function(data){
				
				var rx_findhouse={
					totalArea:totalArea,
					rentMoney:rentMoney,
					area:area,
					metro:metro,
					rentType:rentType,
					houseDec:houseDec,
					houseType:houseType,
					houseFloor:houseFloor,
					allocation:allocation,
					payType:payType,
					houseModel:houseModel,
					userId:userId
				}
				sessionStorage.setItem('rx_findhouse',JSON.stringify(rx_findhouse));

				location.href="roomList.html"




					// 	}
					// })
					

					//alert("租金区域为"+text1+"-"+text2);
					//alert("面积区域为"+text3+"-"+text4);
					
				});
	//选择效果
	$(".content_content_two ul li").click(function(){
		var index=$(this).parent().parent().index();
		if(index!=4){
			if($(this).hasClass("cho_li")){
				 $(this).removeClass("cho_li");
			}else{
				if(index<17){
					 $(this).siblings().removeClass("cho_li");
					 $(this).addClass("cho_li");
				}else{
					 $(this).addClass("cho_li");
				}
			}
		}

	});
	//下拉样式引用
	$('select.select').select();


	
	
	
	//区间滑块
	var dragSlider = document.getElementById('drag');

	 noUiSlider.create(dragSlider, {
	 	start: [ 1000, 7500 ],
		connect: true,
	 	range: {
	 		'min':  0,
	 		'max':  10500
	 	}
	 });
	 var skipValues = [
	               	document.getElementById('text1'),
	               	document.getElementById('text2')
	  ];

	 dragSlider.noUiSlider.on('update', function( values, handle ) {
				$("#text1").val(values[0]);
				$("#text2").val(values[1]);
		});
	 var dragSlider = document.getElementById('drag1');

	 noUiSlider.create(dragSlider, {
	 	start: [ 10, 50 ],
	 	connect: true,
	 	range: {
	 		'min':  0,
	 		'max':  240
	 	}
	 });
	 var skipValues = [
	               	document.getElementById('text3'),
	               	document.getElementById('text4')
	  ];

	 dragSlider.noUiSlider.on('update', function( values, handle ) {
				$("#text3").val(values[0]);
				$("#text4").val(values[1]);
		});

	
//返回的实例对象，
//包含showPicker,hide,updateData等方法
// var method= $('.select-value').data('mPicker');
// console.info(method)
// method.showPicker();
// method.hide(function(){
//     console.info(this)
// });
        
		
})	

