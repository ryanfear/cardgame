$('#eventClick').click(function () {
 //   Game.drawCards();
 //   $(Game.playerHand).each( function(name, damage) {
//        $('#cardsDrawn').append(name + ": " + damage + '<br>')
//    });
    $('#cardsDrawn').html(JSON.stringify(Game.drawCards()));
    afterText();
});

function afterText() {
    var txt1 = "<b>Insert your warriors name:</b>";        // Create element with HTML  
    var txt3 = document.createElement("input");
    txt3.setAttribute("id", "playerInput");
    var btnFight = document.createElement("input");     // Create with DOM
    btnFight.setAttribute("id", "fightButton")
    btnFight.setAttribute("type", "button");
    btnFight.setAttribute("value", "Fight!");
    $("#cardsDrawn").after(txt1, txt3, btnFight);    // Insert new elements after <img>
    fight();

}



function fight() {
$('#fightButton').click(function() {
    Game.fighterPlayer = [];
    Game.fighterComputer = Game.computerHand[0];
    for (let i = 0; i < Game.playerHand.length; i++) {
        if ((document.getElementById("playerInput").value) === Game.playerHand[i].name) {
            Game.fighterPlayer = Game.playerHand[i];
            console.log(Game.fighterPlayer.name);
        }
        } 
        if ((Game.fighterPlayer.hasOwnProperty("name")) === true) {
            
          if (Game.fighterPlayer.damage > Game.fighterComputer.damage) {
                  playerPoints++;
                  Game.winLoseTie = "Win";
                console.log("player win")
              } else if (Game.fighterPlayer.damage < Game.fighterComputer.damage) {
                  computerPoints++;
                  Game.winLoseTie = "Lose";
               console.log("computer win")
              } else {
                Game.winLoseTie = "tie";
              console.log("tie")
              } 
              displayResults();
            } else {
                alert("Invalid warrior");
            }
            //   fightResult = "Tie";  
  //  let fighterPlayer = document.getElementById("playerInput").value;
    console.log(Game.fighterComputer.name);
    
});
}

function displayResults() {
    var vsDisplay = document.createElement("div");
    vsDisplay.setAttribute("id", "matchupDisplay");
    $('#fightButton').after(vsDisplay);
    $('#matchupDisplay').html(Game.fighterPlayer.name + " vs " + Game.fighterComputer.name);
    
    var wltDisplay = document.createElement("div");
    wltDisplay.setAttribute("id", "winlosetieDisplay");
    $('#matchupDisplay').after(wltDisplay);
    
    if (Game.winLoseTie == "Lose" || "Win") {
        $('#winlosetieDisplay').html("You " + Game.winLoseTie + "!")
    } else if (Game.winLoseTie == "tie") {
        $('#winlosetieDisplay').html("The battle was a " + Game.winLoseTie + "!")
    }
    
            
}
/*
if (fighterPlayer.damage > fighterComputer.damage) {
    //  playerPoints++;
    //  fightResult = "Win";
    console.log("player win")
  } else if (fighterPlayer.damage < fighterComputer.damage) {
   //   computerPoints++;
   //   fightResult = "Lose";
   console.log("computer win")
  } else
  console.log("tie")
//   fightResult = "Tie";  
*/
let playerPoints = 0;
let computerPoints = 0;

const Game = {
 mainDeck: 
[{name: "Bulbasaur", damage:60}, 
{name: "Caterpie", damage:40},
{name: "Charmander", damage:60},
{name: "Clefairy", damage:50},
{name: "Jigglypuff", damage:60},
{name: "Mankey", damage:30},
{name: "Meowth", damage:60},
{name: "Nidoran - female", damage:60},
{name: "Nidoran - male", damage:50},
{name: "Oddish", damage:40},
{name: "Pidgey", damage:50},
{name: "Pikachu", damage:50},
{name: "Poliwag", damage:50},
{name: "Psyduck", damage:60},
{name: "Rattata", damage:30}, 
{name: "Squirtle", damage:60}, 
{name: "Vulpix", damage:50}, 
{name: "Weedle", damage:40}],

 drawnCards: [],
 playerHand: [],
 computerHand: [],
 usedDeck: [],
 fighterPlayer: [],
 fighterComputer: [],
 winLoseTie: "",

deal() {
    n = Math.floor(Math.random() * this.mainDeck.length);
    drawnCards = this.mainDeck.splice(n, 1);
},

drawCards(){
    
    for (let i = 0; i < 3; i++) {
        this.deal();
        this.playerHand.push(drawnCards[0]);
    }
    for (let c = 0; c < 3; c++) {
        this.deal();
        this.computerHand.push(drawnCards[0]);
    }
    return this.playerHand;
},

}



/* 
//choose creatures for battle
function setFighters() {
    let fighterComputer = this.computerHand[0];
}

let fighterPlayer
let fighterComputer

let fightResult
let roundCount

//actual battle
function FIGHT() {
    if (fighterPlayer.damage > fighterComputer.damage) {
        playerPoints++;
        fightResult = "Win";
    } else if (fighterPlayer.damage < fighterComputer.damage) {
        computerPoints++;
        fightResult = "Lose";
    } else
    
    fightResult = "Tie";
}




 */



