function highlight() {
    //Write your code here
	const strong = document.querySelectorAll('strong');
	strong.forEach(ele=>{
		ele.style.color = "green";
	});
}


function return_normal() {
    //Write your code here
	const back = document.querySelectorAll('strong');
	back.forEach(ele=>{
		ele.style.color = "black";
	});
    
}
