// Code your solutions in this file
let names = ['Guadalupe', 'Ollie', 'Aki'];


function writeCards(names) {
    let cards = []
    for (let i = 0; i < names.length; i++){
        let message =(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        cards.push(message)
    }
        return (cards)
    
}

function countDown() {
    let i = 10;
    while (i >=0)
    {
        console.log(i--);
    }
}
