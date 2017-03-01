// Business logic
var currentRoll = 0;
var turnScore = 0;
var totalScore = 0;

function rollDie() {
  currentRoll = Math.floor(Math.random() * 6) + 1;
  if (currentRoll === 1) {
    turnScore = 0;
  } else {
    turnScore += currentRoll;
  }
}

function hold() {
  totalScore += turnScore;
  // something to switch players. here and maybe something else in the front end.
}

var endTurn = function() {
  //something to end the turn
};



// var echoFunction = function(string) {
//   return string;
// };

// Front end logic
$(function() {
  var hideAll = function() {
    $("#holdOrRoll").hide();
    $("#endTurnText").hide();
    $("#bust").hide();
    $("#holdButton").hide();
  };

  hideAll();

  $("#rollDie").click(function(){
    hideAll();
    $("#holdOrRoll").show();
    $("#holdButton").show();
    rollDie();
    if (currentRoll === 1) {
      bust();
    } else {
      $("#rollDisplay").text(currentRoll);
      $(".turnDisplay").text(turnScore);
    }
  });

  $("#holdButton").click(function(){
    hideAll();
    $("#endTurnText").show();
    hold();
    $(".turnDisplay").text(turnScore);
    $(".totalDisplay").text(totalScore);
    endTurn();
  });



  var bust = function() {
    hideAll();
    $("#bust").show();
    endTurn();
  };

  // Leaving this here for form syntax in case we later take players' names
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
