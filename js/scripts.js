// Business logic
function rollDie() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// var echoFunction = function(string) {
//   return string;
// };

// Front end logic
$(function() {
  $("#rollDie").click(function(){
    $(".response").show();
    var currentRoll = rollDie();
    $("#rollDisplay").text(currentRoll);
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
