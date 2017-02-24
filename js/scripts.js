// Business logic
var echoFunction = function(string) {
  return string;
};

// Front end logic
$(function() {
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    userString = $("input#userInput").val();
    if (!userString) {
      $("#errorFeedback").show();
    } else {
      $("#errorFeedback").hide();
      output = echoFunction(userString);
      $(".response").show();
      $("#echoInput").text(output);
    }
    echoInput = "";
  });
});
