var userId=localStorage.getItem("userId")

 function format_number(n){  
   var b=parseInt(n).toString();  
   var len=b.length;  
   if(len<=3){return b;}  
   var r=len%3;  
   return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");  
 }  
$.ajax({
	url: 'https://www.ppfang.top/ppf/holand/selHolandOrder.do',
	type: 'get',
	dataType: 'json',
	data: {
       userId:userId,
       pageNow:1
	},
	success:function(data){
		console.log(data)
		if(data.msg==0){
			
		}else{
			$(".ifnone").css("display", "none")
			var len=data.data.length
			for (var i=0;i<len;i++){
				if(data.data[i].biddUsers!=0){
					var num=format_number(data.data[i].biddUsers[0].biddPrice)
				}
				
				if(data.data[i].type==2){
					var html='<dl class="BHOrder" data-index="'+i+'">'+
					 '<dd>'+
					 '<div class="module1">'+
					 '<i><img src="upload/house_pic01.jpg" alt="" /></i>'+
					 '<h3>'+data.data[i].villageName+'</h3>'+
					 '<p>'+data.data[i].houseModel+'&nbsp;&nbsp;'+data.data[i].houseArea+'㎡&nbsp;&nbsp;'+data.data[i].orientation+'</p>'+
					 '<p>'+data.data[i].address+'<span>英式</span></p>'+
					 '</div>'+
					 '<ul class="module2">'+
					 '<li>'+
					 '<b>'+data.data[i].listingPrice/10000+'万</b>'+
					 '<span>当前价</span>'+
					 '</li>'+
					 '<li>'+
					 '<b>'+data.data[i].reservePrice/10000+'万</b>'+
					 '<span>保留价</span>'+
					 '</li>'+
					 '<li class="listyle">'+
					 '<b>7.6809万</b>'+
					 '<span>单价/平</span>'+
					 '</li>'+
					 '</ul>'+
					 '<ul class="module2 module2a">'+
					 '<li>'+
					 '<i class="M2aIcon1"></i>'+
					 '<span>报名人数</span>'+
					 '<span>'+data.data[i].enrollNum+'</span>'+
					 '</li>'+
					 '<li>'+
					 '<i class="M2aIcon2"></i>'+
					 '<span>设置提醒人数</span>'+
					 '<span>'+data.data[i].remindNum+'</span>'+
					 '</li>'+
					 '<li class="listyle">'+
					 '<i class="M2aIcon3"></i>'+
					 '<span>围观人数</span>'+
					 '<span>'+data.data[i].lookerNum+'</span>'+
					 '</li>'+
					 '</ul>'+
					 '<div class="linestyle"></div>'+
					 '<div class="module3">'+
					 '<div class="module3top">'+
					 '<b><i class="M3Icon1"></i>¥&nbsp;'+num+'</b>'+
					 '<span>'+data.data[i].upTime+'</span>'+
					 '</div>'+
					 '<div class="module3mid"><i class="M3Icon2"></i>首付'+data.data[i].scale+'('+data.data[i].houseBidding+'内)&nbsp;&nbsp;尾款'+data.data[i].scale+'('+data.data[i].houseBidding+'内)</div>'+
					 '<div class="module3bottom">'+
					 '<div class="M3time">'+
					 '<div class="M3Tmargin"><i class="M3Icon3">2</i><span>天</span><i class="M3Icon3">12</i><span>时</span><i class="M3Icon3">56</i><span>分</span></div>'+
					 '</div>'+
					 '<em>点击详情</em>'+
					 '</div>'+
					 '</div>'+
					 '<div class="linestyle"></div>'+
					 '<div class="module4">'+
					 '<b><i></i>竞价记录</b>'+
					 '<em></em>'+
					 '</div>'+
					 '</dd>'+
					 '</dl>';
				}
				if(data.data[i].type==1){
					var html='<dl class="BHOrder" data-index="'+i+'">'+
					 '<dd>'+
					 '<div class="module1">'+
					 '<i><img src="upload/house_pic01.jpg" alt="" /></i>'+
					 '<h3>'+data.data[i].villageName+'</h3>'+
					 '<p>'+data.data[i].houseModel+'&nbsp;&nbsp;'+data.data[i].houseArea+'㎡&nbsp;&nbsp;'+data.data[i].orientation+'</p>'+
					 '<p>'+data.data[i].address+'<span>荷式</span></p>'+
					 '</div>'+
					 '<ul class="module2">'+
					 '<li>'+
					 '<b>'+data.data[i].listingPrice/10000+'万</b>'+
					 '<span>当前价</span>'+
					 '</li>'+
					 '<li>'+
					 '<b>'+data.data[i].reservePrice/10000+'万</b>'+
					 '<span>保留价</span>'+
					 '</li>'+
					 '<li class="listyle">'+
					 '<b>7.6809万</b>'+
					 '<span>单价/平</span>'+
					 '</li>'+
					 '</ul>'+
					 '<ul class="module2 module2a">'+
					 '<li>'+
					 '<i class="M2aIcon1"></i>'+
					 '<span>报名人数</span>'+
					 '<span>'+data.data[i].enrollNum+'</span>'+
					 '</li>'+
					 '<li>'+
					 '<i class="M2aIcon2"></i>'+
					 '<span>设置提醒人数</span>'+
					 '<span>'+data.data[i].remindNum+'</span>'+
					 '</li>'+
					 '<li class="listyle">'+
					 '<i class="M2aIcon3"></i>'+
					 '<span>围观人数</span>'+
					 '<span>'+data.data[i].lookerNum+'</span>'+
					 '</li>'+
					 '</ul>'+
					 '<div class="linestyle"></div>'+
					 '<div class="module3">'+
					 '<div class="module3top">'+
					 '<b><i class="M3Icon1"></i>¥&nbsp;'+num+'</b>'+
					 '<span>'+data.data[i].upTime+'</span>'+
					 '</div>'+
					 '<div class="module3footer"><i>发送确认函</i></div>'+
					 '</div>'+
					 '<div class="linestyle"></div>'+
					 '<div class="module4">'+
					 '<b><i></i>竞价记录</b>'+
					 '<em></em>'+
					 '</div>'+
					 '</dd>'+
					 '</dl>';
				}
				
				$(".wapstyle").append(html)

			}
		}
	}
})

$(".wapstyle").on("click",".BHOrder",function(){
	var index=$(this).attr("data-index")
	window.location.href="BuyingHouseOrderInfo.html?index="+index
})


