let useremail = 'abcabc'


let emailCheck = function(email){

    
    if ((email.includes(123)) && (email.length > 3))
    {
        return true
    }

    return false

}

console.log(emailCheck(useremail))