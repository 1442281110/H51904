var btn=document.querySelectorAll(".car ul button");
var box=document.querySelector(".carousel");
var li=document.querySelectorAll(".car li");
var model=document.querySelector(".model");
var src=document.querySelector(".model>div>img");
var ps=document.querySelector(".model>div>p");
var spans=document.querySelectorAll(".model>div>span");
var car=document.querySelector(".car ul");
var arr=["../images/base1.jpg","../images/index11.jpg","../images/base3.jpg","../images/style1.jpg","../images/style3.jpg","../images/picture2.jpg"];
var jj=0;
var index=0;
btn[0].onclick=function(){
	index++;
	if(index==4){
		index=0;
	}
	box.style.marginLeft=index*(-278)+"px";
}
btn[1].onclick=function(){
	index--;
	if(index==-1){
		index=3;
	}
	box.style.marginLeft=index*(-278)+"px";
}
for(var i=0;i<li.length;i++){
	li[i].onclick=function(){
		model.style.opacity=1;
		model.style.zIndex=5;
		src.src=this.firstElementChild.src;
		jj=parseInt(this.firstElementChild.getAttribute("dy"));
	}
	
}
ps.onclick=function(){
	model.style.opacity=0;
	model.style.zIndex=-1;
}
var timerr=setInterval(btn[0].onclick,2500);
car.onmouseover=function(){
	clearInterval(timerr);
}
car.onmouseout=function(){
	timerr=setInterval(btn[0].onclick,2500);
}
spans[0].onclick=function(){
	jj++;
	if(jj==6){
		jj=0;
	}
	src.src=arr[jj];
}
spans[1].onclick=function(){
	jj--;
	if(jj==-1){
		jj=5;
	}
	src.src=arr[jj];
}