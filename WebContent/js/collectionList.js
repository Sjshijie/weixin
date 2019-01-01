$(function(){
	var userId=localStorage.getItem("userId")
	$.ajax({
		url: 'https://www.ppfang.top/ppf/collection/selHouseByCollection.do',
		type: 'get',
		dataType: 'json',
		data: {
			userId:userId
		},
		success:function(data){
			console.log(data)
			var collectionList=data.data
			console.log(collectionList)
			var html=template(document.getElementById('collectionList').innerHTML,{collectionList:collectionList})
			$(".content_content").html(html)

			var houseId=$(".content_content_bottom").attr("data-houseId")
			$(".content_content_bottom").click(function(){
				window.location.href="detail.html?houseId="+houseId
			})
			drawProgress(collectionList.length,collectionList)
		}
	})
	
	 
});

