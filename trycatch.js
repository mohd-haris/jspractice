const inToRs = (dollar) =>
{
if(typeof(dollar) === 'number'){
return dollar*64
}

else{
    throw Error('Input Invalid')
}
}
try {
    const rs = inToRs('five')
console.log(rs)
} catch (error) {
    console.log(error)
}

console.log('This should work!') // This line will not be executed if try catch is not used
