$(function(){
		$(".all_bottom_left").click(function(){
			if($(".all_bottom_left").hasClass("all_bottom_left1")){
				$(this).removeClass("all_bottom_left1");
			}else{
				$(this).addClass("all_bottom_left1");
			}
			
		})
		
	})