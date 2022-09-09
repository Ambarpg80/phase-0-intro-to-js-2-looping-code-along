// Code your solutions in this file
function writeCards(name,eventName){
    const messages = [];
    for (let i = 0 ; i < name.length ; i++){
    messages.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages;
}
writeCards()

function countDown(number){
    let i = 0;
    while(i <= number){ 
        console.log(number--);
    }
}
countDown(10);