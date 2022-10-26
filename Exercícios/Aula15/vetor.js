let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}

/*pos++ adiciona no num.length, ou seja, no número do índice. Ex: 'pos1' -> identifica que 'pos' é menor que o número TOTAL DE COMPRIMENTO e adiciona mais 1 na posição 'pos' passando pelo 3 termo do 'for', adicionando mais um número como incremento, logo, nossa posição seria 'pos2', assim seguindo sucessivamente.*/