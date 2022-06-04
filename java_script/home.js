const images = ["#", "grown_ups.jpg", "why_him.jpg", "we_are_the_millers.jpg", "dirty_grandpa.jpg",
	"johnny_english.jpg", "vacation.jpg", "the_hangover.jpg", "just_go_with_it.jpg", "rush_hour.jpg",
	"horrible_bosses.jpg", "lets_be_cops.jpg", "bad_moms.jpg", "21_jump_street.jpg", "crazy_stupid_love.jpg", 
	"game_night.jpg"];

function getNumList() {
	const options = Array.from(Array(images.length).keys());
	const output = [];
	for (let i = 0; i < 8; i++) { // number 8 represents number of images on a page
		var num = Math.floor(Math.random()*(options.length-1))+1;
		output.push(options[num]);
		options.splice(num, 1);
	}
	return output;
};
setInterval(function() { 
	const randomNums = getNumList();
	document.getElementById("imageTwo").src= "images/" + images[randomNums[0]];
	document.getElementById("imageThree").src= "images/" + images[randomNums[1]];
	document.getElementById("imageFour").src= "images/" + images[randomNums[2]];
	document.getElementById("imageFive").src= "images/" + images[randomNums[3]];
	document.getElementById("imageSix").src= "images/" + images[randomNums[4]];
	document.getElementById("imageSeven").src= "images/" + images[randomNums[5]];
	document.getElementById("imageEight").src= "images/" + images[randomNums[6]];
	document.getElementById("imageNine").src= "images/" + images[randomNums[7]];
}, 5000);