// Business logic
function rollDie() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var turnScore = 0;
var totalScore = 0;
// var echoFunction = function(string) {
//   return string;
// };

// Front end logic
$(function() {
  $("#rollDie").click(function(){
    $("#holdOrRoll").show();
    $("#hold").show();
    var currentRoll = rollDie();
    turnScore += currentRoll;
    $("#rollDisplay").text(currentRoll);
    $(".turnDisplay").text(turnScore);
  });

  $("#hold").click(function(){
    $("#holdOrRoll").hide();
    $("#endTurn").show();
    totalScore += turnScore;
    $(".turnDisplay").text(turnScore);
    $(".totalDisplay").text(totalScore);
  });

  // $("form#inputForm").submit(function(event){
  //   event.preventDefault();
    // userString = $("input#userInput").val();
    // if (!userString) {
    //   $("#errorFeedback").show();
    // } else {
    //   $("#errorFeedback").hide();
    //   output = echoFunction(userString);
    //   $("#echoInput").text(output);
    // }
    // debugger;
  // });
});
