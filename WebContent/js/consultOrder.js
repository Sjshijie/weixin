	$(function(){
		
		var h=$(".content-ul .top_li .left img").height();
		$(".content-ul .top_li .left img").width(h);




		var userId=localStorage.getItem("userId")
		
		$.ajax({
			url: 'https://www.ppfang.top/ppf/consultin/selConsultinBySpeId.do',
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
						var html = '<dl class="COrder" data-type="' + data.data[i].type + '" data-tradeNo="' + data.data[i].tradeNo + '">' +
							'<dd>' +
							'<div class="module1">' +
							'<i><img src="' + data.data[i].userHead + '" alt="" /></i>' +
							'<h3>' + data.data[i].userName + '</h3>' +
							'<p class="text">' + data.data[i].createTime + '</p>' +
							'<p class="span_three" data-conStatus="' + data.data[i].conStatus + '"></p>' +
							'<span class="btn">评价</span>' +
							'</div>' +
							'<div class="module2">' +
							'<i></i>' +
							'<span>租房什么价格才......</span>' +
							'</div>' +
							'</dd>' +
							'</dl>'
						$(".wapstyle").append(html)
						$(".module1 img").css("height", $(".module1 img").outerWidth() + "px")
					}
					for (var j = 0; j < len; j++) {
						var status = data.data[j].status

						var conStatus = $(".span_three").eq(j).attr("data-conStatus")
						if (status == 1 && conStatus == 1) {
							$(".span_three").eq(j).html("未付费")
						}
						if (status == 1 && conStatus == 1) {
							$(".span_three").eq(j).html("已付费，待专家确认")
						}
						if (status == 1 && conStatus == 2) {
							$(".span_three").eq(j).html("专家已拒绝")
						}
						if (status == 1 && conStatus == 3) {
							$(".span_three").eq(j).html("专家已确认，办理中")
						}
						if (status == 1 && conStatus == 4) {
							$(".span_three").eq(j).html("订单已完成，待评价")
						}
						if (status == 1 && conStatus == 5) {
							$(".span_three").eq(j).html("已评价")
						}
						if (status == 2 && conStatus == 0) {
							$(".span_three").eq(j).html("未付费")
						}
						if (status == 2 && conStatus == 1) {
							$(".span_three").eq(j).html("无人抢单，待专家抢单")
						}
						if (status == 2 && conStatus == 2) {
							$(".span_three").eq(j).html("有人抢单，待选择专家")
						}
						if (status == 2 && conStatus == 3) {
							console.log(1)
							$(".span_three").eq(j).html("已选择专家，办理中")
						}
						if (status == 2 && conStatus == 4) {
							$(".span_three").eq(j).html("订单完成，待评价")
						}
						if (status == 2 && conStatus == 5) {
							$(".span_three").eq(j).html("已评价")
						}
						if (conStatus == 7) {
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

		$(".wapstyle").on("click",".btn",function(e){
			e.stopPropagation()
			//window.location.href="https://www.baidu.com"

		})
		$(".wapstyle").on("click",".COrder",function(e){
			var type=$(this).attr("data-type")			
			var tradeNo=$(this).attr("data-tradeNo")
			console.log(tradeNo)
			window.location.href="consultOrderInfo.html?type="+type+"&tradeNo="+tradeNo;			
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