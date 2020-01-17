const login = []

const loginId = login[0]

if(loginId){
    console.log('Allow login')
}

else{
    console.log('Auth Failed!')
}

//Values interpreted as false..
/* 
1. false
2. 0
3. ''  Empty string is considered as false.
    If anything is in the string, it will become true

4.null
5.undefined
*/