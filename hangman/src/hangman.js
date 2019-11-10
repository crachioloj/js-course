class Hangman {
    constructor (word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'Playing';
    }
    get puzzle() {
        let puzzle = '';
        this.word.forEach(letter => {
            puzzle += this.guessedLetters.includes(letter) || 
                letter === ' ' ? 
                letter : '*';
        });

        return puzzle;
    }
    makeGuess(guess) {
        if (this.status.toLowerCase() !== 'playing') {
            return;
        }

        if (this.remainingGuesses <= 0) {
            return;
        }

        guess = guess.toLowerCase()
        if (this.guessedLetters.includes(guess)) {
            return;
        }
        
        this.guessedLetters = [...this.guessedLetters, guess];
        if (!this.word.includes(guess)) {
            this.remainingGuesses--;
        }

        this.calculateStatus();
    }
    calculateStatus() {
        const finished = this.word.every(letter => this.guessedLetters.includes(letter) || letter === ' ');

        if (this.remainingGuesses <= 0) {
            this.status = 'Failed';
        } else if (finished) {
            this.status = 'Finished';
        } else {
            this.status = 'Playing';
        }
    }
    get statusMessage() {
        let message = ''
        switch (this.status.toLowerCase()) {
            case 'playing':
                message = `Guesses left: ${this.remainingGuesses}`;
                break;
            case 'failed':
                const answer = this.word.join('');
                message = `Nice try! The word was \"${answer}\"`;
                break;
            case 'finished':
                message = 'Great work! You guessed the word!';
        }

        return message;
    }
}

export { Hangman as default };