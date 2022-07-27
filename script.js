//1
let avto = [
    {
        name: 'malibu',
        price: 32000
    },
    {
        name: 'Cobalt',
        price: 12500
    },
    {
        name: 'tahoe',
        price: 80000
    },
    {
        name: 'Traverse',
        price: 69000
    },
    {
        name: 'Gentra',
        price: 14000
    },
    {
        name: 'Tracker',
        price: 25000
    }
]

let max_price = 35000

let cheap = avto.filter(item => item.price <= max_price)

console.log(cheap);



//3
let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
let index = prompt('Напищите число ?')
if (arr.indexOf(index)) {
    arr.splice(index, 1)
    console.log(arr);
} else {
    alert('Нет такого элемента')
}

//3
let idx = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]
console.log(idx.filter(item => typeof(item) === 'number' )

);