let UserName: string = "shabin"
let Phone: number = 9995977246
let isLogged: boolean = true
let empty: [] = []
let skills: string[] = ["html", "css", "js"]
let even: number[] = [2, 4, 6, 8, 10]
// let UserDetails:{name:string,age:number}={
//     name:"shabin",
//     age:18
// }

interface Details {
    name: string,
    age: number,
    isPresent?: boolean
}

let UserDetails: Details = {
    name: "shabin",
    age: 18,
    isPresent: true
}
let AdminDetails: Details = {
    name: "admin",
    age: 20,
    isPresent: false
}

let mix: (string | number)[] = ["a", "b", "c", 1]