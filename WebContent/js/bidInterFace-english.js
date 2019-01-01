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
				var userId=data.data.sellHouseInfo.userId
				var html=template($("#data").html(),{data:data})
				$(".waptable").html(html)
				$(".module6").on("click",".module6_a",function(){
					if($(this).hasClass("module6_a1")){
						$(this).removeClass("module6_a1");
						$(".module7 a").removeClass('a')

					}else{
						$(this).addClass("module6_a1");
						$(".module7 a").addClass('a')
					}
				})

				$(".module7").click(function(){
					$(".shile").css("display","block")
					$(".call").css("display","block")
				})


				$(".module4 b .left_img").on("touchend",function(){
					if(!$(this).hasClass("no_img")){
						var val=$(".cost").text();
						$(".cost").text(val-1);
					}
				})
			    //点击加金额
				$(".module4 b .right_img").on("touchend",function(){
					if(!$(this).hasClass("no_img")){
						var val=$(".cost").text();
						$(".cost").text(val-(-1));
					}
				})



				$(".center_btn").click(function(){
					$.ajax({
						url: 'https://www.ppfang.top/ppf/recSales/selSelHouseDetails.do',
						type: 'post',
						dataType: 'json',
						data: {
							userId:userId,
							houseId:houseId,
							biddPrice:$(".cost").html(),

						},
						success:function(){

						}
					})
					
					
				})


				$(".rate").change(function(){
					console.log()
					$(".num").html(parseInt(parseInt($(".rate option:checked").val())/100*$(".cost").html())+"万")
				})

				var option = {
					title:{subtext:"  万",top:-12},
				    xAxis: {min:1211,max:1217,
					    	axisLabel: {
					    		color: "#8c8c8c"  //刻度线标签颜色
					    	},
					    	 axisTick:{
							    	show:false,
							    }
			           },
				    yAxis: {min: 793,max: 800,
						    axisLabel: {
						    		color: "#8c8c8c"  //刻度线标签颜色
						    },
						    axisTick:{
						    	show:false,
						    }
						    
				    	},
				        tooltip: {
				            backgroundColor: '#ffffff',
				            borderColor: '#efb033',
				            borderWidth: 1,
				            formatter: function (obj) {
				                var value = obj.value;
				                return '<div style="font-size: 12px;width:120px;color:#b7b7b7;line-height:15px;">'
				                             	+'出价:<span style="color:#f0b648;">'+value[0]+'</span><br/>'
				                             	+'首付:<span style="color:#f0b648;">'+value[1]+'</span><br/>'
				                            	+'有效期:<span style="color:#f0b648;">2012-10-12</span><br/>'
				                      +'</div>'
				                  ;
				            }
				        },
				    grid:{
			            x:40,
			            y:25,
			            x2:20,
			            y2:30,
			            borderWidth:1
			        },
				    series: [{
				        symbolSize: 15,
				        data: [
				            [1211.5,795],
				            [1213.5,797],
				            [1215.8,795],
				            [1215,798],
				            [1216.8,799]
				        ],
				        type: 'scatter',
				        itemStyle: {
				            normal: {
				            	color:'#eb718f',
				            }
				        }
				       
				    },{symbolSize: 15,
			        data: [
				            [1211.8,794],
				            [1212,795],
				            [1213,798],
				            [1214,799],
				            [1215,799.5]
				        ],
				        type: 'scatter',
				        itemStyle: {
				            normal: {
				            	color:'#b7b7b7',
				            }
				        }
				    }]
				};
			 var myChart = echarts.init(document.getElementById('scatter'));
			 myChart.setOption(option);



				 	var theme = "ios";
			        var mode = "scroller";
			        var display = "bottom";
			        var lang="zh";
			         $('#demo_datetime').mobiscroll().datetime({
			            theme: theme,
			            mode: mode,
			            display: display,
			            lang: lang,
			            dateFormat:"yyyy-mm-dd",
			            minDate: new Date(2000,3,10,9,22),
			            maxDate: new Date(2030,7,30,15,44),
			            stepMinute: 1
			        });


			         
			     }

		})


		
		
		//点击减金额


			





        });
	