var img1="../img/1.jpeg"
var img2="../img/2.jpeg"
var img3="../img/3.jpeg"
var img4="../img/4.jpeg"
var img5="https://www.iiit.ac.in/img/iiit-new.png"

var count=0;

function imageShow() {

	if(count==0)
	document.getElementById("imgid").src=img1;
	if(count==1)
	document.getElementById("imgid").src=img2;
	if(count==2)
	document.getElementById("imgid").src=img3;
	if(count==3)
	document.getElementById("imgid").src=img4;
	if(count==4)
	document.getElementById("imgid").src=img5;

	count=(count+1)%5;
}
