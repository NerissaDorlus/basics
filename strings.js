// let fruits =['apple', 'banana', 'orange']

// console.log(fruits.length)//3

// console.log(fruits[1].length)//6

// console.log(fruits[1][0])//b

// console.log(fruits)
// console.log(fruits.join(', '))// joins the fruit with a comma and a space apple, orange

const delivery = 'kiwi|grapes|watermelon|cantaloupe'
const produce = delivery.split('|')
console.log(produce)
console.log(delivery.includes('watermelon'))


const myName = ""

console.log("Hello", myName || 'guest')