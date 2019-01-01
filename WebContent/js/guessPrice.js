var i="";
$(function(){
	//点击关闭弹窗
	$(".call_pay-no").click(function(){
		$(this).parent().hide();
		$(".shile").hide();
	});
	//点击价格
	$(".content>ul>li").click(function(){
		var old=$(".content .content_money").text();//原来价格
		var price=$(this).attr("title");//需调整价格
		if($(this).hasClass("jian")){
			if(old-price>0){
				$(".content .content_money").text(old-price);
			}
		}else if($(this).hasClass("jia")){
			$(".content .content_money").text(old-(-price));
		}
	});
	//减金币
	$(".content .show .img_left").click(function(){
		var q=$(".content>p>span").text();
		var num=$(".content  .show>span").text();
		if(num>20){
			$(".content .show>span").text(num-1);
			$(".content>p>span").text(q-(-1));
		}
		
	});
	//加金币
	$(".content .show .img_right").click(function(){
		var q=$(".content>p>span").text();
		var num=$(".content .show>span").text();
		if(q>0){
			if(num<100000){
				$(".content .show>span").text(num-(-1));
				$(".content>p>span").text(q-1);
			}
		}
	});
	//点击确定
	$(".all .btn").click(function(){
		$(".call_pay-no").parent().show();
		$(".shile").show();
	})
	//点击弹窗中的确定
	$(".call .center_btn").click(function(){
		$(this).parent().hide();
		$(".shile").hide();
		$(".show_success").show();
		i=setInterval(show, 2000);
	})
	
});
function show(){
	$(".show_success").hide();
	clearInterval(i);
}
