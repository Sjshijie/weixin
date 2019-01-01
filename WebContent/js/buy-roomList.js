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
	$(".content_content_bottom").click(function(){
		 window.location.href="detail.html";
	})

	var param=JSON.parse(sessionStorage.getItem("buyHouseCondition"));
	console.log(param)
	//recSales/selMoreSellHouseList.do
	$.ajax({
		url: 'https://www.ppfang.top/ppf/recSales/selMoreSellHouseList.do',
		type: 'post',
		dataType: 'json',
		data: {
			// feature:param.feature,
			// houseArea:param.houseArea,
			// houseDec:param.houseDec,
			// houseFloor:param.houseFloor,
			// houseType:param.houseType,
			// isElevator:param.isElevator,
			// isMero:param.isMero,
			// isNew:param.isNew,
			// loopLine:param.loopLine,
			// orientation:param.orientation,
			// property:param.property,
			// that:param.that
			pageNow:1
		},
		success:function(data){
			console.log(data)
			var html=template($("#data").html(),{data:data.data})
			$(".content_content").html(html)
			$(".content_content_bottom").click(function(){
				var houseId=$(this).attr("data-houseId")
				window.location.href="detail_p.html?houseId="+houseId
			})
		}
	})
	
	

});

