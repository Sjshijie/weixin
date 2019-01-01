	//https://www.ppfang.top/ppf/userMessage.do

	$(function(){
		$(".agreement_ok").click(function(){
			if($(this).hasClass("agreement_ok")){
				$(this).removeClass("agreement_ok");
			}else{
				$(this).addClass("agreement_ok");
			}
		})

		var ishow=false
		$(".last_right").click(function(){
			ishow=true
			var telephone_value=$(".two_li input[ type='text' ]").val();
			$.ajax({
				url: 'https://www.ppfang.top/ppf/send/sendmsg.do',
				type: 'get',
				dataType: 'json',
				data: {
					phone: telephone_value,
					type:1
				},
				success:function(data){
				 	if(data.msg==-1){
				 		$(".layout-contain").html("您输入的手机号为空")
				 		$(".layout").show(500,function(){
							ishow=false
						})	
				 	}
				 	if(data.msg==2){
				 		$(".layout-contain").html("您输入的格式有误")
				 		$(".layout").show(500,function(){
							ishow=false
						})	
				 	}
				 	
				}
				
			})
			
		})

		$(document).click(function(){
			if(!ishow){
				$(".layout").hide(500)
			}
		})

		$(".btn_ok").click(function(){
			ishow=true
			var sendmsg=$(".last_left input[type='text']").val();
			var userName=$(".content_ul input[type='text']").val();
			var userPhone=$(".two_li input[type='text']").val();
			var userPass=$(".pwd input[type='text']").val();

			$.ajax({
				url: 'https://www.ppfang.top/ppf/user/saveuser.do',
				type: 'post',
				data: {
					sendmsg:sendmsg,
					userName:userName,
					userPhone:userPhone,
					userPass:userPass
				},
				success:function(data){
					console.log(data.msg)
					if(data.msg==1){
						$(".layout-contain").html("注册成功")
						$(".layout").show(500,function(){
							ishow=false
						})	
					}
					if(data.msg==2){
						$(".layout-contain").html("用户已存在")
						$(".layout").show(500,function(){
							ishow=false
						})	
					}
					if(data.msg==-3){
						$(".layout-contain").html("用户名不能为空")
						$(".layout").show(500,function(){
							ishow=false
						})	
					}
					if(data.msg==-4){
						$(".layout-contain").html("电话号码不能为空")
						$(".layout").show(500,function(){
							ishow=false
						})
					}
				}
			})

		})	
	})