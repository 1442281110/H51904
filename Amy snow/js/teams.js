var sp=document.querySelector("section .list p span");
var liss=document.querySelectorAll("section .teams .left ul li");
var divs=document.querySelectorAll("section .teams .right div");
var imgs=document.querySelectorAll("section .teams .right div h4 img");
var uls=document.querySelectorAll("section .teams .right ul");
var sps=document.querySelectorAll("section .teams .left ul li span:nth-of-type(2)");
var j=null;
for(var i=0;i<liss.length;i++){
	liss[i].onclick=function(){
		for(var i=0;i<liss.length;i++){
			liss[i].className="";
			divs[i].className="";
			uls[i].className="";
			sps[i].className="";
			imgs[i].style.display="none";
		}
		sp.innerHTML=this.innerText.slice(0,-1);
		this.className="active";
		j=this.getAttribute("dy");
		imgs[j].style.display="block";
		divs[j].className="active";
		uls[j].className="active";
		sps[j].className="active";
	}
}
