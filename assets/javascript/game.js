$(document).ready(function() {
   
    randomNumber = Math.floor((Math.random() * 120) + 19);
    var red = Math.floor(Math.random() * 12) + 1; 
    var multi = Math.floor(Math.random() * 12) + 1; 
    var green = Math.floor(Math.random() * 12) + 1; 
    var blue = Math.floor(Math.random() * 12) + 1; 
    var yourNumber = 0;
    var audio = new Audio("https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90");
    
    var wins = 0;
    var losses = 0;
    
    var name = ['', '', '', ''];
    gameOver = false;
    
    // FUNCTIONS
    //================================================================
    
      function scoreSum(sumTotal) {
        //yourNumber+=sumTotal
        yourNumber = yourNumber + sumTotal;
        console.log("", yourNumber);
      }
    
      function scoreCount() {
        //console.log("Wins: " + wins + " | Losses: " + losses);
    
        if (yourNumber === randomNumber){
          wins++;
          $(".winCounter").html("Wins: " +wins);
          $('#gameStatus').text('You won!')
          gameOver = true;
        }
    
        else if (yourNumber > randomNumber){
          losses++;
          $(".lossCounter").html("Losses: " +losses);   
          $('.gameStatus').text('You Lost!')
          gameOver = true;
        }
    
        restartGame();
    
      } //end scoreCount
    
      var redCrystal = $("crystalOne");
      redCrystal.attr("data-let", red);
      console.log("crystalOne Value", red);
    
      var multiCrystal = $("crystalTwo");
      multiCrystal.attr("data-let", multi);
      console.log("crystalTwo Value", multi);
    
      var greenCrystal = $("crystalThree");
      greenCrystal.attr("data-let", green);
      console.log("crystalThree Value", green);
    
      var blueCrystal = $("crystalFour");
      blueCrystal.attr("data-let", blue);
      console.log("crystalFour Value", blue);
    
        
    
    // CRYSTAL ON CLICK FUNCTION
    //================================================================
     
    
    
      $(".crystalOne").on("click", function(){
      $(".crystalOne").addClass("animated bounce");
           setTimeout(function () {
           $(".crystalOne").delay(1000).removeClass("animated bounce");
        }, 1000);
        scoreSum(red);
        console.log("crystalOne On-Click", red);
        $(".yourNumber").html(yourNumber);
        scoreCount();
        audio.play();
      });
      
    
      $(".crystalTwo").on("click", function(){
      $(".crystalTwo").addClass("animated bounce");
           setTimeout(function () {
           $(".crystalTwo").delay(1000).removeClass("animated bounce");
        }, 1000);
        scoreSum(multi);
        console.log("crystalTwo On-Click", multi);
        $(".yourNumber").html(yourNumber);
        scoreCount();
      });
    
      $(".crystalThree").on("click", function(){
      $(".crystalThree").addClass("animated bounce");
           setTimeout(function () {
           $(".crystalThree").delay(1000).removeClass("animated bounce");
        }, 1000);
        scoreSum(green);
        console.log("crystalThree On-Click", green);
        $(".yourNumber").html(yourNumber);
        scoreCount();
      });
    
      $(".crystalFour").on("click", function(){
      $(".crystalFour").addClass("animated bounce");
           setTimeout(function () {
           $(".crystalFour").delay(1000).removeClass("animated bounce");
        }, 1000);
        scoreSum(blue);
        console.log("crystalFour On-Click", blue);
        $(".yourNumber").html(yourNumber);
        scoreCount();
      });
    
      function targetNumber(){
    
        $(".targetNumber").html(randomNumber);
      console.log("Random Number: ", randomNumber);
      } 
    
      targetNumber();
    
      function restartGame(){
    
        if(gameOver === true){
    
          randomNumber = Math.floor((Math.random() * 102) + 19);
          red = Math.floor((Math.random() * 12) + 1);
          multi = Math.floor((Math.random() * 12) + 1);
          green = Math.floor((Math.random() * 12) + 1); 
          blue = Math.floor((Math.random() * 12) + 1);
          yourNumber = 0; 
          gameOver = false;
    
    
          targetNumber();
          $(".yourNumber").html(yourNumber);
    
        }
    
      }
    
    });
          