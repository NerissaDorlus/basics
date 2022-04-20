const student ={
    firstName: 'Wade',
    shirt: 'magenta',
    hair: 'red',
    glasses: true,
    height: 74
}

const { firstName, hair} = student
console.log(firstName, hair)

const alumni = ['Ashley', 'Peter', 'Aurelie', 'Sebas']

const [first, second, third] = alumni

console.log(first, second)