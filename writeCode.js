const sumZero = (num, arr) => {
    return arr.some((e, i) => arr.slice(i + 1).includes(num - e))
  }
  
  console.log(sumZero(0, [1, 2, 3, -2]))
  //O(1)

const uniqueChar = (str) => {
    return new Set(str).size == str.length
}
//O(1)

const isPangram = (str) => {
    var regexCheck = /([a-z])(?!.*\1)/g;
    return (str.match(regexCheck) || []).length === 26;
}
//O(n)

const findLongestWord = (arr) => {

    var check = 0
    
    for ( let i = 0; i < arr.length; i++) {
      if (arr[i].length > check) {
        check = arr[i].length
      }
    }
    console.log(check)
}
//O(n)