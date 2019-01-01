
$(function(){
	var list;
	$.ajax({
		url: 'https://www.ppfang.top/ppf/conprice/selConprice.do',
		type: 'get',
		dataType: 'json',
		async: false,
		success:function(data){
			// var len=data.data.conprice
			// for (var i=0;i<len;i++){
			// 	if(conWay==data.data.conprice[i].conWay&&level==data.data.conprice[i].level){
			// 		// $(".cho_div").html(data.data.conprice[i].price+"/15分钟")
			// 		// $(".one-cho").html(data.data.conprice[i].price+"/小时"
			// 	}
			// }
			

			list=data.data.conprice
		}
	})


	var userId=localStorage.getItem("userId")
	$(".export select").change(function(){
		var level=$(this).val();
		var conWay=$(".way select").val();
		var len=list.length
		console.log(list)
		var html=""
		for (var i=0;i<len;i++){

			if(conWay==list[i].conWay&&level==list[i].level){
				
				
				if(list[i].payWay==2){
					console.log(1)
					html+='<div class="cho_div">'+list[i].price+'元/小时</div>'
				}
				if(list[i].payWay==1){
					// console.log(list[i].price)
					// $(".one-cho").html(list[i].price+"元/小时")
					console.log(1)
					
					html+='<div class="cho_div one-cho">'+list[i].price+'元/15分钟</div>'
				}
				console.log(html)
				if(list[i].payWay==0){
					html="<div class='cho_div min one-cho'>"+list[i].price+"元/小时</div>"
				}
				$(".money").html(html)
				
			}
		}
		
	})


	$(".way select").change(function(){
		var level=$(this).val();
		var conWay=$(".way select").val();
		var len=list.length
		console.log(list)
		var html=""
		for (var i=0;i<len;i++){
			if(conWay==list[i].conWay&&level==list[i].level){
				if(list[i].payWay==1){
					// console.log(list[i].price)
					// $(".one-cho").html(list[i].price+"元/小时")
				    html+='<div class="cho_div one-cho">'+list[i].price+'元/15分钟</div>'
				}
				if(list[i].payWay==2){
					
					html+='<div class="cho_div min">'+list[i].price+'元/小时</div>'
				}
				$(".money").html(html)
				
			}
			if(conWay==3){
				$(".money").html("<div class='cho_div one-cho'>"+list[i].price+"元/小时</div>")
			}
		}
		
	})

	$(".money").on("click",".cho_div",function(){
		
		$(this).addClass("one-cho").siblings().removeClass("one-cho")
	})
	
})