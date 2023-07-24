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