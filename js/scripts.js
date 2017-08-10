$(document).ready(function(){
  var side1, side2, side3;
  $("form").submit(function(event) {
     side1 = $(".side1").val();
     side2 = $(".side2").val();
     side3 = $(".side3").val();
    event.preventDefault();
      if (isNaN($("input"))) {
        alert("Please enter a number");
      } else {
          if (side1 === side2 && side1 === side3) {
            $("#triangle-type").text("equilateral");
            $("#sides").text("all sides are equal.");
            $(".text").show();
          } else if (side1 === side2 && side1 !== side3) {
            $("#triangle-type").text("isosceles");
            $("#sides").text("two sides are equal.");
            $(".text").show();
          } else if (side1 !== side2 && side2 === side3) {
            $("#triangle-type").text("isosceles");
            $("#sides").text("two sides are equal.");
            $(".text").show();
          } else {
            $("#triangle-type").text("scalene");
            $("#sides").text("no sides are equal");
            $(".text").show();
        }
      }
  });
});
