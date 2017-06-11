//oz converted to ml//

var volume = function(oz) {
  return oz*29.57;
};

//user interface//

$(document).ready(function() {
  $("#millilitre").submit(function(event) {
    var oz = parseFloat($("#oz").val());
    var result = volume(oz);

    $(".output").text(result + " ml");

    event.preventDefault();
  });
});

//kg converted to lb//

var weight = function(kg)
{
  return kg*2.2;
};

/*var lb = parseFloat(prompt("Enter weight in kg"));

var result = weight(lb);

alert(result);*/

$(document).ready(function() {
  $("#lbs").submit(function(event) {
    var kg = parseFloat($("#kg").val());
    var result = weight(kg);

    $(".output1").text(result + " lbs");

    event.preventDefault();
  })
})
