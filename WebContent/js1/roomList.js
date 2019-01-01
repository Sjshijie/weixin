$(function(){
	
	
	 getHouseList();
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
});
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
	//获取list数据
	 function getHouseList(){
             /*    $.ajax({
					 
                     type: "POST", //请求的方式，也有get请求
                     url: "http://192.168.8.164:8080/ppf/housing/selQuickHouse.do", //请求地址，后台提供的,这里我在本地自己建立了个json的文件做例子
                     data: {
						 pageNow:1,
						 type:1
					 
					 },//data是传给后台的字段，后台需要哪些就传入哪些
                     dataType: "json", //json格式，后台返回的数据为json格式的。
                     success: function(result){
                         var dataObj = result.data.quickHouse; //返回的result为json格式的数据
						
						 console.log("数据",dataObj);
						
                         $.each(dataObj, function(index, item){
                            
							var con ="<div class=div_one><ul><li class=li_left><img src="+item.photoUrl+"></li><li class=li_right><div class=all><div class=circleProgress><div class=circleProgress_weep>"+
										"<i class=i_top>抢手率</i><i class=sorce>"+item.rate+"</i><i class=i_bottom>"+item.collectNum+"人收藏</i></div></div><div class=left><div class=left_ra ra></div></div><div class=right><div class=right_ra ra></div>"+
										"</div></div></li><li class=li_center><p class=title_p>"+item.title1+"</p><p class=content_p>"+item.houseModel+" "+item.totalArea+"m² "+item.towards+"</p><p class=content_p >"+item.villageName+"</p></li></ul></div>"+
										"<div class=div_two><ul><li class=left_li>"+item.rentMoney+"/月</li><li class=right_li><ul><li><img src=img/icon1.png><span>精装<a>家具齐全</a></span></li><li>"+
										"<img src=img/icon1.png><span>11号线<a>近地铁</a></span></li><li><img src=img/icon1.png><span>万达广场<a>近商圈</a></span></li></ul></li></ul></div>"+
										"<div class=div_three><ul><li class=left_li>专家点评</li><li class=right_li><div class=text><span>天下第一好房</span></div><div class=img><div class=img_img></div></div>"+
										"<div class=name>王丹初级</div></li></ul></div>"
										 fun(item.rate,0);								
										console.log(con);
										
										$("#content_content_bottom").append(con); 

                         });
                         //    //可以在控制台打印一下看看，这是拼起来的标签和数据
                        //$("#con").html(con); //把内容入到这个div中即完成
                     }    
                })          	*/
		 var str='<div class="content_content_bottom">'+
				'<div class="div_one">'+
			'<ul>'+
				'<li class="li_left"><img alt="" src="upload/room.jpg"></li>'+
				'<li class="li_right">'+
						'<div class="all">'+
							'<div class="circleProgress">'+
								'<div class="circleProgress_weep">'+
									'<i class="i_top">抢手率</i>'+
									'<i class="sorce">4.0%</i>'+
									'<i class="i_bottom">0人收藏</i>'+
								'</div>'+
						    '</div>'+
						    '<div class="left">'+
						    	  '<div class="left_ra ra"></div>'+
						   ' </div>'+
							'<div class="right">'+
								  '<div class="right_ra ra"></div>'+
							'</div>'+
						' </div> '+ 
				'</li>'+
				'<li class="li_center">'+
					'<p class="title_p">静安寺小资美宅 </p>'+
					'<p class="content_p">2室1厅 88m² 南</p>'+
					'<p class="content_p">静安豪景苑</p>'+
				'</li>'+
			'</ul>'+
		'</div>'+
		'<div class="div_two">'+
			'<ul>'+
				'<li class="left_li">4300/月</li>'+
				'<li class="right_li">'+
					'<ul>'+
						'<li>'+
							'<img alt="" src="img/icon1.png">'+
							'<span>精装<a>家具齐全</a></span>'+
						'</li>'+
						'<li>'+
							'<img alt="" src="img/icon1.png">'+
							'<span>11号线<a>近地铁</a></span>'+
						'</li>'+
						'<li>'+
							'<img alt="" src="img/icon1.png">'+
							'<span>万达广场<a>近商圈</a></span>'+
						'</li>'+
					'</ul>'+
				'</li>'+
			'</ul>'+
		'</div>'+
		'<div class="div_three">'+
			'<ul>'+
				'<li class="left_li">'+
					'专家点评'+
				'</li>'+
				'<li class="right_li">'+
					'<div class="text">'+
						'<span>天下第一好房</span>'+
					'</div>'+
					'<div class="img">'+
						'<div class="img_img"></div>'+
					'</div>'+
					'<div class="name">王丹初级</div>'+
				'</li>'+
			'</ul>'+
		'</div>'+
	'</div>';
		 $(".content_content").append(str);
			}