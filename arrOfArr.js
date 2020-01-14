let arrofArr = [['one','1'],['two','2'],['three','3']]

let newMap = new Map(arrofArr)

console.log(newMap)

for (const [key, values] of newMap.entries()) {
    console.log(`Key: ${key} Value ${values}`)
}
