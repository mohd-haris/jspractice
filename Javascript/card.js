var count = 0

var cc = function (card) {
    switch (card)
    {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        count++
        break;
        case 7:
        case 8:
        case 9:
        break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
        count--
        break;        
    }
}

cc(2)
cc(3)
cc(9)
cc(5)
cc(6)

if (count > 0) {
    console.log(count + ' Bet')
} else {
    console.log(count + ' Hold')    
}

