var bans=document.getElementsByClassName("banner")[0];
var btns=document.querySelectorAll(".banner button");
var imgs=document.querySelectorAll(".banner img");
var lis=document.querySelectorAll(".banner li");
var j=0;
btns[0].onclick=function(){
	j++;
	if(j==4){
		j=0;
	}
	for(var i=0;i<imgs.length;i++){
		for(var i=0;i<imgs.length;i++){
			imgs[i].className="";
			lis[i].className="";
		}
		lis[j].className="active";
		imgs[j].className="active";
	}
}
btns[1].onclick=function(){
	j--;
	if(j==-1){
		j=3;
	}
	for(var i=0;i<imgs.length;i++){
		for(var i=0;i<imgs.length;i++){
			imgs[i].className="";
			lis[i].className="";
		}
		imgs[j].className="active";
		lis[j].className="active";
	}
}
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		for(var i=0;i<lis.length;i++){
			lis[i].className="";
			imgs[i].className="";
		}
		this.className="active";
		j=this.getAttribute("dy");
		imgs[j].className="active";
	}
}
var timer=setInterval(btns[0].onclick,2500);
bans.onmouseover=function(){
	clearInterval(timer);
}
bans.onmouseout=function(){
	timer=setInterval(btns[0].onclick,2500);
}
