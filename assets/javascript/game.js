var random_result;
var lost =0;
var win=0;
var previous =0;





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



   var num = parseInt($(this).attr('data-random'));

   var result = num + 5;

    previous += num;
    console.log(previous);
    if(previous > random_result){
        console.log("loser");
    }
    else if (previous === random_result){
        console.log('winner');
    }

    

    
   //console.log(result);


  

});