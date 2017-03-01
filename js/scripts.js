// Business logic
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// var echoFunction = function(string) {
//   return string;
// };

// Front end logic
$(function() {
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    // userString = $("input#userInput").val();
    // if (!userString) {
    //   $("#errorFeedback").show();
    // } else {
    //   $("#errorFeedback").hide();
    //   output = echoFunction(userString);
    $(".response").show();
    //   $("#echoInput").text(output);
    // }
    debugger;
    var currentRoll = getRandomIntInclusive(1, 6);
    $("#rollDisplay").text(currentRoll);
  });
});
