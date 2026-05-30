function makeid(l) {
  // write your code here
	let ans = "";
	let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for(let i=0; i<l; i++){
		ans += char_list.charAt(
			Math.floor(Math.random()*char_list.length)
		)
	}
	return ans;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
