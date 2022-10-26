let = num = [5, 8, 2, 9, 3]
num.push(1) //definir como último item da lista
num.sort() //colocar em ordem crescente

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos= num.indexOf(4) //procurar algum número dentro do vetor.
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else { 
    console.log(`O valor está na posição ${pos}`)
}
