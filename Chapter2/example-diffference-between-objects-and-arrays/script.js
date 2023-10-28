const arr = [1, 2, 3]
const arrObj = {
  0: 1,
  1: 2,
  2: 3
}

// console.log(arrObj.0) - будет ошибка
console.log(arrObj[0])

console.log(arr[1])

// Добавление свойства в объект
const d = "qwert"
arrObj.b = '1234'
arrObj["c"] = '1245'
arrObj[d] = "something happened here"

console.log(arrObj.b)
console.log(arrObj.c)
console.log(arrObj[d])
console.log(arrObj)

// const obj = { a: 1, b: 2 }

const obj = { Anna: 500, Alice: 800 }

console.log(obj.Anna)
