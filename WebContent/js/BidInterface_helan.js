

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 匹配目标参数
  var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
  if (result != null) {
    return decodeURIComponent(result[2]);
  } else {
    return null;
  }
}


	var index=true
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
			
			var html=template($("#data").html(),{data:data})
			$(".waptable").html(html)

			$(".module5 .module5_li .module5_li_div div").click(function(){
				$(".module5 .module5_li .module5_li_div div").removeClass("cho_div");
				$(this).addClass("cho_div");
			});
			$(".left_div").click(function(){
				index=true
				$(".is").hide()
			})
			$(".right_div").click(function(){
				index=false
				$(".is").show()
			})
			$(".year").change(function(){
				if($(".year option:selected").val()<6&&$(".type option:selected").val()==0){
					$(".rate").html("<option>2.75%</option><option>3.03%</option>")
				}else if($(".year option:selected").val()>5&&$(".type option:selected").val()==0){
					$(".rate").html("<option>3.25%</option><option>3.58%</option>")
				}
				else if($(".year option:selected").val()==1&&$(".type option:selected").val()==1){
					$(".rate").html("<option>3.05%</option><option>3.26%</option><option>3.48%</option><option>3.70%</option><option>3.92%</option><option>4.13%</option><option>4.35%</option><option>4.79%</option>")
				}
				else if($(".year option:selected").val()>1&&$(".year option:selected").val()<6&&$(".type option:selected").val()==1){
					$(".rate").html("<option>3.33%</option><option>3.56%</option><option>3.80%</option><option>4.04%</option><option>4.28%</option><option>4.51%</option><option>4.75%</option><option>5.23%</option>")
				}
				else if($(".year option:selected").val()>5&&$(".type option:selected").val()==1){
					$(".rate").html("<option>3.43%</option><option>3.68%</option><option>3.92%</option><option>4.17%</option><option>4.41%</option><option>4.66%</option><option>4.90%</option><option>5.39%</option>")
				}

				if(index){
					var count=parseInt($(".count").html())*10000
					var rate=parseFloat($(".rate option:selected").val())/1200
					var year=parseInt($(".year option:selected").val())*12
					var top=count*rate*Math.pow(1+rate,year)
					var bottom=Math.pow(1+rate,year)-1
					var yuegong=top/bottom
					$(".yuegong").html(yuegong.toFixed(2)+"元")
					var huaikuan=(yuegong*year/10000).toFixed(2)
					$(".huaikuan").html(huaikuan+"元")
					var lixi=huaikuan-count/10000
					$(".lixi").html(lixi.toFixed(2)+"万元")
				}else{
					var count=parseInt($(".count").html())*10000
					var rate=parseFloat($(".rate option:selected").val())/1200
					var year=parseInt($(".year option:selected").val())*12
					var top=count/year+count*rate
					console.log(top)
				}


			})
			$(".type").change(function(){
				if($(".year option:selected").val()<6&&$(".type option:selected").val()==0){
					$(".rate").html("<option>2.75%</option><option>3.03%</option>")
				}else if($(".year option:selected").val()>5&&$(".type option:selected").val()==0){
					$(".rate").html("<option>3.25%</option><option>3.58%</option>")
				}
				else if($(".year option:selected").val()==1&&$(".type option:selected").val()==1){
					$(".rate").html("<option>3.05%</option><option>3.26%</option><option>3.48%</option><option>3.70%</option><option>3.92%</option><option>4.13%</option><option>4.35%</option><option>4.79%</option>")
				}
				else if($(".year option:selected").val()>1&&$(".year option:selected").val()<6&&$(".type option:selected").val()==1){
					$(".rate").html("<option>3.33%</option><option>3.56%</option><option>3.80%</option><option>4.04%</option><option>4.28%</option><option>4.51%</option><option>4.75%</option><option>5.23%</option>")
				}
				else if($(".year option:selected").val()>5&&$(".type option:selected").val()==1){
					$(".rate").html("<option>3.43%</option><option>3.68%</option><option>3.92%</option><option>4.17%</option><option>4.41%</option><option>4.66%</option><option>4.90%</option><option>5.39%</option>")
				}

				if(index){
					var count=parseInt($(".count").html())*10000
					var rate=parseFloat($(".rate option:selected").val())/1200
					var year=parseInt($(".year option:selected").val())*12
					var top=count*rate*Math.pow(1+rate,year)
					var bottom=Math.pow(1+rate,year)-1
					var yuegong=top/bottom
					$(".yuegong").html(yuegong.toFixed(2)+"元")
					var huaikuan=(yuegong*year/10000).toFixed(2)
					$(".huaikuan").html(huaikuan+"元")
					var lixi=huaikuan-count/10000
					$(".lixi").html(lixi.toFixed(2)+"万元")
				}else{
					var count=parseInt($(".count").html())*10000
					var rate=parseFloat($(".rate option:selected").val())/1200
					var year=parseInt($(".year option:selected").val())*12
					var top=count/year
					console.log(top)
				}
			})
		}


	})

	
