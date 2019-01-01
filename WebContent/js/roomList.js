$(function(){
	 

	 
	 //点击选项卡
	 $(".content_content_top_left span").click(function(){
		 if($(this).hasClass("cho")!=true){
			 $(this).siblings().removeClass("cho");
			 $(this).addClass("cho");
		 }
	 })
	 //点击搜索
	 $(".content_content_top_right").click(function(){
		 window.location.href="queryList.html";
	 });
	//下拉样式引用
	$('select.select').select();
	
	//点击房源
	$(".content").on("click",".content_content_bottom",function(){
		 window.location.href="detail.html?houseId="+$(this).attr("data-id");
	})

	var rx_findhouse=JSON.parse(sessionStorage.getItem("rx_findhouse"));
	console.log(rx_findhouse)
	$.ajax({
		url: 'https://www.ppfang.top/ppf/housing/selQuickHouse.do',
		type: 'post',
		dataType: 'json',
		data: {
			pageNow:1,
			// totalArea:rx_findhouse.totalArea,
			// payType:rx_findhouse.payType,
			// allocation:rx_findhouse.allocation,
			// houseFloor:rx_findhouse.houseFloor,
			// houseModel:rx_findhouse.rx_findhouse,
			// type:1,
			// rentMoney:rx_findhouse.rentMoney,
			// latitude:31.300419,
			// longitude:121.322946
		},
		success:function(data){
			var len=data.data.quickHouse.length
			console.log(data.data.quickHouse)
			for (var i=0;i<len;i++){
				if(data.data.quickHouse[i].houseReview.length==0){
					var html='<div class="content_content_bottom" data-id='+data.data.quickHouse[i].houseId+'>'+
					'<div class="div_one">'+
					'<ul>'+
					'<li class="li_left"><img alt="" src="'+data.data.quickHouse[i].photoUrl+'"></li>'+
					'<li class="li_right">'+
					'<div class="all">'+
					'<canvas class="circle" style="width:90px;height:90px"></canvas>'+
					'</div>'+
					'</li>'+
					'<li class="li_center">'+
					'<p class="title_p">'+data.data.quickHouse[i].title1+'</p>'+
					'<p class="content_p">'+data.data.quickHouse[i].houseModel+'</p>'+
					'<p class="content_p">'+data.data.quickHouse[i].villageName+'</p>'+
					'</li>'+
					'</ul>'+
					'</div>'+
					'<div class="div_two">'+
					'<ul class="rentMoney">'+
					'<li class="left_li">'+data.data.quickHouse[i].rentMoney+'/月</li>'+
					'<li class="right_li">'+
					'<ul>'+
					'<li class="houseDec">'+
					'<img alt="" src="img/icon1.png">'+
					'<span>'+data.data.quickHouse[i].houseDec+'<a>家具齐全</a></span>'+
					'</li>'+
					'<li class="metroName">'+
					'<img alt="" src="img/icon1.png">'+
					'<span>'+data.data.quickHouse[i].metroName+'<a>近地铁</a></span>'+
					'</li>'+
					'<li class="traName">'+
					'<img alt="" src="img/icon1.png">'+
					'<span>'+data.data.quickHouse[i].traName+'<a>近商圈</a></span>'+
					'</li>'+
					'</ul>'+
					'</li>'+
					'</ul>'+
					'<div class="div_three">'+
					 '<ul>'+
					 '<li class="left_li">专家点评</li>'+
					 '<li class="right_li">'+
					 '<div class="text">'+
					 '<span></span>'+
					 '</div>'+
					 '<div class="img">'+
					 '<div class="img_img"></div>'+
					 '</div>'+
					 '<div class="name"><span class="level"></span></div>'+
					 '</li>'+
					 '</ul>'+
					 '</div>'+
					'</div>'
					$(".content_content").append(html)
				}else{
				var html='<div class="content_content_bottom" data-id='+data.data.quickHouse[i].houseId+'>'+
					 '<div class="div_one">'+
					 '<ul>'+
					 '<li class="li_left"><img alt="" src="'+data.data.quickHouse[i].photoUrl+'"></li>'+
					 '<li class="li_right">'+
					 '<div class="all">'+
					//  '<div class="circleProgress">'+
					//  '<div class="circleProgress_weep">'+
					//  '<i class="i_top">抢手率</i>'+
					//  '<i class="sorce">'+data.data.quickHouse[i].rate*100+'.0%</i>'+
					//  '<i class="i_bottom">'+data.data.quickHouse[i].collectNum+'人收藏</i>'+
					//  '</div>'+
					//  '</div>'+
					'<canvas class="circle" style="width:90px;height:90px"></canvas>'+
					//  '<div class="left">'+
					//  '<div class="left_ra ra"></div>'+
					//  '</div>'+
					//  '<div class="right">'+
					//  '<div class="right_ra ra"></div>'+
					//  '</div>'+
					 '</div>'+
					 '</li>'+
					 '<li class="li_center">'+
					 '<p class="title_p">'+data.data.quickHouse[i].title1+'</p>'+
					 '<p class="content_p">'+data.data.quickHouse[i].houseModel+'</p>'+
					 '<p class="content_p">'+data.data.quickHouse[i].villageName+'</p>'+
					 '</li>'+
					 '</ul>'+
					 '</div>'+
					 '<div class="div_two">'+
					 '<ul>'+
					 '<li class="left_li">'+data.data.quickHouse[i].rentMoney+'/月</li>'+
					 '<li class="right_li">'+
					 '<ul>'+
					 '<li class="houseDec">'+
					 '<img alt="" src="img/icon1.png">'+
					 '<span>'+data.data.quickHouse[i].houseDec+'<a>家具齐全</a></span>'+
					 '</li>'+
					 '<li class="metroName">'+
					 '<img alt="" src="img/icon1.png">'+
					 '<span>'+data.data.quickHouse[i].metroName+'<a>近地铁</a></span>'+
					 '</li>'+
					 '<li class="traName">'+
					 '<img alt="" src="img/icon1.png">'+
					 '<span>'+data.data.quickHouse[i].traName+'<a>近商圈</a></span>'+
					 '</li>'+
					 '</ul>'+
					 '</li>'+
					 '</ul>'+
					 '</div>'+
					 '<div class="div_three">'+
					 '<ul>'+
					 '<li class="left_li">专家点评</li>'+
					 '<li class="right_li">'+
					 '<div class="text">'+
					 '<span>'+data.data.quickHouse[i].houseReview[0].content+'</span>'+
					 '</div>'+
					 '<div class="img">'+
					 '<div class="img_img"></div>'+
					 '</div>'+
					 '<div class="name" style="font-size:13px">'+data.data.quickHouse[i].houseReview[0].realName+'<br/><span class="level" style="font-size:13px"></span></div>'+
					 '</li>'+
					 '</ul>'+
					 '</div>'+
					 '</div>';
					
				
				
				$(".content_content").append(html)

			}
					console.log(data.data.quickHouse[i].houseReview[0].level)
			 		if(data.data.quickHouse[i].houseReview[0].level==1){
						$(".level").eq(i).html("初级")
					}
					if(data.data.quickHouse[i].houseReview[0].level==2){
						$(".level").eq(i).html("中级")
					}
					if(data.data.quickHouse[i].houseReview[0].level==3){
						$(".level").eq(i).html("专家")
					}
					if(data.data.quickHouse[i].houseDec==undefined){
						$(".houseDec").eq(i).hide()
					}
					if(data.data.quickHouse[i].metroName==undefined){
						$(".metroName").eq(i).hide()
					}
					if(data.data.quickHouse[i].traName==undefined){
						$(".traName").eq(i).hide()
					}
			
			// console.log(data.data.quickHouse[i].rate)
				// fun(data.data.quickHouse[i].rate*100,i);
			
			}
			drawProgress(data.data.quickHouse.length,data.data.quickHouse)
		}
	})
	
	

});

