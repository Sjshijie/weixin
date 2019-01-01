$(function(){
	//点击返回
	$(".header .left img").click(function(){
		window.history.back(); 
	});
	//房源列表中点击我要猜价
	$(".content .content_content ul .right a").click(function(){
		window.location.href="guessPrice.html";
	})
});
