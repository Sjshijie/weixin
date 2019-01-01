$(function(){
	
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
		url: 'https://www.ppfang.top/ppf/recSales/selSelHouseDetails.do',
		type: 'get',
		dataType: 'json',
		data: {
			houseId:houseId,
			userId:userId
		},
		success:function(data){
			console.log(data)
			var html = template($("#detail").html(),{data:data.data})
			$(".all").html(html)

			if(data.isDeposit==0){
				$(".isDeposit").html("缴纳保证金")
				$(".isDeposit").click(function(){
					window.location.href="bail.html?houseId="+houseId
				})
			}
			if(data.isDeposit==1){
				$(".isDeposit").html("我要拍价")
				$(".isDeposit").click(function(){
					window.location.href="bidInterface_English.html?houseId="+houseId
				})
				
			}
			if(data.isDeposit==3){
				$(".isDeposit").html("竞价完成")
			}





			$(".top").css("height","210px");
			$(".banner").css("height","210px");
			$(".swiper-container").css("height","210px");
			var swiper = new Swiper('.swiper-container', {
			    pagination: '.swiper-pagination',
			    observer:true,//修改swiper自己或子元素时，自动初始化swiper
			    observeParents:true,//修改swiper的父元素时，自动初始化swiper
			   /*  autoplay:3000, */
			    paginationClickable: true,
				autoplayDisableOnInteraction : false,
				loop:true,
				centeredSlides : true,
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
			    // Enable debugger
			    debugger: true,
			    
			    mode: 'horizontal',
			    onSlideChangeEnd: function (swiper) {
			    	var index=$(".swiper-pagination .swiper-pagination-bullet-active").index();
			    	var sumIndex=$(".swiper-pagination .swiper-pagination-bullet").length;
			     	$(".index").text((index+1));
			    	$(".sumIndex").text(sumIndex);
			    }
			});

			var price=[];
			var peo=[]
			for (var i=0;i<data.data.quizTimeList.length;i++){
				price.push(parseInt(data.data.quizPriceList[i]/10000)+"万")
				peo.push(data.data.quizTimeList[i])
			}
			var myChart = echarts.init(document.getElementById('main'));
		    var option = {
		    	color:['#c5c5c5'],
		        xAxis: {
		            data:price,
		            splitLine:{show:true},
		            name:"猜价区间",
		            nameLocation:'middle',
		            nameGap:25,
		            nameTextStyle:{fontSize:12}
		        },
		        yAxis: {
		        	data:[1,2,3,4,5],
		        	splitLine:{show:true},
		        	name:"",
		        	nameLocation:'middle',
		        	nameGap:25,
		        	nameTextStyle:{fontSize:12}
		        	
		        },
		        series: [{
	                name: '销量',
	                type: 'bar',
	                data: peo
            	}]

		    };
		    // 使用刚指定的配置项和数据显示图表。
		    myChart.setOption(option);
		    $(".content_content_bottom").click(function(){
		    	var houseId=$(this).attr("data-houseId")
		    	window.location.href="detail_p.html?houseId="+houseId
		    })




    		
		}
	})
	



	
	//banner图自定义高度
		
		
		//自适应的一些效果
	if($(".content").width()>320 && $(".content").width()<412){
		$(".ul_newadd1 .ul_newadd1_start_li").css("letter-spacing",$(".content").width()*0.01+"px");
		$(".ul_newadd1 .ul_newadd1_start_li span").css("padding-left","10px");
		$(".ul_newadd1 .ul_newadd1_start_li span").css("padding-right","10px");
	}else if($(".content").width()>=412){
		$(".ul_newadd1 .ul_newadd1_start_li").css("letter-spacing",$(".content").width()*0.045+"px");
		$(".ul_newadd1 .ul_newadd1_start_li span").css("padding-left","10px");
		$(".ul_newadd1 .ul_newadd1_start_li span").css("padding-right","10px");
	}else if($(".content").width()<=320){
		$(".ul_newadd1 .ul_newadd1_start_li").css("letter-spacing","10px");
		$(".ul_newadd1 .ul_newadd1_start_li span").css("padding-left","5px");
		$(".ul_newadd1 .ul_newadd1_start_li span").css("padding-right","5px");
	}
	//点击更多
	$(".long_long").css("display","none");
	$(".more_long").click(function(){
		var dis=$(".long_long").css("display");
		if(dis!="none"){
			$(".long_long").css("display","none");
			$(".more_long").html("<img style='height:12px;' src='images/icon14.png'>点击展开");
		}else{
			$(".long_long").css("display","block");
			$(".more_long").html("<img  style='height:12px;' src='images/icon14_1.png'>点击收起");
			//$(this).hide();
		}
	});
	/*//点击联系房东
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
				$(".long_long").css("display","none");
			}else{
				$(".long_long").css("display","block");
				$(this).hide();
			}
		});*/
	//echarts
    // 基于准备好的dom，初始化echarts实例
   
    $("#main").children().append("<div class='x_name'><span class='one'>400</span><span class='two'>300</span><span class='three'>200</span><span class='four'>100</span><span class='span_after'>挂牌价</span></div>");
    $("#main").children().append("<div class='y_guapai'></div>");
}) 
	//圆环
