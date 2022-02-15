"use strict";

let deckId;

async function drawACardFromDeck() {

    let cardDrawn = await axios.get(
        `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
        );
    let cardImg = cardDrawn.data.cards[0].image;
    let $img = $("<img>").attr("src", cardImg);
    $(".card-area").append($img);
    
    if(cardDrawn.data.remaining == 0) {
        $("#draw-card-btn").remove();
    }
}   

async function drawCards() {
    let newShuffledCards = await axios.get(
        "http://deckofcardsapi.com/api/deck/new/shuffle/"
        );

    deckId = newShuffledCards.data["deck_id"];
    $("#draw-card-btn").on("click", drawACardFromDeck);
}

drawCards();