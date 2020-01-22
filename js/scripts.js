$(document).ready(function(){
  $("#count").submit(function(event){
    event.preventDefault();
    var countupto = parseInt($("input#countupto").val());
    var countupby = parseInt($("input#countupby").val());

    for (var index = 0; index <= countupto; index += countupby) {
      $("#results").append("<li>" + index + "</li>");
    }

  // Error Handling
  if ((isNaN(countupby) || (isNaN(countupto))) || countupby === "" || countupto === "") {
    alert("Please enter a number!")
  } else if (countupby > countupto) {
    alert("'Count up to number' must be larger than 'count up by number!'") 
  } else if (countupto <= 0 || countupby <= 0) {
    alert("Please enter a positive number!")
  }
})
})

