	
// var userId=localStorage.getItem("userId")
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 匹配目标参数
  var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
  if (result != null) {
    return decodeURIComponent(result[2]);
  } else {
    return null;
  }
}
var userId=getQueryString("user")
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
          })
      $.ajax({
          url: 'https://www.ppfang.top/ppf/eDetails/selSpeDetails.do',
          type: 'get',
          dataType: 'json',
          data: {
            userId:userId
          },
          success:function(data){
            console.log(data)
            var data=data.data
            $(".name").html(data.realName)
            if(data.gender==0){
              $(".sex").html("女")
            }
            if(data.gender==1){
              $(".sex").html("男")
            }
            if(data.level==1){
              $(".type").html("初级专家")
            }
            if(data.level==2){
              $(".type").html("中级专家")
            }
            if(data.level==3){
              $(".type").html("高级专家")
            }
            $(".img").find("span").html(data.commentCount)

            var personal=data.personal.split(",")
            console.log(personal)
            for (var i=0;i<personal.length;i++){
              var html="<a>"+personal[i]+"</a>"
              $(".personal").append(html)
            }
            var good=data.good.split(",")
            for (var i=0;i<good.length;i++){
              var html="<a>"+good[i]+"</a>"
              $(".good").append(html)
            }

            var area=data.area.split(",")
            for (var i=0;i<area.length;i++){
              var html="<a>"+area[i]+"</a>"
              $(".area").append(html)
            }
            $(".score").html(data.totalGrade+"分")
            $(".workingYear").html(data.workingYear)
            $(".age").html(data.age)
            $(".nation").html(data.nation)
            $(".address").html(data.address.slice(0,2))
            $(".height").html(data.height)
            $(".weight").html(data.weight)
            $(".maritalStatus").html(data.maritalStatus)
            $(".health").html(data.health)
            $(".email").html(data.email)
            $(".graduation").html(data.graduation)
            $(".certificate").html(data.certificate)
            $(".job").html(data.job)
            $(".achievement").html(data.achievement)
            $(".totalGrade").html(data.totalGrade+"分")
            if(!data.media){
              $(".video").hide()
            }else{
              $(".video").show();
              $("#videoId").src(data.media)
            }
            $(".all_top").css({"background-image":"url("+data.lifePhoto+")","background-size":"cover","background-position":"center"})
            $(".imgTitle").css({"background-image":"url("+data.lifePhoto+")","background-size":"cover"})
            console.log(data.commentInfo)
            for (var i=0;i<data.commentInfo.length;i++){
              var html='<div class="userReviews-items">'+
                       '<div class="userReviews-name">'+
                       '<span class="name">'+data.commentInfo[i].userName+'</span>'+
                       '<span class="time">'+data.commentInfo[i].commentTime+'</span>'+
                       '</div>'+
                       '<div class="userReviews-contain">'+data.commentInfo[i].content+'</div>'+
                       '</div>'
              $(".userReviews").append(html)

            }

          }
      })

         
    
	})