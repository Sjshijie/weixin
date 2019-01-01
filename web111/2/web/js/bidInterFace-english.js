	$(function(){
		
		
		//点击减金额
		$(".module4 b .left_img").on("touchend",function(){
			if(!$(this).hasClass("no_img")){
				var val=$(".module4 b span").text();
				$(".module4 b span").text(val-1);
			}
		})
	    //点击加金额
		$(".module4 b .right_img").on("touchend",function(){
			if(!$(this).hasClass("no_img")){
				var val=$(".module4 b span").text();
				$(".module4 b span").text(val-(-1));
			}
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

        });
	