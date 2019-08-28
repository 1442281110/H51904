var pp=document.querySelectorAll(".list-two p");
var ps=document.querySelectorAll(".list-three p");
var divss=document.querySelectorAll(".article>div div");
var lasts=document.querySelectorAll(".first a")[2];
console.log(lasts);
var b=0;
for(var i=0;i<pp.length;i++){
	pp[i].onclick=function(){
		for(var i=0;i<pp.length;i++){
			pp[i].style.color="";
			divss[i].className="";
			ps[i].lastElementChild.style.opacity=1;
		}
		this.style.color="red";
		b=this.getAttribute("dy");
		divss[b].className="active";
		ps[b].lastElementChild.style.opacity=0;
		lasts.innerHTML=this.innerText;
	}
}
