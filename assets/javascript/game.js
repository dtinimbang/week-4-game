var random_result;
var lost;
var win;

random_result = Math.floor(Math.random() * 69) + 30; // hoisting

function scoreSum(sumTotal) {
    //yourNumber+=sumTotal
    yourNumber = yourNumber + sumTotal;
    console.log("", yourNumber);
  }

$("#result").html('random result: ' + random_result);


    for(var i = 0; i<4; i++){
         
        var random = Math.floor(Math.random() * 11) +1;
        console.log(random);


         var crystal = $("<div>");
         crystal.attr({
             "class": 'crystal',
             "data-random": random 

        
             
         });
         
         $(".crystals").append(crystal);
    }

    $("#red").on('click', function(){
        var num = parseInt($(crystal).attr('data-random'));
        console.log(num);
    });

    

    $("#pink").on('click', function(){
        console.log($(crystal).attr('data-random'));
    });

    $("#purple").on('click', function(){
        console.log($(this));
    });

    $("#green").on('click', function(){
        console.log($(this));
    });