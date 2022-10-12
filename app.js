const line1 = [
    'Sun',
    'Moon',
    'Meatball-sandwich',
    'Ladder',
    'Champion',
    'Dreadnought',
    'Pimple',
    'Judas',
    'Sandwich artist',
    'Chef'
];

const line2 = [
    'your friends',
    'your family',
    'your body',
    'the neighborhood temple',
    'the Church of scientologi',
    'Jesus Christ',
    'Vladimir Putin',
    'Donald Trump',
    'Brittney Spears'
];


const inspObj = {
    line1: line1[Math.floor(Math.random() * 10)],
    line2: line2[[Math.floor(Math.random() * 9)]],
    generate() {
        return `You are a ${this.line1} to ${this.line2}`;
        
    }
}


const generateMessege = () => inspObj.generate();

console.log(generateMessege());