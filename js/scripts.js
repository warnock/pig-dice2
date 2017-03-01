// Business logic
var currentRoll = 0;
// var turnScore = 0;
// var totalScore = 0;

function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
}

Player.prototype.rollDie = function() {
  currentRoll = Math.floor(Math.random() * 6) + 1;
  if (currentRoll === 1) {
    this.turnScore = 0;
  } else {
    this.turnScore += currentRoll;
  } return this.turnScore;
}

Player.prototype.hold = function() {
  this.totalScore += this.turnScore;
  return this.totalScore;
  // something to switch players. here and maybe something else in the front end.
}

var endTurn = function() {
  if (currentPlayer === player1) {
    currentPlayer === player2;
  }
  else {
    currentPlayer === player1;
  }
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

  var player1 = new Player("Megan");
  console.log(player1);
  // var player2 = new Player("Nathaniel");
  // var currentPlayer = player1;

  $("#rollDie").click(function(){
    hideAll();
    $("#holdOrRoll").show();
    $("#holdButton").show();
    turnScore = player1.rollDie();
    console.log(player1);
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
    totalScore = player1.hold();
    console.log(player1);
    $(".turnDisplay").text(this.turnScore);
    $(".totalDisplay").text(totalScore);
    // endTurn();
  });

  var bust = function() {
    hideAll();
    $("#bust").show();
    // endTurn();
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
