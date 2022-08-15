// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//     }

//     return gifts;
// }

// wrapGifts(gifts);


//writing cards function


function writeCards(cards, eventName) {
    let msgArray = [];
    for (let i=0; i < cards.length; i++) {
        
        let message = `Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`
        msgArray.push(message);
    }
    return msgArray;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "birthday")

// writeCards(cards);

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        --number;
    }
}

