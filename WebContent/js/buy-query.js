$(function(){
	
	//点击立即找房
	$(".btn").click(function(){
		
		var text1=$("#text1").val();
		var text2=$("#text2").val();

		var houseArea=text1+"-"+text2
		//朝向
		var orientation=""
		$(".orientation").find("ul li.cho_li").each(function(index){
			orientation+=$(this).html()+","
		})
		
		var orientation_html=orientation.substr(0,orientation.length-1)
		console.log(orientation_html)

		var that=""
		$(".that").find("ul li.cho_li").each(function(index){
			that+=$(this).html()+","
		})
		var that_html=that.substr(0,that.length-1)
		console.log(that_html)


		var houseFloor=""
		$(".houseFloor").find("ul li.cho_li").each(function(index){
			houseFloor+=$(this).html()+","
		})
		var houseFloor_html=houseFloor.substr(0,houseFloor.length-1)
		console.log(houseFloor_html)


		var houseType=""
		$(".houseType").find("ul li.cho_li").each(function(index){
			houseType+=$(this).html()+","
		})
		var houseType_html=houseType.substr(0,houseType.length-1)
		console.log(houseType_html)


		var loopLine=""
		$(".loopLine").find("ul li.cho_li").each(function(index){
			loopLine+=$(this).html()+","
		})
		var loopLine_html=loopLine.substr(0,loopLine.length-1)
		console.log(loopLine_html)


		var houseDec=""
		$(".houseDec").find("ul li.cho_li").each(function(index){
			houseDec+=$(this).html()+","
		})
		var houseDec_html=houseDec.substr(0,houseDec.length-1)
		console.log(houseDec_html)


		var property=""
		$(".property").find("ul li.cho_li").each(function(index){
			property+=$(this).html()+","
		})
		var property_html=property.substr(0,property.length-1)
		console.log(property_html)


		if($(".isMero").hasClass('cho_li')){
			var isMero=1
		}else{
			isMero=0
		}
		if($(".isElevator").hasClass('cho_li')){
			var isElevator=1
		}else{
			isElevator=0
		}
		if($(".isNew").hasClass('cho_li')){
			var isNew=1
		}else{
			isNew=0
		}

		var feature=""
		$(".feature").find("ul li.cho_li").each(function(index){
			feature+=$(this).html()+","
		})
		var feature_html=feature.substr(0,feature.length-1)
		console.log(feature_html)

		var buyHouseCondition={
			houseArea:houseArea,
			orientation:orientation_html,
			that:that_html,
			houseFloor:houseFloor_html,
			houseType:houseType_html,
			loopLine:loopLine_html,
			houseDec:houseDec_html,
			property:property_html,
			isMero:isMero,
			isElevator:isElevator,
			isNew:isNew,
			feature:feature_html
		}

		sessionStorage.setItem('buyHouseCondition',JSON.stringify(buyHouseCondition));






		// $.ajax({
		// 	url: 'https://www.ppfang.top/ppf/recSales/selMoreSellHouseList.do',
		// 	type: 'post',
		// 	dataType: 'json',
		// 	data: {

		// 	},
		// 	success:function(data){

		// 	}
		// })
		
		
		//alert("面积"+text1+"-"+text2);
		window.location.href="buy-roomList.html";
	});
	//选择效果
	$(".content_content_two ul li").click(function(){
		var index=$(this).parent().parent().index();
		if(index!=4){
			if($(this).hasClass("cho_li")){
				 $(this).removeClass("cho_li");
			}else{
				/*if(index<17){*/
					 //$(this).siblings().removeClass("cho_li");
					 $(this).addClass("cho_li");
				/*}else{
					 $(this).addClass("cho_li");
				}*/
			}
		}
	});
	//下拉样式引用
	$('select.select').select();
	
	//区间滑块
	var dragSlider = document.getElementById('drag');

	 noUiSlider.create(dragSlider, {
	 	start: [ 30, 100 ],
	 	behaviour: 'drag',
	 	connect: true,
	 	range: {
	 		'min':  0,
	 		'max':  240
	 	}
	 });
	 var skipValues = [
	               	document.getElementById('text1'),
	               	document.getElementById('text2')
	  ];

	 dragSlider.noUiSlider.on('update', function( values, handle ) {
				$("#text1").val(values[0]);
				$("#text2").val(values[1]);
		});
	 /*var dragSlider = document.getElementById('drag1');

	 noUiSlider.create(dragSlider, {
	 	start: [ 10, 50 ],
	 	behaviour: 'drag1',
	 	connect: true,
	 	range: {
	 		'min':  0,
	 		'max':  240
	 	}
	 });
	 var skipValues = [
	               	document.getElementById('text3'),
	               	document.getElementById('text4')
	  ];

	 dragSlider.noUiSlider.on('update', function( values, handle ) {
				$("#text3").val(values[0]);
				$("#text4").val(values[1]);
		});*/
})	
