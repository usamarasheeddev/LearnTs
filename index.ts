const userName: string = "usama"
const age: number = 20
const address: string | number = 'chak no 188 rb'

const array: number[] = [12, 2, 4, 5, 6, 7]
const array1: (number | string)[] = ['usmaa', 3, 4, 5, "helo"]

//functions
function testing1(n: number, o: string | number): void {
    console.log(o)
}
function testing(n: number, o?: string | number): number {
    console.log(o)
    return n;
}

// testing(5, 8)

//objects in TS

const user: { userName: string, age: number, address: string } = {
    userName: "usama", age: 23, address: "faisalabad"
}


type User = {
    name: string, age: number, address: string
}

const employee: User = {
    name: 'usama', age: 12, address: 'dfjsdjlksdfj'
}


//NEVER KEYWORD
// function throwError():never{
//     throw new Error('some error occur')
// }
// throwError()


//iNTERFACE
// interface Person {
//     name: string,
//     age: number,
//     address: string,
//     adult?: boolean
// }

// interface Person {
//     readonly name: string,
//     age: number,
//     address: string,
//     adult?: boolean
// }
interface Person {
    name: string,
    age: number,
    address: string,
    adult?: boolean
}

const person: Person = {
    name: 'usama',
    age: 23,
    address: 'chak no 188',
    adult: true
}

// console.log(person)

//OBJECT READ ONLY PROPERTY
// person.name = 'usama rasheed'
// console.log(person)



//FUNCTIONS INTERFACE
// interface Add {
//     (x: number, y: number): number
// }

// const add: Add = (x, y) => x+y

// console.log(add(1, 2))

// Extend an interface
// interface Test{
//     name:string
// }

// interface NewIntf extends Test{
//     age:number
// }

// const test:NewIntf={
//     name:'testing',
//     age:34
// }


//  CUSTOM INTERFACE USING INSERRTION

interface Box<T> {
    value: T;
    age?: number;
}


const object: Box<any> = {
    value: "100"
}

//getting object value
// console.log(object.value)


//typecasting or type assertion
// const num:number=(<number>object.value)

// const num1:number=object.value as number
// console.log(num1)


//AS CONST =---------------------------------------

// let person1 = {
//     name: 'usama',
//     address: 'dfasdfasdf',
//     age: 30,
//     adult: true
// } as const;


// person1.name='usama rasheed'
// console.log(person1);
