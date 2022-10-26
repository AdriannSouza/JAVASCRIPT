var idade = 65

console.log (`Sua idade é ${idade} anos`)

if (idade < 16) {
    console.log ('Você não vota')
} 

else if (idade < 18 || idade >= 65) {
    console.log ('Voto OPCIONAL')
}


else {
    console.log ('Voto OBRIGATÓRIO')
}