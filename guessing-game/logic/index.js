module.exports = function () {
    this.theNumber = parseInt(Math.random() * 100);
    this.guesses = 0;
    this.isGuessed = false;
    // this.guessNumber =
    this.guess =
        (str) => {
            var num = parseInt(str);
            if (this.isGuessed) {
                return {
                    message: 'number been guessed',
                    guesses: this.guesses,
                    result: 0
                }
            }
            this.guesses++;
            this.isGuessed = this.theNumber === num;
            return this.theNumber === num ? {
                message: 'CONGRATULATIONS! you guess the number',
                guesses: this.guesses,
                result: 0
            } : this.theNumber > num ? {
                message: 'the number is to low',
                guesses: this.guesses,
                result: -1
            } : {
                message: 'the number is to high',
                guesses: this.guesses,
                result: 1
            };

        }
};
