var lil=document.querySelectorAll(".base-ul>li");
var ul=document.querySelectorAll("section .three .threes .base-ul>ul");
var bbs=document.querySelectorAll("section .three .threes .base-ul>ul>li");
var spn=document.querySelectorAll("section .first p span");
var h2=document.querySelector("legend");

function f1(){
	

var nn=0;
for(var i=0;i<lil.length;i++){
	lil[i].onclick=function(){
		nn++;
		for(var i=0;i<lil.length;i++){
			lil[i].className="";
			lil[i].nextElementSibling.style.display="none";
			lil[i].lastElementChild.lastElementChild.style.display="block";
		}
		this.className="active";
		if(nn%2==1){
			this.className="active";
			this.nextElementSibling.style.display="block";
			this.lastElementChild.lastElementChild.style.display="none";
		}else{
			this.className="";
			this.nextElementSibling.style.display="none";
		}
		spn[2].innerHTML=this.innerText+">";
		h2.innerHTML=this.innerText+"<h4>XULEMBURG CORRIDOR</h4>";
	}
}
}
f1();

function f2(){
for(var i=0;i<bbs.length;i++){
	
	bbs[i].onclick=function(){

		for(var i=0;i<bbs.length;i++){
			bbs[i].className="";
		}
		this.className="active";
		console.log(this.innerHTML);
		spn[3].innerHTML=this.innerText;
	}
}
}
f2();
