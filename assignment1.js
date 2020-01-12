
let percentage = function(yourMark=0, totalmark=100){

    let percent = (yourMark*100)/totalmark
    console.log('Your percentage is : ' + percent)

    if(percent>=80){
        console.log('Your grade is A')
    }

    else if(percent>=60){
        console.log('Your grade is B')
    }

    else if(percent>=40){
        console.log('Your grade is C')
    }

    else{
        
        console.log('Your grade is F')
    }
}

percentage(123,200)

