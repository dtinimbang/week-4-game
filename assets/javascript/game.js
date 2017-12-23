var random_result;
var lost =0;
var win=0;
var guess =0;


var startGame = function() {
    $(".crystals").empty();

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

}

startGame();

var reset = function(){


}
//event delegation?
$(document).on('click', ".crystal", function() {



   var num = parseInt($(this).attr('data-random'));

   var result = num + 5;

    guess += num;
    console.log(guess);
    if(guess > random_result){
        lost--;
        $("#lost").html("lose: " + lost);
        startGame();
        guess = 0;
        console.log("loser");
    }
    else if (guess === random_result){
        win++
        $("#win").html("win: " + win);
        startGame();
        guess = 0;
        console.log('winner');
    }

    

    
   //console.log(result);


  

});