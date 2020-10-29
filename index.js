export function myFunction(str, num) {
    let obj = []
    let sentence = str.split(' ')
    let words = [...new Set(sentence.map(item => item))]
    words.map(item => {
        let count = str.match( new RegExp(item,"g")).length
        obj.push({word : item, occurence : count})
    })
    obj.sort(compare)
    obj.splice(num, obj.length)
    return obj
}

function compare( a, b ) {
    if(a.occurence > b.occurence ){
      return -1;
    }
    if(a.occurence < b.occurence ){
      return 1;
    }
    if(a.word < b.word) {
        return -1;
    }
    if(a.word > b.word) {
        return 1;
    }
    return 0;
}

/* let result = myFunction("a", 0)
console.log(result)

result = myFunction("a", 1)
console.log(result)

result = myFunction("a", 3)
console.log(result)

result = myFunction("a a", 3)
console.log(result)

result = myFunction("a a b", 3)
console.log(result)

result = myFunction("baz bar foo foo zblah zblah zblah baz toto bar", 3)
console.log(result) */