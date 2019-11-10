import Hangman from './hangman';
import getPuzzle from'./requests';

let game;

const updateRemainingGuessText = () => {
    let guessesText = document.querySelector('#remaining-guesses');
    guessesText.innerHTML = '';
    guessesText.textContent = game.statusMessage;
}

const updatePuzzleText = () => {
    let puzzleText = document.querySelector('#puzzle-word');
    const spans = game.puzzle.split('').map(letter => `<span>${letter}</span>`);
    puzzleText.innerHTML = spans.join('');
}

document.querySelector('#guess-text').addEventListener('input', e => {
    const guess = e.target.value.toLowerCase();
    game.makeGuess(guess);
    e.target.value = '';
    render();
})

document.querySelector('#reset').addEventListener('click', e => {
    startGame();
})

const render = () => {
    updateRemainingGuessText();
    updatePuzzleText();
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    console.log(puzzle);
    game = new Hangman(puzzle, 5);
    render();
}

startGame();

/*
getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
});
*/

/*
const countryCode = 'MX';
getCountry(countryCode).then((country) => {
    console.log(country.name);
}).catch((err) => {
    console.log(`Error: ${err}`)
})

getLocation().then(ipInfo => {
    return getCountry(ipInfo.country);
}).then((country) => {
    console.log(country.name);
}).catch(err => {
    console.log(`Error: ${err}`);
})

// getCurrentCountry().then((country) => {
//     console.log(country.name);
// }).catch((error) => {
//     console.log(error);
// })

*/
// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json();
//     } else {
//         throw new Error('unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((err) => {
//     console.log(err);
// })

// getCountry(countryCode, (error, countryName) => {
//     if (error) {
//         console.log(`ERROR: ${error}`)
//     } else {
//         console.log(countryName)
//     }
// })
