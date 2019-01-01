$(function(){
	//点击更多.adress,.money,.roomType,.moreThan
	// $(".top ul li .dow_no").click(function(){
	// 	window.location.href="query.html";
	// })
	//点击区域

	$(".dow_no_buy").click(function(){
		window.location.href="buy-query.html";
	})
	$(".top ul li .dow_no").click(function(){
	 	$(".sel").hide();
	 	$(".moreThan").show();
	 })
	$(".top ul li .adress_").click(function(){ 
		$(".sel").hide();
		$(".adress").show();

	})
	//点击总价
	$(".top ul li .money_").click(function(){
		$(".sel").hide();
		$(".money").show();
	})
	//点击房型
	$(".top ul li .roomType_").click(function(){
		$(".sel").hide();
		$(".roomType").show();
	})
	//下拉后搜索
	$(".adress .right ul li").click(function(){
		$(".adress").hide();
		window.location.href="roomList.html";
		
	})
	$(".money .center ul li").click(function(){
		$(".money").hide();
		window.location.href="roomList.html";
		
	})
	$(".roomType .center ul li").click(function(){
		$(".roomType").hide();
		window.location.href="roomList.html";
		
	})
	$(".moreThan .center ul li").click(function(){
		$(".moreThan").hide();
		window.location.href="roomList.html";
	})
	//点击隐藏其他展开的下拉
	$(".select").click(function(){
		$(this).parent().siblings().find(".select_ul").hide();
	});
	//点击样式
	$(".sel .adress_one li ul li").click(function(){
		$(this).siblings().removeClass("cho");
		$(this).addClass("cho");
	})
	var h=$(".sel").height();
	$(".adress .adress_one .left").css("height",h);
});
//鼠标滑动时效果
$(window).scroll(function(){
	if($(window).scrollTop()>0){
		
		$(".sel").hide();
	}
});
