var ll=document.querySelectorAll(".team-right ul li");
var di=document.querySelectorAll(".team-right .introduce div");
var index=null;
var pps=document.querySelector(".pps");
var imgss=document.querySelectorAll(".team-left ul li img");
for(var i=0;i<ll.length;i++){
	ll[i].onclick=function(){
		for(var i=0;i<ll.length;i++){
			di[i].className="";
			imgss[i].className="";
		}
		index=this.getAttribute("dy");
		di[index].className="active";
		imgss[index].className="active";
		pps.lastElementChild.innerHTML=this.lastElementChild.firstElementChild.innerHTML;
	}
}
