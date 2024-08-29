// -> We want to generate a random nonsensical sentence
// -> Each sentence contains 3 parts
// -> The zodiac sign, an action, and a person (lover, friend, foe, etc. you name it)

//STEPS TO IMPLEMENT

// 1) Define arrays of potential sentence parts
const zodiacs = ["Aries'", "Taurus'", "Geminis", "Cancers", "Leos", "Virgos",
    "Libras", "Scorpios", "Sagittarius'", "Capricorns", "Aquarius'", "Pisces'"];
const actions = ["meet", "fall in love with", "have an argument", "share a cup of coffee",
    "fight with", "become friends with", "betray"];
const target = ["friend", "best friend", "beatiful person", "old lady",
    "rich person", "Elon Musk", "Pewdiepie", "stranger"];
 
// 2) Create randomiser function, which picks an array element for each sentence part
const getRandomIndex = (length) => Math.floor(Math.random()*length)

// 3) Create sentence construction function and call it
const printRandomNonsense = () => {
    console.log("Since I know you are a fan of Zodiac signs let me tell you the future ;)");
    console.log("I sense that " + zodiacs[getRandomIndex(zodiacs.length)] + " will " + 
    actions[getRandomIndex(actions.length)] + " with a " + target[getRandomIndex(target.length)]
    + ", believe it or not!!");
}

printRandomNonsense();