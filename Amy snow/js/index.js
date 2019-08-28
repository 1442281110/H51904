var uls=document.querySelector(".teams .team ul");
var imgs=document.querySelectorAll(".teams .team ul li img");
var p=document.querySelectorAll(".teams .team ul li p");
var h4=document.querySelectorAll(".teams .team ul li h4");
uls.onmouseover=function(e){
	e=e||window.event;
	var target=e.target||e.srcElement;
	if(target.nodeName=="IMG"){
		target.style.transform="scale(1.2)";
		var next=target.parentNode.nextElementSibling.firstElementChild;
		next.style.color="red";
		next.nextElementSibling.style.transform="rotateY(360deg)";
	}
	if(target.nodeName=="P"){
		target.style.transform="rotateY(360deg)";
		target.previousElementSibling.style.color="red";
		target.parentNode.previousElementSibling.firstElementChild.style.transform="scale(1.2)";
	}
}
uls.onmouseout=function(e){
	e=e||window.event;
	var target=e.target||e.srcElement;
	if(target.nodeName=="IMG"){
		target.style.transform="scale(1)";
		var next=target.parentNode.nextElementSibling.firstElementChild;
		next.style.color="#333";
		next.nextElementSibling.style.transform="rotateY(0deg)";
	}
	if(target.nodeName=="P"){
	
		target.style.transform="rotateY(0deg)";
		target.previousElementSibling.style.color="#333";
		target.parentNode.previousElementSibling.firstElementChild.style.transform="scale(1)";
	}
}

