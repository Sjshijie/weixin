$(function(){
	
	
	var two=localStorage.getItem("two");
	if(two!="true"){
		//中奖提示弹框
		$(".success").css("display","inline-block");
		//加入缓存表示是否已经有过中奖提示
		localStorage.setItem("two","true");
	}
	
	//中奖后点击查看
	$(".success .button").click(function(){
		window.location.href="myBet.html";
	});
	//点击切换
	$(".content .title li span").click(function(){
		$(".content .title li span").removeClass("cho");
		$(this).addClass("cho");
		var num=$(this).parent().index();
		$(".title_content .swiper-container .swiper-pagination-bullet").eq(num).trigger("click");
	});
	//点击关闭弹框
	$(".show_div .no_img").click(function(){
		$(this).parent().hide();
	})
	$(".success>div").height($(".success>div img").height());
	//点击中奖公告
	$(".header .header_content ul li>.left").click(function(){
		window.location.href="winning.html";
	})
	//点击我的押注
	$(".header .header_content ul li>.right").click(function(){
		window.location.href="myBet.html";
	})
	//点击猜价押注
	$(".btn").click(function(){
		
		//判断是否首次点击猜价，
		var one=localStorage.getItem("one");
		if(one!="true"){
			$(".show_div1").css("display","inline-block");
			//加入缓存表示已经进入过该界面
			localStorage.setItem("one","true");
		}else{
			window.location.href="guessPrice.html";
		}
		
	})
	//点击全部房源
	$(".content .content_top a").click(function(){
		window.location.href="roomList1.html";
	})
	//点击底部切换
	$(".title_content .swiper-container .swiper-pagination .swiper-pagination-bullet").click(function(){
		var ind=$(this).index();
		$(".content .title li span").removeClass("cho");
    	$(".content .title li span").eq(ind).addClass("cho");
	})
	//滑动切换
	$('.title_content .swiper-container').on('touchend', function(e) {
		var number=$(".title_content .swiper-container .swiper-pagination  .swiper-pagination-bullet-active").index();
    	$(".content .title li span").removeClass("cho");
    	$(".content .title li span").eq(number).addClass("cho");
	});
	//滑动切换banner
	$('.content_banner>.swiper-container').on('touchend', function(e) {
		var number=$(".content_banner .swiper-container .swiper-pagination  .swiper-pagination-bullet-active").index();
		var houseId=$(".content_banner .swiper-container .swiper-slide").eq(number).attr("id");
	});
});

