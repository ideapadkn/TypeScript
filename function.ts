type TypeChannelReturn = {
  name: string
}

function getChannel(name:string):TypeChannelReturn {
  return {name}
}

type TypeChannelFunction = (name:string) => TypeChannelReturn

const getChannelName:TypeChannelFunction = (name) => {
  return {name}
}

const getNumbers = (...numbers: number[]) => {
  return numbers
}

// перезагрузки 

function getCar(name:string):string
function getCar(name:string, price:number):string

function getCar(name:string, price?:number):string {
  return price ? `Name: ${name}, Price: ${price}` : `Name: ${name}`
}

const car1 = getCar('BMW')
const car2 = getCar('BMW', 10000)
// const car2 = getCar('BMW', 10000, 'dfsfsd')  --error