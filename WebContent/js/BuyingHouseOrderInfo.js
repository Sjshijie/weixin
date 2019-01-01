function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 匹配目标参数
	var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
	if (result != null) {
		return decodeURIComponent(result[2]);
	} else {
		return null;
	}
}


function format_number(n) {
	var b = parseInt(n).toString();
	var len = b.length;
	if (len <= 3) { return b; }
	var r = len % 3;
	return r > 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len).match(/\d{3}/g).join(",");
}

var index = getQueryString("index")


var userId = localStorage.getItem("userId")

$.ajax({
	url: 'https://www.ppfang.top/ppf/holand/selHolandOrder.do',
	type: 'get',
	dataType: 'json',
	data: {
		userId: userId,
		pageNow: 1
	},
	success: function (data) {
		console.log(data)
		console.log(index)

		var bidInfo = data.data[index]

		console.log(bidInfo)
		if (bidInfo.type == 1) {
			var type = '荷式'
			var module1_html = '<i><img src="upload/house_pic01.jpg" alt="" /></i>' +
				'<h3>' + data.data[index].villageName + '</h3>' +
				'<p>' + data.data[index].houseModel + '&nbsp;&nbsp;' + data.data[index].houseArea + '㎡&nbsp;&nbsp;' + data.data[index].orientation + '</p>' +
				'<p>' + data.data[index].address + '<span>荷式</span></p>'
			$(".module1").html(module1_html)
			var module2_html = '<li>' +
				'<b>' + data.data[index].listingPrice / 10000 + '万</b>' +
				'<span>当前价</span>' +
				'</li>' +
				'<li>' +
				'<b>' + data.data[index].reservePrice / 10000 + '万</b>' +
				'<span>保留价</span>' +
				'</li>' +
				'<li class="listyle">' +
				'<b>7.6809万</b>' +
				'<span>单价/平</span>' +
				'</li>'
			$(".module-money").html(module2_html)


			var module6_html='<div class="module6">'+
							 '<div class="module6style">'+
							 '<div class="M6Title"><i></i>竞价人</div>'+
							 '<div class="M6Content">'+
							 '<i>选择</i>'+
							 '<span><h3>'+bidInfo.biddUsers[0].userName+'</h3><em>'+ bidInfo.biddUsers[0].BiddTime + '出价</em></span>'+
							 '<span><b>¥'+format_number(bidInfo.biddUsers[0].biddPrice) +'</b></span>'+
							 '</div>'+
							 '</div>'+
							 '</div>'
							 


			$(".dd").append(module6_html)
			// <div class="module6">
			// 			<div class="module6style">
			// 				<div class="M6Title"><i></i>竞价人</div>
			// 				<div class="M6Content">
			// 					<i>选择</i>
			// 					<span><h3>猫***de</h3><em>12/15  11:29出价</em></span>
			// 					<span><b>¥ 9,750,000</b></span>
			// 				</div>
			// 			</div>
			// 		</div>
		}
		if (bidInfo.type == 2) {
			var type = '英式'
			var module1_html = '<i><img src="upload/house_pic01.jpg" alt="" /></i>' +
				'<h3>' + data.data[index].villageName + '</h3>' +
				'<p>' + data.data[index].houseModel + '&nbsp;&nbsp;' + data.data[index].houseArea + '㎡&nbsp;&nbsp;' + data.data[index].orientation + '</p>' +
				'<p>' + data.data[index].address + '<span>荷式</span></p>'
			$(".module1").html(module1_html)
			var module2_html = '<li>' +
				'<b>' + data.data[index].listingPrice / 10000 + '万</b>' +
				'<span>当前价</span>' +
				'</li>' +
				'<li>' +
				'<b>' + data.data[index].reservePrice / 10000 + '万</b>' +
				'<span>保留价</span>' +
				'</li>' +
				'<li class="listyle">' +
				'<b>7.6809万</b>' +
				'<span>单价/平</span>' +
				'</li>'
			$(".module-money").html(module2_html)

			
			var len = bidInfo.biddUsers.length
			for (var i = 0; i < len; i++) {
				if (bidInfo.biddUsers[i].isBidd == 1) {
					var html = '<div class="module5">' +
						'<div class="module5style">' +
						'<div class="M5Title"><i></i>竞价记录<span><a href="#">图表</a><a href="#" class="astyle">列表</a></span></div>' +
						'<div class="M5Content">' +
						'<ul class="M5Icon">' +
						'<li class="M5li"><i class="icon1"></i><em></em></li>' +
						'<li><i></i><em></em></li>' +
						'<li><i></i></li>' +
						'</ul>' +
						'<ul class="M5Info">' +
						'<li>' +
						'<i>选择</i>' +
						'<span><h3>' + bidInfo.biddUsers[i].userName + '</h3>' +
						'<em>' + bidInfo.biddUsers[i].BiddTime + '出价</em></span>' +
						'<span><b>¥ ' + format_number(bidInfo.biddUsers[i].biddPrice) + '</b>' +
						'<em>有效期至 ' + bidInfo.biddUsers[i].expiryDate + '</em></span>' +
						'<p>首付' + bidInfo.biddUsers[i].sale + '</p><p> (买卖合同' + bidInfo.biddUsers[i].finalDate + ')</p>' +
						'</li>' +
						'</ul>' +
						'<div class="linestyle"></div>'+
						'</div>' +
						'</div>'
						
				} else if (bidInfo.biddUsers[i].isBidd == 2) {
					var html = '<div class="module5">' +
						'<div class="module5style">' +
						'<div class="M5Title"><i></i>竞价记录<span><a href="#">图表</a><a href="#" class="astyle">列表</a></span></div>' +
						'<div class="M5Content">' +
						'<ul class="M5Icon">' +
						'<li class="M5li"><i class="icon1"></i><em></em></li>' +
						'<li><i></i><em></em></li>' +
						'<li><i></i></li>' +
						'</ul>' +
						'<ul class="M5Info">' +
						'<li class="M5li">' +
						'<div class="fail"></div>' +
						'<i>选择</i>' +
						'<span><h3>' + bidInfo.biddUsers[i].userName + '</h3>' +
						'<em>' + bidInfo.biddUsers[i].BiddTime + '出价</em></span>' +
						'<span><b>¥ ' + format_number(bidInfo.biddUsers[i].biddPrice) + '</b>' +
						'<em>有效期至 ' + bidInfo.biddUsers[i].expiryDate + '</em></span>' +
						'<p>首付' + bidInfo.biddUsers[i].sale + '</p><p> (买卖合同' + bidInfo.biddUsers[i].finalDate + ')</p>' +
						'</li>' +
						'</ul>' +
						'<div class="linestyle"></div>'+
						'</div>' +
						'</div>'

				}
				else if (bidInfo.biddUsers[i].isBidd == 3) {
					var html = '<div class="module5">' +
						'<div class="module5style">' +
						'<div class="M5Title"><i></i>竞价记录<span><a href="#">图表</a><a href="#" class="astyle">列表</a></span></div>' +
						'<div class="M5Content">' +
						'<ul class="M5Icon">' +
						'<li class="M5li"><i class="icon1"></i><em></em></li>' +
						'<li><i></i><em></em></li>' +
						'<li><i></i></li>' +
						'</ul>' +
						'<ul class="M5Info">' +
						'<li class="M5li">' +
						'<div class="fail"></div>' +
						'<i>选择</i>' +
						'<span><h3>' + bidInfo.biddUsers[i].userName + '</h3>' +
						'<em>' + bidInfo.biddUsers[i].BiddTime + '出价</em></span>' +
						'<span><b>¥ ' + format_number(bidInfo.biddUsers[i].biddPrice) + '</b>' +
						'<em>有效期至 ' + bidInfo.biddUsers[i].expiryDate + '</em></span>' +
						'<p>首付' + bidInfo.biddUsers[i].sale + '</p><p> (买卖合同' + bidInfo.biddUsers[i].finalDate + ')</p>' +
						'</li>' +
						'</ul>' +
						'<div class="linestyle"></div>'+
						'</div>' +
						'</div>'

				}
				$(".dd").append(html)
			}
		}
		var module3_html = '<li>' +
				'<i class="M2aIcon1"></i>' +
				'<span>报名人数</span>' +
				'<span>' + data.data[index].enrollNum + '</span>' +
				'</li>' +
				'<li>' +
				'<i class="M2aIcon2"></i>' +
				'<span>设置提醒人数</span>' +
				'<span>' + data.data[index].remindNum + '</span>' +
				'</li>' +
				'<li class="listyle">' +
				'<i class="M2aIcon3"></i>' +
				'<span>围观人数</span>' +
				'<span>' + data.data[index].lookerNum + '</span>' +
				'</li>'
				
			$(".people-num").html(module3_html)
	}
})


// <script type="text/javascript">
// <!--
// $(".M5Icon").css('height',$(".M5Info").height()-20);
// $(".M5Icon li").css('height',$(".M5Info li").height()+45);
// M5Infoli=$(".M5Info li").height()
// $(".M5Icon li em").css('height',M5Infoli-$(".M5Info li i").height()+40);
// -->
// </script>

