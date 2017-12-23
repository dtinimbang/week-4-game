var random_result;
var lost =0;
var win=0;
var guess =0;


var startGame = function() {
    $(".crystals").empty(); //empty the crystal

    var image =[]
    [0]= 

    random_result = Math.floor(Math.random() * 69) + 30; // generate new result
    console.log(random_result); // log new number
    
    $("#result").html('Random Result:  ' + random_result);
    for (var i = 0; i<4; i++){ // loop 4 times and every time create random number
    
        var random = Math.floor(Math.random() * 11) +1; // randomizes no.
       // console.log(random);
    
        var crystal = $("<div>"); // creat the div
        crystal.attr({          //add attribute to class
            "class": 'crystal',
            "data-random": random  // game with 4 crystals and a random result
        });
    
       
    
        $(".crystals").append(crystal);
    }

}

startGame(); //start game

var reset = function(){


}
//event delegation
// when page loads it will find everything to work with
$(document).on('click', ".crystal", function() {



   var num = parseInt($(this).attr('data-random'));

   var result = num + 5;

    guess += num;
    $("#guess").html("guess:  "  + guess);
    console.log(guess);
    if(guess > random_result){
        lost++;
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