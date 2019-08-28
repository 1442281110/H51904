var imgs=document.querySelectorAll(".left img");
var btns=document.querySelector(".left button");
var pws=document.querySelector(".pwds");
var pp=document.querySelector(".p");
var j=0;

btns.onclick=function(){
	j++;
	if(j==4){
		j=0;
	}
	for(var i=0;i<imgs.length;i++){
		imgs[i].style.opacity=0;
	}
	imgs[j].style.opacity=1;
}
var timer=setInterval(btns.onclick,2500);

var ipts=document.querySelectorAll("form input");
ipts[0].onfocus=function(){
	this.nextElementSibling.innerHTML="请输入6-12字母、汉字或者数字组成的用户名";
	this.nextElementSibling.style.color="#666";
}
ipts[0].onblur=function(){
	if(this.value==""){
		this.nextElementSibling.innerHTML="<span><img src="" alt="" /></span>用户名不能为空";
		this.nextElementSibling.style.color="red";
		this.nextElementSibling.style.background="url(../img/error.png) no-repeate center center";
	}
	var reg=/^[0-9a-zA-Z\u4e00-\u9fa5]{6,12}$/;
	if(reg.test(this.value)){
		this.nextElementSibling.innerHTML="输入正确";
		this.nextElementSibling.style.color="green";
	}else{
		this.nextElementSibling.innerHTML="输入格式不正确";
		this.nextElementSibling.style.color="red";
	}
}
ipts[1].onfocus=function(){
	pws.style.display="block";
	pws.style.opacity=1;
	this.nextElementSibling.innerHTML="";
}
ipts[1].onblur=function(){
	if(this.value==""){
		this.nextElementSibling.innerHTML="密码不能为空";
		pws.style.display="none";
		this.nextElementSibling.style.color="red";
	}
	var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)(?![$@+]+$)[0-9a-zA-Z$@+]{8,16}$/;
	if(reg.test(this.value)){
		this.nextElementSibling.innerHTML="输入正确";
		this.nextElementSibling.style.color="green";
		pws.style.display="none";
	}else{
		this.nextElementSibling.innerHTML="输入格式不正确";
		this.nextElementSibling.style.color="red";
		pws.style.display="none";
	}
}
var d=0;
pp.onclick=function(){
	d++;
	var str="";
var arr=[];
for(var i=48,code="";i<=57;i++){
	code=String.fromCharCode(i);
	arr.push(code);
}
for(var i=65,code="";i<=90;i++){
	code=String.fromCharCode(i);
	arr.push(code);
}
for(var i=97,code="";i<=122;i++){
	code=String.fromCharCode(i);
	arr.push(code);
}

while(str.length<4){
	var r=parseInt(Math.random()*(61-0+1)+0);
	if(str.indexOf(arr[r])==-1){
		str+=arr[r];
	}
}
	this.previousElementSibling.innerHTML=str;
}
ipts[2].onfocus=function(){
	this.nextElementSibling.innerHTML="请输入验证码";
	this.nextElementSibling.style.color="";
}
ipts[2].onblur=function(){
	if(this.value==""){
		this.nextElementSibling.innerHTML="验证码不能为空";
		this.nextElementSibling.style.color="red";
	}else{
		var cc=this.previousElementSibling.previousElementSibling.innerHTML;
	if(this.value.toLowerCase()==cc.toLowerCase()){
		this.nextElementSibling.innerHTML="验证码正确";
		this.nextElementSibling.style.color="green";
	}else{
		this.nextElementSibling.innerHTML="输入不正确，请刷新";
		this.nextElementSibling.style.color="red";
	}
	}
	
}

var form=document.querySelector("form");
form.onsubmit=function(){
	
	if(ipts[0].value==""||ipts[1].value==""||ipts[2].value==""){
		return false;
	}
	if(ipts[0].nextElementSibling.style.color=="red"||ipts[1].nextElementSibling.style.color=="red"||ipts[2].nextElementSibling.style.color=="red"){
		return false;
	}
}












