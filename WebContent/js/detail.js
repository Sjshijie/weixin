$(function(){
	//获取url中的houseId
	function getQueryString(name) {
	  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 匹配目标参数
	  var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
	  if (result != null) {
	    return decodeURIComponent(result[2]);
	  } else {
	    return null;
	  }
	}
	var houseId=getQueryString("houseId")
	var userId=localStorage.getItem("userId")
	$.ajax({
		url: 'https://www.ppfang.top/ppf/rentHouse/selRenthouseByHouseId.do',
		type: 'get',
		dataType: 'json',
		data: {
			houseId: houseId,
			userId:userId
		},
		success:function(data){
			console.log(data)
			$(".title").html(data.data.basicInfo.title1)
			if(data.data.basicInfo.housereview){
				$(".text span").html(data.data.basicInfo.housereview[0].content)
				if(data.data.basicInfo.housereview[0].LEVEL==1){
					$(".name").html(data.data.basicInfo.housereview[0].realName+"初级")
				}
				if(data.data.basicInfo.housereview[0].LEVEL==2){
					$(".name").html(data.data.basicInfo.housereview[0].realName+"中级")
				}
				if(data.data.basicInfo.housereview[0].LEVEL==3){
					$(".name").html(data.data.basicInfo.housereview[0].realName+"高级")
				}
			}
			$(".rentMoney").html(data.data.basicInfo.rentMoney)
			$(".roomType1").html(data.data.basicInfo.roomType)
			$(".totalArea").html(data.data.basicInfo.totalArea)
			$(".lookNum").html(data.data.basicInfo.lookNum)
			$(".collectNum").html(data.data.basicInfo.collectNum)
			$(".orderNum").html(data.data.basicInfo.orderNum)
			$(".house_info").html(
				'<li>区域：'+data.data.leaseInfo.area+'</li>'+
				'<li>户型：'+data.data.leaseInfo.houseModel+'</li>'+
				'<li>租期：'+data.data.leaseInfo.tenancy+'</li>'+
				'<li>支付方式：'+data.data.leaseInfo.payType+'</li>'+
				'<li>类型：'+data.data.leaseInfo.houseType+'</li>'+
				'<li>朝向：'+data.data.leaseInfo.towards+'</li>'+
				'<li>装修：'+data.data.leaseInfo.houseDec+'</li>'+
				'<li>楼层：'+data.data.leaseInfo.houseFloor+'</li>'
			)
			$(".metroName ul").append('<li class="one">'+data.data.leaseInfo.metroName+'</li>')
			$(".traName ul").append('<li class="one">'+data.data.leaseInfo.traName+'</li>')
			$(".landlord span").html(data.data.leaseInfo.sendWord)
			$(".require ul").append('<li>'+data.data.leaseInfo.require+'</li>')

			$(".cellName").html(data.data.houseInfo.cellName)
			$(".totalfamily").html(data.data.houseInfo.totalfamily)
			$(".loopLine").html(data.data.houseInfo.loopLine)
			$(".greeningRate").html(data.data.houseInfo.greeningRate)
			$(".propertyCosts").html(data.data.houseInfo.propertyCosts)
			$(".builtYears").html(data.data.houseInfo.builtYears)
			$(".volumeRatio").html(data.data.houseInfo.volumeRatio)
			$(".developers").html(data.data.houseInfo.developers)
			$(".parkingSpace").html(data.data.houseInfo.parkingSpace)
			$(".propertyCompany").html(data.data.houseInfo.propertyCompany)
			$(".builUpArea").html(data.data.houseInfo.builUpArea)

			$(".metro-under").html(data.data.comMatching.metro)
			$(".bus").html(data.data.comMatching.bus)
			$(".kindergarten").html(data.data.comMatching.kindergarten)
			$(".priMiSchools").html(data.data.comMatching.priMiSchools)
			$(".hospital").html(data.data.comMatching.hospital)
			$(".market").html(data.data.comMatching.market)
			$(".theMarket").html(data.data.comMatching.theMarket)
			$(".bank").html(data.data.comMatching.bank)
			$(".restaurant").html(data.data.comMatching.restaurant)
			$(".cafe").html(data.data.comMatching.cafe)
			$(".park").html(data.data.comMatching.park)
			$(".ktv").html(data.data.comMatching.ktv)
			$(".gym").html(data.data.comMatching.gym)
			$(".gymnasium").html(data.data.comMatching.gymnasium)
			$(".cinema").html(data.data.comMatching.cinema)

			var swipe_num=data.data.basicInfo.configInfo.allocations.length
			console.log(swipe_num)
			for (var j=0;j<swipe_num;j++){
				//console.log(data.data.basicInfo.configInfo.allocations[j].photoUrl)
				// if(data.data.basicInfo.configInfo.allocations[j].photoUrl!=="null"){
					$(".swiper-wrapper").append(
						'<div class="swiper-slide"><img class="big_room" alt="" src="'+data.data.basicInfo.configInfo.allocations[j].photoUrl+'"></div>'

						// '<div class="swiper-slide"><img class="big_room" alt="" src="http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png"></div>'
					)
				// }
			}
			//百度地图API功能
			var map = new BMap.Map("map"); // 创建Map实例
			var mPoint = new BMap.Point(data.data.basicInfo.longitude, data.data.basicInfo.latitude);
			map.centerAndZoom(mPoint, 18);
			var marker = new BMap.Marker(mPoint);  // 创建标注
			map.addOverlay(marker);

			var userReviews_len=data.data.userReviews.length
			for (var z=0;z<userReviews_len;z++){
				var userReviews_html='<div class="userReviews-items">'+
									 '<div class="userReviews-name">'+data.data.userReviews[z].userName+'</div>'+
									 '<div class="userReviews-contain">'+data.data.userReviews[z].content+''+
									 '</div>'+
									 '</div>';
				$(".userReviews").append(userReviews_html)
			}

			var pushUserLike_len=data.data.pushUserLike.length
			for (var p=0;p<pushUserLike_len;p++){
				// data-id='+data.data.pushUserLike[z].houseId+'
				if(data.data.pushUserLike[p].houseReview.length==0){

				}else{
					var pushUserLike_html='<div class="content_content_bottom">'+
					 '<div class="div_one">'+
					 '<ul>'+
					 '<li class="li_left"><img alt="" src="'+data.data.pushUserLike[p].photoUrl+'"></li>'+
					 '<li class="li_right">'+
					 '<div class="all">'+
					 '<div class="circleProgress">'+
					 '<div class="circleProgress_weep">'+
					 '<i class="i_top">抢手率</i>'+
					 '<i class="sorce">'+data.data.pushUserLike[p].rate*100+'.0%</i>'+
					 '<i class="i_bottom">'+data.data.pushUserLike[p].collectNum+'人收藏</i>'+
					 '</div>'+
					 '</div>'+
					 '<div class="left">'+
					 '<div class="left_ra ra"></div>'+
					 '</div>'+
					 '<div class="right">'+
					 '<div class="right_ra ra"></div>'+
					 '</div>'+
					 '</div>'+
					 '</li>'+
					 '<li class="li_center">'+
					 '<p class="title_p">'+data.data.pushUserLike[p].title1+'</p>'+
					 '<p class="content_p">'+data.data.pushUserLike[p].houseModel+'</p>'+
					 '<p class="content_p">'+data.data.pushUserLike[p].villageName+'</p>'+
					 '</li>'+
					 '</ul>'+
					 '</div>'+
					 '<div class="div_two">'+
					 '<ul>'+
					 '<li class="left_li">'+data.data.pushUserLike[p].rentMoney+'/月</li>'+
					 '<li class="right_li">'+
					 '<ul>'+
					 '<li>'+
					 '<img alt="" src="img/icon1.png">'+
					 '<span>'+data.data.pushUserLike[p].houseDec+'<a>家具齐全</a></span>'+
					 '</li>'+
					 '<li>'+
					 '<img alt="" src="img/icon1.png">'+
					 '<span>'+data.data.pushUserLike[p].metroName+'<a>近地铁</a></span>'+
					 '</li>'+
					 '<li>'+
					 '<img alt="" src="img/icon1.png">'+
					 '<span>'+data.data.pushUserLike[p].traName+'<a>近商圈</a></span>'+
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
					 '<span>'+data.data.pushUserLike[p].houseReview[0].content+'</span>'+
					 '</div>'+
					 '<div class="img">'+
					 '<div class="img_img"></div>'+
					 '</div>'+
					 '<div class="name">'+data.data.pushUserLike[p].houseReview[0].realName+'<span class="level"></span></div>'+
					 '</li>'+
					 '</ul>'+
					 '</div>'+
					 '</div>';
				}
				
				$(".pushUserLike").append(pushUserLike_html)
			}


		}
	})
	
	





	//banner图自定义高度
		var h=$(".top .big_room").css("height");
		$(".top").css("height",h);
		$(".banner").css("height",h);
		$(".swiper-container").css("height",h);
	//点击联系房东
		$(".to_call").click(function(){
			$(".call_pay").show();
			$(".shile").show();
			$("body").css("overflow-y","hidden");
			$("body").css("height","100%");
		})
	//点击关闭
		$(".no,.call_pay-no").click(function(){
			$(this).parent().hide();
			$(".shile").hide();
			$("body").css("overflow-y","auto");
			$("body").css("height","auto");
		})
	//点击我懂了
		$(".call_pay .center_btn").click(function(){
			$(this).parent().hide();
			$(".pay").show();
		});
	//点击付款
		$(".pay ul .right").click(function(){
			$(this).parent().parent().parent().hide();
			$(".call_phone").show();
		})
	//点击在线咨询
		$(".bottom .show").click(function(){
			$(".gotoapp").show();
			$(".shile").show();
			$("body").css("overflow-y","hidden");
			$("body").css("height","100%");
		})
	//点击立即前往和取消
		$(".gotoapp .gotoapp_btn div").click(function(){
			$(this).parent().parent().hide();
			$(".shile").hide();
			$("body").css("overflow-y","auto");
			$("body").css("height","auto");
		})
	//点击更多
		$(".long_long").css("display","none");
		$(".more_long").click(function(){
			var dis=$(".long_long").css("display");
			if(dis!="none"){
				$(this).html('<img alt="" src="img/icon14.png">点击展开')
				$(".long_long").css("display","none");
			}else{
				$(".long_long").css("display","block");
				$(this).html('<img alt="" src="img/icon14.png">点击收起'); 
			}
		});
	//echarts
    // 基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById('main'));

    // // 指定图表的配置项和数据
    // var option = {
    // 	color:['#c5c5c5'],
    //     xAxis: {
        
    //         data: ["","","","",{
    //         	value: "",
    //             // 突出周一
    //             textStyle: {
    //                 color: '#ea6b90'
    //             }
    //         },""],
    //         splitLine:{show:true},
    //         name:"猜价区间",
    //         nameLocation:'middle',
    //         nameGap:25,
    //         nameTextStyle:{fontSize:12}
    //     },
    //     yAxis: {
    //     	min: -300,
    //     	max: 400,
    //     	splitLine:{show:true},
    //     	name:"",
    //     	nameLocation:'middle',
    //     	nameGap:25,
    //     	nameTextStyle:{fontSize:12}
        	
    //     },
    //     series: [
    //    		{
    //    			name: '销量',
    //             type: 'bar',
    //             data: [-250, -100, -280, -100, -100, 200]
    //    		},
    //   		{ 
    //    			name: '销量',
    //             type: 'bar',
    //             data: [-300, -280, -100, -220, -100, 300]
    //    		},
    //    		{ 
    //    			name: '销量',
    //             type: 'bar',
    //             data: [-200, -280, -280, -100, -180, 350]
    //    		},
    //    		{ 
    //    			name: '销量',
    //             type: 'bar',
    //             data: [-200, -200, -150, -100, -100, 200]
    //    		},
                
    //     ]
    // };
    // // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);
    //
    // $("#main").children().append("<div class='x_name'><span class='one'>400</span><span class='two'>300</span><span class='three'>200</span><span class='four'>100</span><span class='span_after'>挂牌价</span></div>");
    // $("#main").children().append("<div class='y_guapai'></div>");
    
	 // fun(0.04,0);
	 // fun(0.04,1);
    
}) 
	//圆环
// function fun(num,index){
// 	if(num<=0.5){
// 	var number=45+(num*360);
// 		$(".div_one .li_right:eq("+index+") .left_ra").css("transform","rotate("+number+"deg)");
// 		$(".div_one .li_right:eq("+index+") .left_ra").css("-webkit-transform","rotate("+number+"deg)");
// 		$(".div_one .li_right:eq("+index+") .left_ra").css("-moz-transform","rotate("+number+"deg)");
// 		$(".div_one .li_right:eq("+index+") .left_ra").css("-o-transform","rotate("+number+"deg)");
// 		$(".div_one .li_right:eq("+index+") .left_ra").css("-ms-transform","rotate("+number+"deg)"); 
		
// 		$(".div_one .li_right:eq("+index+") .right_ra").css("transform","rotate(45deg)");
// 		$(".div_one .li_right:eq("+index+") .right_ra").css("-webkit-transform","rotate(45deg)");
// 		$(".div_one .li_right:eq("+index+") .right_ra").css("-moz-transform","rotate(45deg)");
// 		$(".div_one .li_right:eq("+index+") .right_ra").css("-o-transform","rotate(45deg)");
// 		$(".div_one .li_right:eq("+index+") .right_ra").css("-ms-transform","rotate(45deg)");
		
// 	}else if(num>0.5){
		
// 		if(num>1){
// 			num=1;
// 		}
// 		var number=45+(num*360)-225+45;
		
// 		$(".div_one .li_right:eq("+index+") .right_ra").css("transform","rotate("+number+"deg)");
// 		$(".div_one .li_right:eq("+index+") .right_ra").css("-webkit-transform","rotate("+number+"deg)");
// 		$(".div_one .li_right:eq("+index+") .right_ra").css("-moz-transform","rotate("+number+"deg)");
// 		$(".div_one .li_right:eq("+index+") .right_ra").css("-o-transform","rotate("+number+"deg)");
// 		$(".div_one .li_right:eq("+index+") .right_ra").css("-ms-transform","rotate("+number+"deg)");
		
// 		$(".div_one .li_right:eq("+index+") .left_ra").css("transform","rotate(225deg)");
// 		$(".div_one .li_right:eq("+index+") .left_ra").css("-webkit-transform","rotate(225deg)");
// 		$(".div_one .li_right:eq("+index+") .left_ra").css("-moz-transform","rotate(225deg)");
// 		$(".div_one .li_right:eq("+index+") .left_ra").css("-o-transform","rotate(225deg)");
// 		$(".div_one .li_right:eq("+index+") .left_ra").css("-ms-transform","rotate(225deg)"); 
		


// 	}
//  }