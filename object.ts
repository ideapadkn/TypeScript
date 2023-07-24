import axios from "axios"
/*
const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then(response => {
  const todo = response.data as Todo

  const id = todo.id
  const title = todo.title
  const finished = todo.completed 

  logTodo(id, title, finished)
})

function logTodo(id: number, title: string, completed: boolean) {
  console.log(`
    Todo ID: ${id}
    Title: ${title}
    IS todo finished: ${completed}
  `)
}
*/

type TypeUser = {
  name: string,
  age: number
}

type TypeAddress = {
  city: string,
  country: string
}

const user: TypeUser = {
  name: 'Kamron',
  age: 20
}

const address: TypeAddress = {
  city: 'Tashkent',
  country: 'Uzbekistan'
}

let common: TypeAddress & TypeUser

common = {
  ...user, ...address
}