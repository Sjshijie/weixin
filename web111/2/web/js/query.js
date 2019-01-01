$(function(){
	
	//点击立即找房
	$(".btn").click(function(){
		
		var text1=$("#text1").val();
		var text2=$("#text2").val();
		//alert("面积"+text1+"-"+text2);
		window.location.href="roomList.html";
	});
	//选择效果
	$(".content_content_two ul li").click(function(){
		var index=$(this).parent().parent().index();
		if(index!=4){
			if($(this).hasClass("cho_li")){
				 $(this).removeClass("cho_li");
			}else{
				/*if(index<17){*/
					 $(this).siblings().removeClass("cho_li");
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
