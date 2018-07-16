$(document).ready(function(){




var random_num;
var lost = 0;
var win = 0;
var add = 0;

var startGame = function(){
    $(".crystals").empty();

    var images = ["http://newscenter.lbl.gov/wp-content/uploads/sites/2/2013/02/snowflake11.jpg",
                  "https://fossbytes.com/wp-content/uploads/2017/04/time-crystals-.jpg",
                  "https://i.pinimg.com/originals/75/a6/4a/75a64afccf1083cf286db57791a8421d.jpg ",
                  "https://i.pinimg.com/originals/3c/d1/48/3cd14898c307f7dcbdf18ea2ddc0d597.jpg"]    

    random_num = Math.floor(Math.random() * 100) +20;
console.log();

$('#result').html('Random Number: ' + random_num);


for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random()*11)+ 1;


    var crystal = $("<div>");

        crystal.attr({
            "class": 'crystal',
            "data-random": random
        }); 
    
        crystal.css({
            "background-image":"url('" + images[i] +"')",
            "background-size" : "cover"
             
        });
    

    $(".crystals").append(crystal);


    }
$("#add").html(add) 
}

startGame();


 
 $(document).on('click',".crystal",function (){

    var num = parseInt($(this).attr('data-random'));

    add += num;

    $("#add").html("total Jewels: "+ add)

    console.log(add);
    
    if(add > random_num){
        lost--;
        alert("You lose!!!!");

        $("#loss").html("total loss: " + lost)
        add = 0;
        
        startGame();     
    }
     else if(add===random_num){ 
         win++;

            alert("You Win!!!");
       
         $("#win").html("total wins: " + win);
         add = 0;

         startGame();
     }
 });

});






// make a game with 4 crystals that generate a random number to match the given random number.

//crystals need to have a random value from 1-12.

//when clicking a crystal it should add the number from the previous clicks.

//until it equals the random number.

//If the number is greater we decrement a number to the loss counter.

//If the number is  equal we increment a number to the win counter.

//a new random number that needs to be matched should be generated when there is a win or a loss.

//new random should generate for the four crystals as well.






// make a game with 4 crystals that generate a random number to match the given random number.

//crystals need to have a random value from 1-12.

//a new random number that needs to be matched should be generated when there is a win or a loss.

//new random should generate for the four crystals as well.

//when clicking a crystal it should add the number from the previous clicks.

//until it equals the random number.

//If the number is greater we decrement a number to the loss counter.

//If the number is  equal we increment a number to the win counter.

 