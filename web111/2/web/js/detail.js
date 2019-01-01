$(function(){
	
	
	//banner图自定义高度
		var h=$(".top .big_room").css("height");
		$(".top").css("height",h);
		$(".banner").css("height",h);
		$(".swiper-container").css("height",h);
		
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
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
    	color:['#c5c5c5'],
        xAxis: {
        
            data: ["","","","",{
            	value: "",
                // 突出周一
                textStyle: {
                    color: '#ea6b90'
                }
            },""],
            splitLine:{show:true},
            name:"猜价区间",
            nameLocation:'middle',
            nameGap:25,
            nameTextStyle:{fontSize:12}
        },
        yAxis: {
        	min: -300,
        	max: 400,
        	splitLine:{show:true},
        	name:"",
        	nameLocation:'middle',
        	nameGap:25,
        	nameTextStyle:{fontSize:12}
        	
        },
        series: [
       		{
       			name: '销量',
                type: 'bar',
                data: [-250, -100, -280, -100, -100, 200]
       		},
      		{ 
       			name: '销量',
                type: 'bar',
                data: [-300, -280, -100, -220, -100, 300]
       		},
       		{ 
       			name: '销量',
                type: 'bar',
                data: [-200, -280, -280, -100, -180, 350]
       		},
       		{ 
       			name: '销量',
                type: 'bar',
                data: [-200, -200, -150, -100, -100, 200]
       		},
                
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    //
    $("#main").children().append("<div class='x_name'><span class='one'>400</span><span class='two'>300</span><span class='three'>200</span><span class='four'>100</span><span class='span_after'>挂牌价</span></div>");
    $("#main").children().append("<div class='y_guapai'></div>");
    
	 fun(0.04,0);
	 fun(0.04,1);
	 
	 
    
}) 
	//圆环
function fun(num,index){
	if(num<=0.5){
	var number=45+(num*360);
		$(".div_one .li_right:eq("+index+") .left_ra").css("transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-webkit-transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-moz-transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-o-transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-ms-transform","rotate("+number+"deg)"); 
		
		$(".div_one .li_right:eq("+index+") .right_ra").css("transform","rotate(45deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-webkit-transform","rotate(45deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-moz-transform","rotate(45deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-o-transform","rotate(45deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-ms-transform","rotate(45deg)");
		
	}else if(num>0.5){
		
		if(num>1){
			num=1;
		}
		var number=45+(num*360)-225+45;
		
		$(".div_one .li_right:eq("+index+") .right_ra").css("transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-webkit-transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-moz-transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-o-transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-ms-transform","rotate("+number+"deg)");
		
		$(".div_one .li_right:eq("+index+") .left_ra").css("transform","rotate(225deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-webkit-transform","rotate(225deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-moz-transform","rotate(225deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-o-transform","rotate(225deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-ms-transform","rotate(225deg)"); 
		
	}
 }