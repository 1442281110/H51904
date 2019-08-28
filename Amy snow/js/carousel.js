var img=document.querySelectorAll(".banner img");
var btn=document.querySelectorAll(".banner button");
var li=document.querySelectorAll(".banner li");
var banner=document.querySelector(".banner");
var index=0;
btn[0].onclick=function(){
	index++;
	if(index==4){
		index=0;
	}
	for(var i=0;i<img.length;i++){
		img[i].className="";
		li[i].className="";
	}
	img[index].className="active";
	li[index].className="active";
}
btn[1].onclick=function(){
	index--;
	if(index==-1){
		index=3;
	}
	for(var i=0;i<img.length;i++){
		img[i].className="";
		li[i].className="";
	}
	img[index].className="active";
	li[index].className="active";
}
for(var i=0;i<li.length;i++){
	li[i].onclick=function(){
		for(var i=0;i<li.length;i++){
			li[i].className="";
			img[i].className="";
		}
		this.className="active";
		index=this.getAttribute("dy");
		img[index].className="active";
	}
}
var timer=setInterval(btn[0].onclick,2500);
banner.onmouseover=function(){
	clearInterval(timer);
}
banner.onmouseout=function(){
	timer=setInterval(btn[0].onclick,2500);
}
