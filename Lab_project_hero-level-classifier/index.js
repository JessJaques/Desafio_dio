const prompt = require('prompt');

var heroXP = 0;
const name = "";
let heroLevel;

prompt.start();
prompt.get([
    {
    name:'name',
    required: true,
    message:"What's your Hero's name?\n"
    },
    {
        name:'heroXP',
        required: true,
        message:"How much XP does your Hero have?\n"
    }], function(err, result) {

        const xpValue = Number(result.heroXP);
        const heroName = result.name;

        switch (true) {
            case (xpValue > 0 && xpValue < 1000):
                heroLevel = "Iron";
                break;
            case (xpValue >= 1001 && xpValue <= 2000):
                heroLevel = "Bronze";
                break;
            case (xpValue >= 2001 && xpValue <= 5000):
                heroLevel = "Silver";
                break;
            case (xpValue >= 5001 && xpValue <= 7000):
                heroLevel = "Gold";
                break;
            case (xpValue >= 7001 && xpValue <= 8000):
                heroLevel = "Platinum";
                break;
            case (xpValue >= 8001 && xpValue <= 9000):
                heroLevel = "Ascendant";
                break;
            case (xpValue >= 9001 && xpValue <= 10000):
                heroLevel = "Immortal";
                break;
            case (xpValue >= 10001):
                heroLevel = "Radiant";
                break;
            default:
                console.log(`The Hero named ${heroName} has no XP`);
            }
        
        if(xpValue !== 0)
            console.log(`The Hero named ${heroName} is at the ${heroLevel} level!`);
    }
)






