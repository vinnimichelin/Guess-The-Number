let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10
let maxNumber = 100

function newGame(){
    window.location.reload()
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function compareNumbers (){
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' '+ userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if (attempts < maxGuesses){

    if(userNumber > computerNumber && userNumber < maxNumber){
        document.getElementById('textOutput').innerHTML = 'Your number is too high.'
        document.getElementById('inputBox').value = ''
        attempts++
        document.getElementById('attempts').innerHTML = attempts
    }

    else if (userNumber < computerNumber && userNumber < maxNumber){
        document.getElementById('textOutput').innerHTML = 'Your number is too low.'
        document.getElementById('inputBox').value = ''
        attempts++
        document.getElementById('attempts').innerHTML = attempts
    }
    else if (userNumber > maxNumber){
        document.getElementById('textOutput').innerHTML = 'Your number is out of the range.'
        document.getElementById('inputBox').value = ''
        document.getElementById('attempts').innerHTML = attempts
    }

    else {
        document.getElementById('textOutput').innerHTML = 'Congratulations, you guess the number!'
        attempts++
        document.getElementById('attempts').innerHTML = attempts
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
}

else{
    document.getElementById('textOutput').innerHTML = 'You lose. The computer number was ' + computerNumber
    document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
}

}