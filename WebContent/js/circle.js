function drawProgress(length,data){
	for(var i=0;i<length;i++){
		
			var rate=parseInt(parseInt(data[i].rate)*100)
			
			//var canvas=document.getElementsByTagName("canvas")[0]
			var canvas=document.querySelectorAll(".circle")[i]
			var ctx=canvas.getContext("2d")
			canvas.width=180
			canvas.height=180

			ctx.beginPath();
			// var grad=ctx.createLinearGradient(canvas.offsetHeight/2,canvas.offsetHeight/2,0,canvas.offsetHeight/2,canvas.offsetHeight/2,canvas.offsetHeight/2);  
			// /* 指定几个颜色 */  
			// grad.addColorStop(0,'rgb(216, 9, 0)');    //   
			// grad.addColorStop(0.5,'rgb(225, 255, 0)'); // 绿  
			// grad.addColorStop(1,'rgb(42, 231, 0)');  //hong  
			/* 将这个渐变设置为fillStyle */  
			ctx.strokeStyle = "#f0f0f0"
			/* 绘制矩形 */
			ctx.arc(Math.floor(canvas.offsetWidth),Math.floor(canvas.offsetWidth),Math.floor(canvas.offsetWidth-10),0,Math.PI*2,false);
			ctx.lineWidth =15
			ctx.stroke();  
			ctx.closePath(); 


			
			ctx.beginPath();
			var grad=ctx.createLinearGradient(0,170,0,0);  
			/* 指定几个颜色 */  
			grad.addColorStop(0,'#eb6b90');    //   
			grad.addColorStop(0.33,'#f1c728'); // 绿 
			grad.addColorStop(0.66,'#1cb1b3')
			grad.addColorStop(1,'#3e64ae');  //hong  
			/* 将这个渐变设置为fillStyle */  
			ctx.strokeStyle = grad;
			
			/* 绘制矩形 */  
			ctx.arc(Math.floor(canvas.offsetWidth),Math.floor(canvas.offsetWidth),Math.floor(canvas.offsetWidth-10),-Math.PI/2,Math.PI/50*rate-Math.PI/2,false);
			ctx.lineWidth =15
			ctx.stroke();  
			ctx.closePath(); 


			ctx.font="20px Arial";
			ctx.textAlign="center";
			ctx.fillStyle="#8b8b8b"
			ctx.fillText("抢手率",canvas.offsetWidth,canvas.offsetWidth-35);

			ctx.font="36px Arial";
			ctx.textAlign="center";
			ctx.fillStyle="black"
			ctx.fillText(rate+"%",canvas.offsetWidth,canvas.offsetWidth+8);


			ctx.font="20px Arial";
			ctx.textAlign="center";
			ctx.fillStyle="#8b8b8b"
			ctx.fillText(data[i].collectNum+"人收藏",canvas.offsetWidth,canvas.offsetWidth+40);

	}	
}


function exportcircle(length,data){
	console.log(data)
	for(var i=0;i<length;i++){
			var rate=data[i].totalGrade
			//var canvas=document.getElementsByTagName("canvas")[0]
			var canvas=document.querySelectorAll(".export")[i]
			var ctx=canvas.getContext("2d")
			canvas.width=158
			canvas.height=158

			ctx.beginPath();
			// var grad=ctx.createLinearGradient(canvas.offsetHeight/2,canvas.offsetHeight/2,0,canvas.offsetHeight/2,canvas.offsetHeight/2,canvas.offsetHeight/2);  
			// /* 指定几个颜色 */  
			// grad.addColorStop(0,'rgb(216, 9, 0)');    //   
			// grad.addColorStop(0.5,'rgb(225, 255, 0)'); // 绿  
			// grad.addColorStop(1,'rgb(42, 231, 0)');  //hong  
			/* 将这个渐变设置为fillStyle */  
			ctx.strokeStyle = "#f0f0f0"
			/* 绘制矩形 */  
			ctx.arc(Math.floor(canvas.offsetWidth),Math.floor(canvas.offsetWidth),Math.floor(canvas.offsetWidth-10),0,Math.PI*2,false);
			ctx.lineWidth =15
			ctx.stroke();  
			ctx.closePath(); 



			ctx.beginPath();
			var grad=ctx.createLinearGradient(0,170,0,0);
			/* 指定几个颜色 */  
			
			grad.addColorStop("0",'#eb6b90');   //   
			grad.addColorStop("0.33",'#f1c728'); // 绿 
			grad.addColorStop("0.66",'#1cb1b3')
			grad.addColorStop("1",'#3e64ae');  //hong
			/* 将这个渐变设置为fillStyle */  
			ctx.lineCap = "round"
			ctx.strokeStyle = grad;
			
			/* 绘制矩形 */  
			ctx.arc(Math.floor(canvas.offsetWidth),Math.floor(canvas.offsetWidth),Math.floor(canvas.offsetWidth-10),-Math.PI/2,Math.PI/5*2*rate-Math.PI/2,false);
			ctx.lineWidth =15
			ctx.stroke();  
			ctx.closePath(); 


			ctx.font="20px Arial";
			ctx.textAlign="center";
			ctx.fillStyle="#8b8b8b"
			ctx.fillText("总评",canvas.offsetWidth,canvas.offsetWidth-35);

			ctx.font="36px Arial";
			ctx.textAlign="center";
			ctx.fillStyle="black"
			ctx.fillText(rate,canvas.offsetWidth,canvas.offsetWidth+8);


			ctx.font="20px Arial";
			ctx.textAlign="center";
			ctx.fillStyle="#8b8b8b"
			ctx.fillText(data[i].commentCount+"人已评价",canvas.offsetWidth,canvas.offsetWidth+40);

	}	
}