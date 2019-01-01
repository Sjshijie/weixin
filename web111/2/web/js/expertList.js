$(function(){
		$(".all_ul>li ul .left img").height($(".all_ul>li ul .left img").width());
		//fun(0,0);
		//点击选他代办
		$(".btn").click(function(){
			$(".shile").show();
			$(".pay").show()
		});
		//点击关闭弹窗
		$(".call .no").click(function(){
			$(".shile").hide();
			$(".pay").hide()
		});
	})
	//圆环
function fun(num,index){
	if(num<=0.5){
	var number=45+(num*360);
		$(".all_ul>li ul .right:eq("+index+") .left_ra").css("transform","rotate("+number+"deg)");
		$(".all_ul>li ul .right:eq("+index+") .left_ra").css("-webkit-transform","rotate("+number+"deg)");
		$(".all_ul>li ul .right:eq("+index+") .left_ra").css("-moz-transform","rotate("+number+"deg)");
		$(".all_ul>li ul .right:eq("+index+") .left_ra").css("-o-transform","rotate("+number+"deg)");
		$(".all_ul>li ul .right:eq("+index+") .left_ra").css("-ms-transform","rotate("+number+"deg)"); 
		
		$(".all_ul>li ul .right:eq("+index+") .right_ra").css("transform","rotate(45deg)");
		$(".all_ul>li ul .right:eq("+index+") .right_ra").css("-webkit-transform","rotate(45deg)");
		$(".all_ul>li ul .right:eq("+index+") .right_ra").css("-moz-transform","rotate(45deg)");
		$(".all_ul>li ul .right:eq("+index+") .right_ra").css("-o-transform","rotate(45deg)");
		$(".all_ul>li ul .right:eq("+index+") .right_ra").css("-ms-transform","rotate(45deg)");
		
	}else if(num>0.5){
		
		if(num>1){
			num=1;
		}
		var number=45+(num*360)-225+45;
		
		$(".all_ul>li ul .right:eq("+index+") .right_ra").css("transform","rotate("+number+"deg)");
		$(".all_ul>li ul .right:eq("+index+") .right_ra").css("-webkit-transform","rotate("+number+"deg)");
		$(".all_ul>li ul .right:eq("+index+") .right_ra").css("-moz-transform","rotate("+number+"deg)");
		$(".all_ul>li ul .right:eq("+index+") .right_ra").css("-o-transform","rotate("+number+"deg)");
		$(".all_ul>li ul .right:eq("+index+") .right_ra").css("-ms-transform","rotate("+number+"deg)");
		
		$(".all_ul>li ul .right:eq("+index+") .left_ra").css("transform","rotate(225deg)");
		$(".all_ul>li ul .right:eq("+index+") .left_ra").css("-webkit-transform","rotate(225deg)");
		$(".all_ul>li ul .right:eq("+index+") .left_ra").css("-moz-transform","rotate(225deg)");
		$(".all_ul>li ul .right:eq("+index+") .left_ra").css("-o-transform","rotate(225deg)");
		$(".all_ul>li ul .right:eq("+index+") .left_ra").css("-ms-transform","rotate(225deg)"); 
		
	}
 }