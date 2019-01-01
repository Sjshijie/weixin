$(function(){
	var userId=localStorage.getItem("userId")
	$.ajax({
		url: 'https://www.ppfang.top/ppf/rentHouse/selRentHouseAllList.do',
		type: 'get',
		dataType: 'json',
		data: {
			userId:userId,
			pageNow:1
		},
		success:function(data){
			console.log(data)
			if(data.msg==-2||data.msg==0){

			}else{
				$(".ifnone").css("display", "none")
				if(data.data.ownerRentHouse&&data.data.userRentHouse){
					var arr=data.data.ownerRentHouse.concat(data.data.userRentHouse)
				}
				else if(data.data.ownerRentHouse){
					var arr=data.data.ownerRentHouse
				}
				else if(data.data.userRentHouse){
					var arr=data.data.userRentHouse
				}
				
				var len=arr.length
				console.log(arr)
				for (var i=0;i<len;i++){
					if (arr[i].type==2){
						var html='<dl class="TOrder" data-houseId='+arr[i].houseId+'>'+
								 '<dd>'+
								 '<div class="module1">'+
								 '<i><img src="'+arr[i].photoUrl+'" alt="" /></i>'+
								 '<h3>'+arr[i].title1+'</h3>'+
								 '<p>'+arr[i].barginTime+'</p>'+
								 '<p>选择租客</p>'+
								 '<span>选择租客</span>'
						$(".wapstyle").append(html)
					}
					if (arr[i].type==1){
						var html='<dl class="TOrder" data-houseId='+arr[i].houseId+'>'+
								 '<dd>'+
								 '<div class="module1">'+
								 '<i><img src="'+arr[i].photoUrl+'" alt="" /></i>'+
								 '<h3>'+arr[i].title1+'</h3>'+
								 '<p>'+arr[i].barginTime+'</p>'+
								 '<p>等待业主选择</p>'+
								 '<span>在线沟通</span>'
						$(".wapstyle").append(html)
					}
				}


				$(".wapstyle").on("click",'.TOrder',function(){
					var houseId=$(this).attr("data-houseId")
					window.location.href="TenementOrderInfo.html?houseId="+houseId
				})


			}
			

		}
	})
	
})

// <dl class="TOrder">
// 				<dd>
// 					<div class="module1">
// 						<i><img src="upload/Tenement_pic01.jpg" alt="" /></i>
// 						<h3>静安寺小资美宅 限时抢占</h3>
// 						<p>2017-08-09  17:35</p>
// 						<p>收到合同</p>
// 						<span>签订合同</span>
// 					</div>
					
// 				</dd>
// </dl>