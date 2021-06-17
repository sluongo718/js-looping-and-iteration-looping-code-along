// Code your solutions in this file
function writeCards(array, event) {
 const thanks = []
    for (let i = 0; i < array.length; i++) {
        thanks.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return thanks
}

function countDown(n) {
    let countD = -1 
    while (countD < n) {
        console.log(n)
        n--
    }
}