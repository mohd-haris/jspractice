// Working with objects.

let myClashRoyale = {
    inGameName: 'Haris',
    maxTrophies: 5300,
    favCard: 'FireCracker'
}

console.log(`My IGN in Clash Royale is ${myClashRoyale.inGameName}, 
maximum trophies is ${myClashRoyale.maxTrophies} and favorite card is ${myClashRoyale.favCard}`)

let changeMaxtrophies = function(incTrophies){
    return{
        add20: `Adding 20 trophies... ${incTrophies.maxTrophies + 20}`,
        add30: `Adding 30 trophies... ${incTrophies.maxTrophies + 30}`
    }
}

let addtrophies = myClashRoyale.maxTrophies + 20
console.log(addtrophies)

