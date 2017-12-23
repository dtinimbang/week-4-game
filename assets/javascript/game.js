var random_result;
var lost;
var win;


random_result = Math.floor(Math.random() * 69) + 30; // hoisting
console.log(random_result);

$("#result").html('Random Result:  ');
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