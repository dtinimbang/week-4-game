var random_result;
var lost;
var win;
var previous;





random_result = Math.floor(Math.random() * 69) + 30; // hoisting
console.log(random_result);

$("#result").html('Random Result:  ' + random_result);
for (var i = 0; i<4; i++){

    var random = Math.floor(Math.random() * 11) +1; // randomizes no.
   // console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random  // game with 4 crystals and a random result
    });

    $(".crystals").append(crystal);
}

$(".crystal").on('click', function() {



   var num = $(this).attr('data-random');

   var result = num + 5;

   console.log(result);

  console.log(typeof num);
  

}
);