// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
  //console.log(`I'm ${age} years old. Happy birthday to me!`);
  //debugger;
//}

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts){
//for(let i =0; i<gifts.length; i++){
  //  console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
//}
//return gifts;
//}
//wrapGifts(gifts)

let names = ['Charles', 'Samip', 'Ali']
let eventName = 'birthday'

function writeCards(names, eventName){
    for (let i=0; i <names.length; i++){
        console.log(`Thank you ${names[i]}, for the wonderful ${eventName} gift!`);
        //debbuger;
    }
    return names, eventName;
}
writeCards(names, eventName)
