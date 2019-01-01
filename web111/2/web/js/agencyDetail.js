	$(function(){
		$(".all_content ul .video").height($("#videoId").height()+30);
          $("#play").click(function(){
        	  if( $(".all_content ul .video img").is(':hidden')){
             	 $("#videoId")[0].pause();
              	 $(".all_content ul .video img").show();
        	  }else{
        		  $("#videoId")[0].play();
              	 $(".all_content ul .video img").hide();
        	  }
          });
         
	})