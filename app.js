$('#eventClick').click(function () {
    $('#cardsDrawn').html(JSON.stringify(Game.drawCards()));
    afterText();
});

function afterText() {
    var txt1 = "<b>Insert your warriors name:</b>";        // Create element with HTML  
    var txt3 = document.createElement("input");    // Create with DOM
    txt3.innerHTML = "jQuery!";
    $("#cardsDrawn").after(txt1, txt3);          // Insert new elements after <img>
}

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
function computerChoose() {
    if (computerhand.length == 0) {
        return computerHand[0];
    }
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




//console.log(drawCards());
//console.log(computerHand);
//console.log(playerHand); */



