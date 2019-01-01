 
	function getVal(){
        var value1 = $('.select-value1').data('value1');
        var value2 = $('.select-value1').data('value2');
        var result='';
        value1 = value1 || '';
        value2 = value2 || '';
        if(value1){
            result= value1;
        }
        if(value2){
            result = result+'-'+ value2;
        }
        return {
            value:[value1, value2],
            result: result
        };
	 }

	$.ajax({
		url:"https://www.ppfang.top/ppf/town/selAllCity.do",
		success:function(data){
			var cityData=[];
			for(var i=0;i<data.data.areas.length;i++){
				cityData.push({level:"1",name:data.data.areas[i].title,id:"1"+(i+1)+"0000",parentId:"100000"})
				for(var j=0;j<data.data.areas[i].towns.length;j++){
					cityData.push({level:"2",name:data.data.areas[i].towns[j].townName,parentId:"1"+(i+1)+"0000"})
				}
			}
			    var data = [],data2 = [];
			    cityData = JSON.stringify(cityData).replace(/\"id\":/g, "\"value\":");
				cityData=JSON.parse(cityData);
			    for (var i = 0,length = cityData.length; i < length; i++) {
			        if (cityData[i].parentId !== '100000') {
			            data2.push(cityData[i]);
			        }else{
			            data.push(cityData[i]);
			        }
			    };
			    $.each(data, function(index, val) {
			        var parentId = val.value;
			        var _val = val;
			        _val.child = [];
			        $.each(data2, function(index, val) {
			            if (val.parentId === parentId) {
			                _val.child.push(val);
			            };
			        });
			    });
			    window.dataJson = data;
				//模拟数据都在json.js里


			$('.select-value').mPicker({
			    //级别
			    level:2,
			    //需要渲染的json，二级联动的需要嵌套子元素，有一定的json格式要求
			    dataJson:dataJson,
			    //true:联动
			    Linkage:true,
			    //显示行数
			    rows:6,
			    //默认值填充
			    idDefault:true,
			    //分割符号
			    splitStr:'-',
			    //头部代码
			    confirm:function(data){
			        //更新json
		        	var _this= this;
		            setTimeout(function(){
		                var json = getVal();
		                var valArr = json.value;
		            },3000);
			        //console.info($('.select-value').data('value1')+'-'+$('.select-value').data('value2'));
			    },
			    cancel:function(){
			        //console.info($('.select-value').data('value1')+'-'+$('.select-value').data('value2'));
			    }
			})
				
			    

			    
			
			

			 
		}
	})

	$.ajax({
		url: 'https://www.ppfang.top/ppf/metro/selmetro.do',
		success:function(data){

			var undergroundData=[]
			for(var i=0;i<data.data.length;i++){
				undergroundData.push({level:"1",name:data.data[i].metName,id:"1"+(i+1)+"0000",parentId:"100000"})
				for(var j=0;j<data.data[i].stations.length;j++){
					undergroundData.push({level:"2",name:data.data[i].stations[j].stationName,parentId:"1"+(i+1)+"0000"})
				}
			}


			var data3 = [],data4 = [];
			    undergroundData = JSON.stringify(undergroundData).replace(/\"id\":/g, "\"value\":");
				undergroundData=JSON.parse(undergroundData);
			    for (var i = 0,length = undergroundData.length; i < length; i++) {
			        if (undergroundData[i].parentId !== '100000') {
			            data4.push(undergroundData[i]);
			        }else{
			            data3.push(undergroundData[i]);
			        }
			    };
			    $.each(data3, function(index, val) {
			        var parentId = val.value;
			        var _val = val;
			        _val.child = [];
			        $.each(data4, function(index, val) {
			            if (val.parentId === parentId) {
			                _val.child.push(val);
			            };
			        });
			    });
			    window.underData = data3;
			    console.log(data3)
			//两级联动选择插件调用：
			$('.select-value1').mPicker({
			    //级别
			    level:2,
			    //需要渲染的json，二级联动的需要嵌套子元素，有一定的json格式要求
			    dataJson:data3,
			    //true:联动
			    Linkage:true,
			    //显示行数
			    rows:6,
			    //默认值填充
			    idDefault:true,
			    //分割符号
			    splitStr:'-',
			    //头部代码
			    confirm:function(data){
			        //更新json
			        var _this= this;
		            setTimeout(function(){
		                var json = getVal();
		                var valArr = json.value;
		            },3000);
			    },
			    cancel:function(){
			        //console.info($('.select-value').data('value1')+'-'+$('.select-value').data('value2'));
			    }
			})
			
		}
	})
	

	










$(function(){
	var time_result=[]
			var timeData=["立即服务","00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","00:30","23:00","23:30"]
			var child=["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","00:30","23:00","23:30","24:00"]
			for(var i=0;i<timeData.length;i++){
				time_result.push({level:"1",name:timeData[i],id:"1"+(i+1)+"0000",parentId:"100000"})
				if(i==0) continue;
				for(var j=0;j<child.length;j++){
					//if(!timeData[j+vi+1]) continue;
					// child.splice(0,i)
					// console.log(child)
					// console.log(child.length)
					if(!child[j+i]) continue
					time_result.push({level:"2",name:child[j+i],parentId:"1"+(i+1)+"0000"})
					
				}	
			}
			// time_result=[
			// 	{level:"1",name:timeData[0],parentId:"100000"},
			// 	{level:"1",name:timeData[1],parentId:"100000"},
			// 	{level:"2",name:timeData[2],parentId:"100000"}
			// ]
			var data5 = [],data6 = [];
			    time_result = JSON.stringify(time_result).replace(/\"id\":/g, "\"value\":");
				time_result=JSON.parse(time_result);
			    for (var i = 0,length = time_result.length; i < length; i++) {
			        if (time_result[i].parentId !== '100000') {
			            data6.push(time_result[i]);
			        }else{
			            data5.push(time_result[i]);
			        }
			    };
			    $.each(data5, function(index, val) {
			        var parentId = val.value;
			        var _val = val;
			        _val.child = [];
			        $.each(data6, function(index, val) {
			            if (val.parentId === parentId) {
			                _val.child.push(val);
			            };
			        });
			    });
			    window.time = data5;
			    console.log(data5)
			//两级联动选择插件调用：
			$('.select-value2').mPicker({
			    //级别
			    level:2,
			    //需要渲染的json，二级联动的需要嵌套子元素，有一定的json格式要求
			    dataJson:data5,
			    //true:联动
			    Linkage:true,
			    //显示行数
			    rows:6,
			    //默认值填充
			    idDefault:true,
			    //分割符号
			    splitStr:'-',
			    //头部代码
			    confirm:function(data){
			        //更新json
			        var _this= this;
		            setTimeout(function(){
		                
		                var json = getVal();
		                var valArr = json.value;
		            },3000);
			    },
			    cancel:function(){
			        //console.info($('.select-value').data('value1')+'-'+$('.select-value').data('value2'));
			    }
			})
})
	 		