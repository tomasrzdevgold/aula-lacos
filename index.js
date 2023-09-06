/*
exercicio 1
vai imprimir: 
10







exercicio 2
a) vai ser impresso:  
19
21
23
25
27
30

b) 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let [indice,valor] of lista.entries()) {
    console.log(`indice = ${indice} -- numero = ${valor}`)
}







exercicio 3
*
**
***
****






*/


///exercicio 1 codigo

const bichinhos = Number(prompt("Quantos animais você tem?"))

if (bichinhos === 0) {
    console.log("Que pena! Você pode adoptar um pet")
} else  {
    let i = 0
    const arraypets=[]
    while (i < bichinhos){
        const pets = prompt("Quais são os nomes dos seus pets")
        const count = arraypets.push(pets)
        i++
        
    }

console.log(arraypets)
}








//exercicio 2 codigo

const arrayoriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function imprimir (array){
    for (let arraycopia of arrayoriginal ) {
        console.log(arraycopia)
    }
}

imprimir(arrayoriginal)

function dividir (valores) {
    for (let arraycopia of valores ) {
        console.log(arraycopia/10)
    }
}

dividir(arrayoriginal)





function pares (numeros) {
    const numerospares=[]
    


    for(let i = 0; i < numeros.length; i++) {
        let numeroatual = numeros[i]

        let secuencia = numeroatual % 2

        if(secuencia===0){
            numerospares.push(numeroatual)
        }
    } 
  console.log(numerospares)
}
pares(arrayoriginal)



function string (){
    const lista = []
for (let [indice,valor] of arrayoriginal.entries()) {
    lista.push(`o elemento do índex ${indice} é: ${valor}`)

}

console.log(lista)

}

string (arrayoriginal)






function maiorMenor (){
    let numeroMaior = 0
    let numeroMenor = 0
 for(let i = 0; i < arrayoriginal.length; i++) {
 let numeroAtual = arrayoriginal[i]
 if(numeroAtual >= numeroMaior) {
 numeroMaior = numeroAtual
 }else if(numeroAtual <= numeroMenor ){
    numeroMenor = numeroAtual
 }
 }
 console.log(`O maior número é ${numeroMaior} e o menor numero é ${numeroMenor}`)
}
maiorMenor(arrayoriginal)
