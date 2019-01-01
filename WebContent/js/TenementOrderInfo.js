
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

$.ajax({
	url: 'https://www.ppfang.top/ppf/rentHouse/selRentHouseDetailByUser.do',
	type: 'get',
	dataType: 'json',
	data: {
		houseId:houseId
	},
	success:function(data){
		console.log(data)
		
		var M1left_html='<img src="'+data.data.photoUrl+'" alt="" />'
		$(".M1left").html(M1left_html)
		
		


		var M1mid_html='<h3>'+data.data.title1+' </h3>'+
					   '<p>'+data.data.houseModel+'&nbsp;&nbsp;'+
					   '<p>'+data.data.villageName+'</p>'
		$(".M1mid").html(M1mid_html)
		$(".sorce").html(data.data.rate*100+'%')
		$(".i_bottom").html(data.data.collectNum+'人收藏')
		$(".module2 b").html(data.data.rentMoney+'/月')

		$(".module2 span").html('<p><i></i><em>'+data.data.houseDec+'</em>家具齐全</p>'+
								'<p><i></i><em>'+data.data.metroName+'</em>近地铁</p>'+
								'<p><i></i><em>'+data.data.traName+'</em>近商圈</p>')


		
	}
})




