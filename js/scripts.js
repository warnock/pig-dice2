// Business logic
var currentRoll = 0;
// var turnScore = 0;
// var totalScore = 0;
var player1 = new Player("Megan");
var player2 = new Player("Nathaniel");
this.player = player1;
console.log(player1);

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

// Front end logic
$(function() {
  var hideAll = function() {
    $("#holdOrRoll").hide();
    $("#endTurnText").hide();
    $("#bust").hide();
    $("#player1HoldButton").hide();
  };
  $("#player2HoldButton").prop("disabled",true);
  $("#player2RollDie").prop("disabled",true);
  $("#player1TotalScore").text("0");
  $("#player2TotalScore").text("0");
  hideAll();

  $("#player1RollDie").click(function(){
    hideAll();
    $("#holdOrRoll").show();
    $("#player1HoldButton").show();
    turnScore = player1.rollDie();
    console.log(player1);
    if (currentRoll === 1) {
      bust();
    } else {
      $("#rollDisplay").text(currentRoll);
      $(".turnDisplay").text(turnScore);
    }
  });

  $("#player1HoldButton").click(function(){
    hideAll();
    $("#endTurnText").show();
    totalScore = player1.hold();
    console.log(player1);
    $(".turnDisplay").text(this.turnScore);
    $(".totalDisplay").text(totalScore);
    endTurn();
  });

  var bust = function() {
    hideAll();

    $("#bust").show();
    endTurn();
  };

  var endTurn = function() {

  };
});
