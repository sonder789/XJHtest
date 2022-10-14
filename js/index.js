//轮播图
var autoLi = $(".auto ul li");
var autoImg = $(".auto ul li img");
var num = -1;
var point = $(".point");
var pointDiv = $(".point div");
point_Div.click(
	function(){
		num = $(this).index();
		pointDiv.css("background-color","#CCCCCC");
	autoLi.eq(num).fadeToggle(1500);
	pointDiv.eq(num).css("background-color","#003366");
	}
);
indexSubmit.click(
	function(){
		alert("~请登录或者注册~");
	}
);
function auto(){
	if(num>=2){
		num=0;
	}else{
		num++;
	}
	//autoLi.hide(100);
	pointDiv.css("background-color","#CCCCCC");
	
	autoLi.eq(num).fadeToggle(1500);
	
	pointDiv.eq(num).css("background-color","#003366");
}
addCut_cut.click(
	function(){
		num=num-2;
		auto();
	}
);
addCut_add.click(
	function(){
		//num++;
		auto();
	}
);
//定时器
//setInterval 每隔1000ms执行一次
function setAuto(){
	timer = setInterval("auto()",1500);
}
$(".auto ul").mouseenter(
	function(){
		clearInterval(timer);
		//addCut.finish().css("opacity","1");
		//addCut.show(500);
		//auto();
	}
).mouseleave(
	function(){
		//addCut.finish().css("opacity","0");
		 setAuto();
	}
);
