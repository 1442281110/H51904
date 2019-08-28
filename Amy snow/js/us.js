var sp=document.querySelector("section .list p span");
var liss=document.querySelectorAll("section .section .left ul li"); 
var sps=document.querySelectorAll("section .section .left ul li span:nth-of-type(2)");
var pp=document.querySelectorAll("section .section .right pp");
var j=null;
for(var i=0;i<liss.length;i++){
	liss[i].onclick=function(){
		for(var i=0;i<liss.length;i++){
			liss[i].className="";
			sps[i].className="";
			pp[i].className="";
		}
		this.className="active";
		sp.innerText=this.innerText.slice(0,-1);
		j=this.getAttribute("dy");
		sps[j].className="active";
		pp[j].className="active";
	}
}
