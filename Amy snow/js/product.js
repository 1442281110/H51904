var sp=document.querySelector("section .list p span");
var liss=document.querySelectorAll("section .section .left ul li");
var lisss=document.querySelectorAll("section .section .left ul li span:nth-of-type(2)");
var divs=document.querySelectorAll("section .section .right div");
var h=0;
for(var i=0;i<liss.length;i++){
	liss[i].onclick=function(){
		for(var i=0;i<liss.length;i++){
			liss[i].className="";
			divs[i].className="";
			lisss[i].className="";
		}
		sp.innerHTML=this.innerText.slice(0,-1);
		this.className="active";
		h=this.getAttribute("dy");
		divs[h].className="active";
		lisss[h].className="active";
	}
}




