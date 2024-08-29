// -> We want to generate a random nonsensical sentence
// -> Each sentence contains 3 parts
// -> The zodiac sign, an action, and a person (lover, friend, foe, etc. you name it)

//STEPS TO IMPLEMENT

// 1) Define arrays of potential sentence parts
const zodiacs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const actions = ["meet", "fall in love with", "give money to", "take money from",
    "fight with", "become friends with", "get betraid by"];
const target = ["a friend", "your best friend", "your partner", "your parents",
    "your boss", "Elon Musk", "Pewdiepie", "a stranger"];
 
// 2) Create randomiser function, which picks an array element for each sentence part

// 3) Display complete sentence