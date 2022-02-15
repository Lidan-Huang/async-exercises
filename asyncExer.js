"use strict";

async function getFactOfFavNum(){
    let response = await axios.get("http://numbersapi.com/12?json");
    let factOfNum = response.data.text;
    $("#fav-num-fact").text(factOfNum);
}

async function getFactsOfNums() {
    let response = await axios.get("http://numbersapi.com/5..10");
    let facts = response.data;
    for(let key in facts) {
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
    console.log(responses);
    console.log(responses[0].data.text);
    
    for(let resp of responses) {
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