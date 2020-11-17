$(document).ready(function(){

var magic8Ball = {};
	magic8Ball.Answers = ["yes", "no", "maybe", "ask again tomorrow", "most definitely", "absolutely not"];

	$("#answer").hide();

magic8Ball.askQuestion = function(question) {
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

	$("#8ball").effect( "shake" );
	$("#answer").fadeIn(4000);

var randomNumber = Math.random();
var numberForAnswers = randomNumber * this.Answers.length;

var randomIndex = Math.floor(numberForAnswers);

var answer = this.Answers[randomIndex];
$("#answer").text( answer );


	console.log(question);
	console.log(answer);

};

	$("#answer").hide();
var onClick = function() {

setTimeout(
       function() {
	var question = prompt("ASK A YES/NO QUESTION!");
	magic8Ball.askQuestion(question);
	}, 500);
};

 $("#questionButton").click( onClick );

});
