// Write your solution below:

let tshirtSorter = (sizes) => {
    let orderedTshirts = sizes.split("").sort().reverse().join()
    return orderedTshirts
}

console.log(tshirtSorter('lsmslmslsmslslllssmsmmmmmslssssll'))

// function tshirtSorter (sizes) {
//     let small = 0
//     let medium = 0
//     let large = 0

//     for(let i = 0; i < sizes.length; sizes++){
//         if(sizes[i] === 's') {
//             small++
//         } else if (sizes[i] === 'm') {
//             medium++
//         } else if (sizes[i] === 'l'){
//             large++
//         }
//     }

// return sizes.
// }

function stringToArray(string){
    let arrOfWords = string.split(' ')
   return arrOfWords
   }

   console.log(stringToArray("hello world"))