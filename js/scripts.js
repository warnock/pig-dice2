// Business logic
var currentRoll = 0;
// var turnScore = 0;
// var totalScore = 0;
var player1 = new Player("Megan");
var player2 = new Player("Nathaniel");

function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
}

Player.prototype.rollDie = function() {
  currentRoll = Math.floor(Math.random() * 6) + 1;
  if (currentRoll === 1) {
    currentPlayer.endTurn();
  } else {
    currentPlayer.turnScore += currentRoll;
  } if (currentPlayer.totalScore + currentPlayer.turnScore >= 100) {
    alert("You're a big weiner!");
  } else {
  return currentPlayer.turnScore;}
}

Player.prototype.hold = function() {
  currentPlayer.totalScore += currentPlayer.turnScore;
  currentPlayer.endTurn();
  // something to switch players. here and maybe something else in the front end.
}

Player.prototype.endTurn = function() {
  currentPlayer.turnScore = 0;
  if (player1 === currentPlayer) {
    player1 = currentPlayer;
    currentPlayer = player2;
  } else {
    player2 = currentPlayer;
    currentPlayer = player1;
  } console.log(currentPlayer);
}

// Front end logic
// $(function() {
  var hideAll = function() {
    $("#holdOrRoll").hide();
    $("#endTurnText").hide();
    $("#bust").hide();
    $("#player1HoldButton").hide();
  };
  // $("#player2HoldButton").prop("disabled", true);
  // $("#player2RollDie").prop("disabled", true);
  // $("#player1TotalScore").text("0");
  // $("#player2TotalScore").text("0");
  hideAll();

  $("#rollDie").click(function(){
    hideAll();
    $("#holdOrRoll").show();
    $("#holdButton").show();
    turnScore = currentPlayer.rollDie();
    console.log(currentPlayer);
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
    totalScore = currentPlayer.hold();
    console.log(currentPlayer);
    $(".turnDisplay").text(currentPlayer.turnScore);
    $("#totalScore").text(totalScore);
    $(".totalDisplay").text(totalScore);
    endTurn();
  });

  var bust = function() {
    hideAll();
    $("#bust").show();
    endTurn();
  };

  // var endTurn = function() {
  //   currentPlayer.turnScore = 0;
  //   $(".btn").each(function() {
  //     if (this.hasAttribute("disabled")) {
  //       $(this).prop("disabled", false);
  //     } else {
  //       $(this).prop("disabled", true);
  //     }
  //   });
  // };
// });
