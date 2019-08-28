var banner=document.getElementsByClassName("banner")[0];
var imgs=banner.getElementsByTagName("img");
var btns=banner.getElementsByTagName("button");
var spans=banner.getElementsByTagName("span");
var j=0;
function f1(){
	for(var i=0;i<imgs.length;i++){
		imgs[i].className="";
	}
}
function f2(){
	for(var i=0;i<spans.length;i++){
		spans[i].className="";
	}
}
for(var i=0;i<btns.length;i++){
	btns[i].onclick=function(){
		if(this.innerHTML=="&gt;"){
			j++;
			if(j==6){
				j=0;
			}
			f1();
			f2();
			imgs[j].className="active";
			spans[j].className="active";
		}
		else{
			j--;
			if(j==-1){
				j=5;
			}
			f1();
			f2();
			imgs[j].className="active";
			spans[j].className="active";
		}
	}
}
for(var i=0;i<spans.length;i++){
	spans[i].onclick=function(){
		f2();
		j=this.getAttribute("dy");
		this.className="active";
		f1();
		imgs[j].className="active";
	}
}
var timer=setInterval(function(){
	btns[1].onclick()
},1000)
banner.onmouseover=function(){
	clearInterval(timer);
}
banner.onmouseout=function(){
	timer=setInterval(function(){
		btns[1].onclick()
	},1000)
}
