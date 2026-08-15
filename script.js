//your JS code here. If required.
const level = document.getElementById("level");
let count =0;
while(level !=null){
	count+=1;
	level=level.parentElement;
}
alert(`The level of the element is: ${count}`)