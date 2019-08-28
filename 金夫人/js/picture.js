var l=document.querySelectorAll("section .lists .left ul li");
var di=document.querySelectorAll("section .lists .article div");
var a=document.querySelectorAll("section .first a");
var lasts=document.querySelectorAll(".first p span")[1];
var boxx=document.querySelector(".boxx");
var bi=document.querySelectorAll(".picture li");

var arr=["陈曼","陈默","张悦","尤奕","尹超","童越"];
var w=0;
for(var i=0;i<l.length;i++){
	l[i].onclick=function(){
		for(var i=0;i<l.length;i++){
			l[i].firstElementChild.style.background="";
			l[i].lastElementChild.lastElementChild.style.opacity=1;
			di[i].style.opacity=0;
			a[2].innerHTML="陈曼";
		}
		this.firstElementChild.style.background="red";
		this.lastElementChild.lastElementChild.style.opacity=0;
		w=this.getAttribute("dy");
		di[w].style.opacity=1;
		a[2].innerHTML=arr[w];
	}
}
for(var i=0;i<bi.length;i++){
	bi[i].onclick=function(){
		boxx.style.display="block";
		boxx.style.opacity="1";
		boxx.firstElementChild.firstElementChild.src=this.firstElementChild.src;
		boxx.firstElementChild.lastElementChild.onclick=function(){
			boxx.style.display="none";
			boxx.style.opacity=0;
		}
	}
}
