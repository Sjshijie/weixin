	$(function(){
		
		var h=$(".content-ul .top_li .left img").height();
		$(".content-ul .top_li .left img").width(h);




		var userId=localStorage.getItem("userId")
		
		$.ajax({
			url: 'https://www.ppfang.top/ppf/commission/selCommissionByUserId.do',
			type: 'get',
			dataType: 'json',
			data: {
				userId: userId,
				pageNow: 1
			},
			success: function (data) {
				console.log(data)
				if (data.data.length == 0) {

				} else {
					$(".ifnone").css("display", "none")
					var len = data.data.length
					for (var i = 0; i < len; i++) {

						var html = '<li data-type="' + data.data[i].type + '" data-tradeNo="' + data.data[i].tradeNo + '" class="items">' +
							'<ul>' +
							'<li class="top_li">' +
							'<ul>' +
							'<li class="left">' +
							'<img alt="" src="' + data.data[i].userHead + '">' +
							'</li>' +
							'<li class="center">' +
							'<div>' +
							'<span class="span_one">' + data.data[i].userName + '</span>' +
							'<span class="span_two">' + data.data[i].createTime + '</span>' +
							'<span class="span_three" data-comStatus="' + data.data[i].comStatus + '""></span>' +
							'</div>' +
							'</li>' +
							'<li class="right">' +
							'<div class="right_btn">' +
							'<div class="btn">在线沟通</div>' +
							'</div>' +
							'</li>' +
							'</ul>' +
							'</li>' +
							'<li class="bottom_li">' +
							'<div class="div">'+data.data[i].transaction+'</div>' +
							'<img alt="" class="img" src="img/wait_icon.png">' +
							'</li>' +
							'</ul>' +
							'</li>';

						$(".content-ul").append(html)
						$(".left img").css("width", $(".left img").outerHeight() + "px")

					}


					for (var j = 0; j < len; j++) {
						var status = data.data[j].status
						var comStatus = $(".span_three").eq(j).attr("data-comStatus")
						if(data.data[j].type == 2){

							$(".div").eq(j).css({"background":"pink","color":"white"})
						}
						if (status == 1 && comStatus == 1) {
							if(data.data[j].type==1){
								$(".btn").eq(j).html("在线沟通")
								$(".span_three").eq(j).html("专家确认中")
							}else{
								$(".right_btn").eq(j).hide();
								$(".span_three").eq(j).html("等待确认")
							}
						}
						if (status == 1 && comStatus == 2) {
							if(data.data[j].type==1){
								$(".btn").eq(j).html("确定完成")
							}else{
								$(".btn").eq(j).html("在线沟通");
								
							}
							$(".span_three").eq(j).html("订单进行中")
						}
						if (status == 1 && comStatus == 3) {
							
							$(".btn").eq(j).html("在线沟通")
							$(".span_three").eq(j).html("专家已拒绝")
							
						}
						if (status == 1 && comStatus == 4) {
							if(data.data[j].type==1){
								$(".btn").eq(j).html("评价")
							}else{
								$(".btn").eq(j).html("在线沟通");
								
							}
							$(".span_three").eq(j).html("订单已完成,待评价")
						}
						if (status == 1 && comStatus == 5) {
							$(".btn").eq(j).html("在线沟通");
							$(".span_three").eq(j).html("订单已评价")
						}
						if (status == 2 && comStatus == 1) {
							if(data.data[j].type==1){
								$(".right_btn").eq(j).hide()
								$(".span_three").eq(j).html(data.data[j].garbCount+"人抢单")
							}
						}
						if (status == 2 && comStatus == 2) {
							if(data.data[j].type==1){
								$(".btn").eq(j).html("选择")
								$(".span_three").eq(j).html(data.data[j].garbCount+"人抢单")
							}else{
								$(".btn").eq(j).html("在线沟通")
								$(".span_three").eq(j).html("抢单中")
							}
						}
						if (status == 2 && comStatus == 3) {
							if(data.data[j].type==1){
								$(".btn").eq(j).html("确定完成")
								$(".span_three").eq(j).html("订单进行中")
							}else{
								$(".btn").eq(j).html("在线沟通")
								$(".span_three").eq(j).html("订单进行中")
							}
						}
						if (status == 2 && comStatus == 4) {
							if(data.data[j].type==1){
								$(".btn").eq(j).html("评价")
							}else{
								$(".btn").eq(j).html("在线沟通")
								
							}
							$(".span_three").eq(j).html("订单已完成,待评价")
						}
						if (status == 2 && comStatus == 5) {
							$(".btn").eq(j).html("在线沟通")
							$(".span_three").eq(j).html("订单已评价")
						}
						if (status == 2 && comStatus == 7) {
							$(".btn").eq(j).html("在线沟通")
							$(".span_three").eq(j).html("抢单失败")
						}
						// var conWay=data.data[j].conWay
						// if(conWay==1){
						// 	$(".btn").html("语音")
						// }
						// if(conWay==2){
						// 	$(".btn").html("视频")
						// }
						// if(conWay==3){
						// 	$(".btn").html("面谈")
						// }

					}
				}

			}

		})


		$(".content-ul").on("click",".btn",function(e){
			e.stopPropagation()
			window.location.href="https://www.baidu.com"			
		})
		$(".content-ul").on("click",".items",function(){
			var type=$(this).attr("data-type")			
			var tradeNo=$(this).attr("data-tradeNo")
			window.location.href="CommissionOrderInfo.html?type="+type+"&tradeNo="+tradeNo;			
		})

	})

				// <li>
				// 	<ul>
				// 		<li class="top_li">
				// 			<ul>
				// 				<li class="left">
				// 					<img alt="" src="img/wait.png">
				// 				</li>
				// 				<li class="center">
				// 					<div>
				// 						<span class="span_one">王女士</span>
				// 						<span class="span_two">2017-08-09 17:35</span>
				// 						<span class="span_three">订单已完成</span>
				// 					</div>
				// 				</li>
				// 				<li class="right">
				// 					<div class="right_btn">
				// 						<div>评价</div>
				// 					</div>
				// 				</li>
				// 			</ul>
				// 		</li>
				// 		<li class="bottom_li">
				// 			<div class="div">贷款服务</div>
				// 			<!-- <div class="img"></div> -->
				// 			<img alt="" class="img" src="img/wait_icon.png">
				// 		</li>
				// 	</ul>
				// </li>