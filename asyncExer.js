"use strict";

/********************************* Number Facts ****************************/
async function getFactOfFavNum() {
    let response = await axios.get("http://numbersapi.com/12?json");
    let factOfNum = response.data.text;
    $("#fav-num-fact").text(factOfNum);
}

async function getFactsOfNums() {
    let response = await axios.get("http://numbersapi.com/5..10");
    let facts = response.data;
    for (let key in facts) {
        let $li = $("<li>").text(facts[key]);
        $("#fav-facts").append($li);
    }
}

async function getFactsOfFourNums() {
    let p1 = axios.get("http://numbersapi.com/1?json");
    let p2 = axios.get("http://numbersapi.com/2?json");
    let p3 = axios.get("http://numbersapi.com/3?json");
    let p4 = axios.get("http://numbersapi.com/4?json");

    let responses = [await p1, await p2, await p3, await p4];
    // console.log(responses);
    // console.log(responses[0].data.text);

    for (let resp of responses) {
        let $li = $("<li>").text(resp.data.text);
        $("#four-facts").append($li);
    }
}

async function showFacts() {
    await getFactOfFavNum();
    await getFactsOfNums();
    await getFactsOfFourNums();
}

showFacts();


/********************************* Deck of Cards ****************************/

async function getACard() {
    let response = await axios.get(
        "http://deckofcardsapi.com/api/deck/new/draw/?count=1"
    );
    
    let card = response.data.cards;
    $("#one-card").text(`${card[0].value} of ${card[0].suit}`)

}

async function getTwoCards() {
    let newShuffledCards = await axios.get(
        "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
        );

    let deckId = newShuffledCards.data["deck_id"];
    // console.log("deckId:", deckId);
    let firstCardResponse = await axios.get(
        `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
        );
    let firstCard = firstCardResponse.data.cards[0];

    let secondCardResponse = await axios.get(
        `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
        );
    let secondCard = secondCardResponse.data.cards[0];
    let $li1 = $("<li>").text(`${firstCard.value} of ${firstCard.suit}`);
    let $li2 = $("<li>").text(`${secondCard.value} of ${secondCard.suit}`);
    $("#two-cards").append($li1);
    $("#two-cards").append($li2);
}   

async function showCards(){
    await getACard();
    await getTwoCards();

}

showCards();