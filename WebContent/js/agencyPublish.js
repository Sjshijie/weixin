
var contain=[];
$.ajax({
	url: 'https://www.ppfang.top/ppf/conprice/selCommCost.do',
	type: 'get',
	dataType: 'json',
	success:function(data){
		console.log(data)
		var len = data.data.length
		var html='<div class="ly-contain">';
		for(var i=0;i<len;i++){
			html+='<div class="list">'+
						'<div class="list-top" data-status="0">'+
							'<div class="commName">'+data.data[i].commName+'</div>'+
							'<div class="cost"><span>'+data.data[i].price+'</span>π币</div>'+
							'<span class="active"><img src="img/gou.png"/></span>'+
						'</div>'+
						'<div class="list-bottom">'+
							data.data[i].explain+
						'</div>'+
					'</div>'
		}
		html+='</div>'+
			  '<div class="ly-total" style="text-align:right">'+
			  '<span class="total">0</span><span>π币</span>'+
			  '</div>'+
			  '<div class="ly-btn">'+
			  '确定'+
			  '</div>'
		$(".contain").html(html)
		$(".business").click(function(){
			$(".contain").css("display","block")
			$(".layer").css("display","block")
		})



		$(".contain").on("click",".list",function(){
			if($(this).find(".list-top").attr("data-status")==0){
				$(this).find(".list-top").css("color","#e5b330")
				$(this).find(".active").css("display","block")
				$(this).find(".list-top").attr("data-status",1)
				$(".total").html(parseInt($(this).find(".cost span").html())+parseInt($(".total").html()))
				contain.push($(this).find(".commName").html())
			}else if($(this).find(".list-top").attr("data-status")==1){
				$(this).find(".list-top").css("color","black")
				$(this).find(".active").css("display","none")
				$(this).find(".list-top").attr("data-status",0)
				$(".total").html(parseInt($(".total").html())-parseInt($(this).find(".cost span").html()))
				var pop=$(this).find(".commName").html()
				for(var i=0;i<contain.length;i++){
					if(contain[i]==pop){
						contain.splice(i,1)
					}
				}
			}
			
		})

		$(".layer").click(function(){
			$(this).css("display","none")
			$(".contain").css("display","none")
		})
		$(".ly-btn").click(function(){
			$(".contain").css("display","none")
			$(".layer").css("display","none")
			$(".business-content").html(contain.toString())

		})

	}
	
})

$.ajax({
	url: 'https://www.ppfang.top/ppf/town/selAllCity.do',
	type: 'get',
	dataType: 'json',
	success:function(data){
		console.log(data)
		var len=data.data.areas.length
		for (var i=0;i<len;i++){
			var html='<option>'+data.data.areas[i].title+'</option>'
			$(".quxian select").append(html)
		}
	}
})


$(function(){
	$(".left.btn").click(function(){
			$(".layer").show();
			$(".pay").show();
	});
	$(".no").click(function(){
		$(".layer").hide();
		$(".pay").hide();
	})

})



		





