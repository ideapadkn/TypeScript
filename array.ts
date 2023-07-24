let array:string[]

array = ['1', '2', '3']

// нельзя изменять вообще ReadonlyArray<type>
const numbers:ReadonlyArray<number> = [0, 1, 2, 3]

// картеж
type TypeArray = [number, string, null]
const newArray:TypeArray = [1, '2', null]