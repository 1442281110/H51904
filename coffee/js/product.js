var h22=document.querySelectorAll(".content h2");
var mm=document.querySelectorAll(".content .content-img img");
var bbss=document.querySelector(".content .listz");
var te=document.querySelectorAll(".content .content-article div");
var arra=["卡布奇诺","拿铁咖啡","摩卡咖啡"];
var tt=null;
for(var i=0;i<h22.length;i++){
	h22[i].onclick=function(){
		for(var i=0;i<h22.length;i++){
			h22[i].className="";
			mm[i].className="";
			te[i].className="";
		}
		this.className="active";
		tt=this.getAttribute("dy");
		mm[tt].className="active";
		te[tt].className="active";
		bbss.innerText=arra[tt];
		
	}
}
