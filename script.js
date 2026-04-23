function highlight() {
    //Write your code here
	const strong = document.querySelector('p strong');
	strong.forEach(ele=>{
		ele.style.color = "green";
	});
}


function return_normal() {
    //Write your code here
	const back = document.querySelector('p strong');
	back.forEach(ele=>{
		ele.style.color = "black";
	});
    
}
