$(function(){

		var userId=localStorage.getItem("userId")
		
		//fun(0,0);
		//点击选他代办
		$(".btn").click(function(){
			$(".shile").show();
			$(".pay").show()
		});
		//点击关闭弹窗
		$(".call .no").click(function(){
			$(".shile").hide();
			$(".pay").hide()
		});


		$.ajax({
			url: 'https://www.ppfang.top/ppf/user/selSpecialistByWhere.do',
			type: 'get',
			dataType: 'json',
			data: {
				pageNow:1,
				userId:userId
			},
			success:function(data){
				console.log(data)
				var specialist_len=data.data.specialist.length
				var specialist=data.data
				// for(var i=0;i<specialist_len;i++){
				// 	$(".top_left .title").html(specialist[i].realName)
				// }
				for (var i=0;i<specialist_len;i++){
					// specialist.specialist[i].good.split(",")
					if(specialist.specialist[i].good){
						specialist.specialist[i].good=specialist.specialist[i].good.split(",")
					}
					if(specialist.specialist[i].personal){
						specialist.specialist[i].personal=specialist.specialist[i].personal.split(",")
					}
					if(specialist.specialist[i].area){
						specialist.specialist[i].area=specialist.specialist[i].area.split(",")
					}
					// console.log(specialist.specialist[i].good)
				}

				
				

				var html=template(document.getElementById('specialist').innerHTML,{specialist:specialist.specialist})
				document.getElementById("list").innerHTML=html
				$(".all_ul>li ul .left img").height($(".all_ul>li ul .left img").width());
				exportcircle(specialist_len,specialist.specialist)
			}
		})
		
		$(".all").on("click",".all_ul",function(){
			var user=$(this).attr("data-userId")
			window.location.href="agencyDetail.html?user="+user
		})
		
	})
