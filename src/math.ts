function add(a: number, b: number): number {
    return a + b
}

function sub(a: number, b: number): number {
    return a - b
}

type test = Parameters<typeof sub>

console.log(test,'test')
module.exports = {add, sub}
