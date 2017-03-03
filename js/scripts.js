// Business logic
var currentRoll = 0;
var player1 = new Player();
var player2 = new Player();
var currentPlayer = new Player();

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
  // debugger;
  currentPlayer.totalScore += currentPlayer.turnScore;
  currentPlayer.endTurn();
  // something to switch players. here and maybe something else in the front end.
}

Player.prototype.endTurn = function() {
  currentPlayer.turnScore = 0;
  if (player1.name === currentPlayer.name) {
    player1 = currentPlayer;
    currentPlayer = player2;
  } else {
    player2 = currentPlayer;
    currentPlayer = player1;
  }
}

// Front end logic
$(document).ready(function() {
  var hideAll = function() {
    $("#holdOrRoll").hide();
    $("#endTurnText").hide();
    $("#bust").hide();
    $("#player1HoldButton").hide();
  };
  //
  // hideAll();

  $("form#playerNames").submit(function(event) {
    event.preventDefault();
    var inputtedPlayer1Name = $("input#player1Name").val();
    var inputtedPlayer2Name = $("input#player2Name").val();
    if (!inputtedPlayer1Name || !inputtedPlayer2Name) {
      console.log("You must both enter your names.");
    } else {
      player1 = new Player(inputtedPlayer1Name);
      currentPlayer = player1;
      // makeStuff();
      console.log(player1);
      player2 = new Player(inputtedPlayer2Name);
      currentPlayer = player2;
      console.log(player2);
      // makeStuff();
      currentPlayer = player1;
    }
  });


  var bust = function() {
    hideAll();
    $("#bust").show();
  };

  var toggleButtons = function() {
    $(".btn").each(function() {
      if (this.hasAttribute("disabled")) {
        $(this).prop("disabled", false);
      } else {
        $(this).prop("disabled", true);
      }
    });
  };

  // var makeStuff = function() {
  //   $("div#playerInterface").append('<div class="col-md-6 text-align">' +
  //                                     '<h1>' + currentPlayer.name + '</h1>' +
  //                                     '<p>Total Score: ' +
  //                                       '<span id="totalScore"></span>' +
  //                                     '</p>' +
  //                                     '<button type="submit" name="button" class="btn holdButton">Hold</button>' +
  //                                     '<button type="submit" name="button" class="btn rollDieButton">Click the button to roll a die.</button>' +
  //                                   '</div>');
  //   toggleButtons();
  // };

  $("#rollDie").click(function(){
    hideAll();
    $("#holdOrRoll").show();
    $("#holdButton").show();
    turnScore = currentPlayer.rollDie();
    if (currentRoll === 1) {
      bust();
    } else {
      $("#rollDisplay").text(currentRoll);
      $(".turnDisplay").text(turnScore);
    } console.log(player1);
      console.log(player2);
  });

  $("#holdButton").click(function(){
    hideAll();
    $("#endTurnText").show();
    currentPlayer.hold();
    // $(".turnDisplay").text(currentPlayer.turnScore);
    // $("#totalScore").text(currentPlayer.totalScore);
    // $(".totalDisplay").text(currentPlayer.totalScore);
  });

});
