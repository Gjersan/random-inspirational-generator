const inspirationObj = {
    line1: [
        'Sun',
        'Moon',
        'Venus',
        'Supernova'
    ],
    line2: [
        'Calm',
        'Innerpeace',
        'Determination',
        'Mindfullness'
    ],
    line3: [
        'Success',
        'Victory',
        'Moneygain',
        'New relationship'
    ],
    randomNumber() {
        return Math.floor(Math.random() * 3);
    },
    generateMessage() {
        return `You are a ${this.line1[this.randomNumber()]}, you will find ${this.line2[this.randomNumber()]} at this moment and that will help you gain a ${this.line3[this.randomNumber()]} in the near future!`;
    },
    formatMessage() {
        return inspirationObj.generateMessage().toUpperCase();
    }
};

const inspireMe = () => console.log(inspirationObj.formatMessage());

inspireMe();