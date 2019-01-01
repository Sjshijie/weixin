$(function(){
	//勾选与不勾选
	$(".module6 .module6_a").click(function(){
		if($(this).hasClass("module6_a1")){
			$(this).removeClass("module6_a1");
		}else{
			$(this).addClass("module6_a1");
		}
	});
	//本息，本金切换
	$(".module5 .module5_li .module5_li_div div").click(function(){
		$(".module5 .module5_li .module5_li_div div").removeClass("cho_div");
		$(this).addClass("cho_div");
	});
	//点击立即出价
	$(".module7").click(function(){
		if($(this).find("a").attr("class")==null){
			$(".shile").show();
			$(".gotoapp").show();
		}else{//点击竞价
			if($(this).find("a").attr("class")=="english"){
				$(".call_pay").show();
				$(".shile").show();
			}
		}
	})
	//点击关闭竞价确认
	$(".call_pay-no").click(function(){
		$(".call_pay").hide();
		$(".shile").hide();
	});
	//点击我知道了
	$(".center_btn").click(function(){
		$(".call_pay").hide();
		$(".shile").hide();
	})
	//点击取消
	$(".gotoapp_btn .gotoapp-left").click(function(){
		$(".shile").hide();
		$(".gotoapp").hide();
	})
	//点击立即前往
	$(".gotoapp_btn .gotoapp-right").click(function(){
		$(".shile").hide();
		$(".gotoapp").hide();
	})
	//点击减金额
	$(".module4 b .left_img").on("touchend",function(){
		var val=$(".module4 b span").text();
		$(".module4 b span").text(val-1);
	})
    //点击加金额
	$(".module4 b .right_img").on("touchend",function(){
		var val=$(".module4 b span").text();
		$(".module4 b span").text(val-(-1));
	})
})