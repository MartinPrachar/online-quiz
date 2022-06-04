
const quests = ["#", "quest1", "quest2", "quest3", "quest4", "quest5", "quest6", "quest7", "quest8", 
	"quest9", "quest10", "quest11", "quest12", "quest13", "quest14", "quest15"];
const correctAnswers = ["#", "A", "A", "A", "A", "B", "B", "B", "B", "C", "C", "C", "C", "D", "D", "D"];
const images = ["#", "grown_ups.jpg", "why_him.jpg", "we_are_the_millers.jpg", "dirty_grandpa.jpg",
	"johnny_english.jpg", "vacation.jpg", "the_hangover.jpg", "just_go_with_it.jpg", "rush_hour.jpg",
	"horrible_bosses.jpg", "lets_be_cops.jpg", "bad_moms.jpg", "21_jump_street.jpg", "crazy_stupid_love.jpg", 
	"game_night.jpg"];
let counter = 1;
let answerCounter = 0;
let questions = 10;

const randomOrder = ["#"];

while (randomOrder.length < (questions+1)) {
	let num = Math.floor(Math.random()*15); // 15 number of all questions
	if (!randomOrder.includes(num+1)){
		randomOrder.push(num+1);
	}
}

document.getElementById(quests[randomOrder[counter]]).className = 'active';
document.getElementById("image").src = "images/" + images[randomOrder[counter]];

function showAnswer() {

	let btnGroup = document.getElementsByName("opt"+randomOrder[counter]);
	let btnSelection = null;

	for(let i = 0; i < btnGroup.length; i++) { // checking options
		if(btnGroup[i].checked)
			btnSelection = btnGroup[i].value;
	}
	
	if (btnSelection) { // answer is selected
		// 
		if (btnSelection==correctAnswers[randomOrder[counter]]) { // correct answer
			document.getElementById("opt"+randomOrder[counter]+btnSelection).style.backgroundColor = "#4bed42";
			answerCounter++;
		} else { // incorrect answer
			document.getElementById("opt"+randomOrder[counter]+btnSelection).style.backgroundColor = "red";
			document.getElementById("opt"+randomOrder[counter]+correctAnswers[randomOrder[counter]]).style.backgroundColor = "#4bed42";
		}
		document.getElementById("image").src = "images/answ_" + images[randomOrder[counter]];
		document.getElementById("trivia"+randomOrder[counter]).style.display = "block";
		document.getElementById("submit-next").innerHTML = "NEXT";
		document.getElementById( "submit-next" ).setAttribute( "onClick", "javascript: nextQuestion();" );
	} else { // no answer selected
		alert("No ansewer selected!");
	}
};

function nextQuestion() {
	if (counter==questions) { // last question
		localStorage.setItem("scoreStorage",answerCounter);
		window.location.href = "outcome.html";
	}
	else { // next question
		document.getElementById(quests[randomOrder[counter]]).className = 'passive';
		counter++;
	
		document.getElementById(quests[randomOrder[counter]]).className = 'active';
		document.getElementById("trivia"+randomOrder[counter]).style.display = "none";
		document.getElementById("questNum").innerHTML = 'Question '+counter;
		document.getElementById("image").src = "images/" + images[randomOrder[counter]];
		
		document.getElementById("submit-next").innerHTML = "SUBMIT";
		document.getElementById( "submit-next" ).setAttribute( "onClick", "javascript: showAnswer();" );
	}
};

function hint() {
	let correctAns = Math.floor((randomOrder[counter]-1)/4);
	let randomAns = Math.floor(Math.random() * 4);
	
	while (randomAns==correctAns){ // answer from incorrect options
		randomAns = Math.floor(Math.random() * 4);
	}
	let asciiChar1 = String.fromCharCode(correctAns+65);
	let asciiChar2 = String.fromCharCode(randomAns+65);
	document.getElementById("opt"+randomOrder[counter]+asciiChar1).style.backgroundColor = "lightgray";
	document.getElementById("opt"+randomOrder[counter]+asciiChar2).style.backgroundColor = "lightgray";
}

function endQuiz(redirectLink) {
	let isExecuted = confirm("Are you sure to execute this action?");
	if (isExecuted) {
		window.location.href = redirectLink;
	}
};