// interface
interface IAge {
  age: number
}

interface IUser extends IAge {
  name: string
  email: string
} 

// type   

type TypePerson = {
  age: number
}

type TypeUser = {
  name: string
  email: string
} & TypePerson
// type and interface это одно и тоже FIXME:

const user: IUser = {
  email: 'k.karimov@tuit.uz',
  name: 'Kamron',
  age: 20
}