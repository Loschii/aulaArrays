// Exercício 1: Soma de Elementos Crie um programa que declare um array de números inteiros 
// e calcule a soma de todos os elementos do array.

// let listaSoma = [2, 5, 6, 44, 16, 23, 49, 5, 8, 1];
// let soma = 0

// for (let i = 0; i < listaSoma.length; i++){
//     soma += listaSoma[i]
// }

// console.log('A soma dos elementos da lista é: ', soma)

// Exercício 2: Média de Notas. Crie um programa que declare um array de notas de estudantes
// e calcule a média dessas notas. 

// let lista = []
// const nota1 = Number(prompt('Digite a nota: '))
// const nota2 = Number(prompt('Digite um valor: '))
// const nota3 = Number(prompt('Digite um valor: '))
// const nota4 = Number(prompt('Digite um valor: '))
// let soma = 0 
// const aprovado = 'PARABENS VOCÊ PASSOU!'
// const recuperacao = 'ESTUDE'
// const reprovado = 'REPROVADO'

// lista.push(nota1, nota2, nota3, nota4)

// for(i = 0; i < lista.length; i++){
//     soma += lista[i]
// }

// const media = soma / lista.length

// if(media >= 6){
//     alert(`Sua media foi: ${media}, situação: ${aprovado}`)
// } 
// else if(media > 4 && media < 6){
//     alert(`Sua nota foi: ${media}, situação: ${recuperacao}`)
// }else{
//     alert(`Sua nota foi: ${media}, situação: ${reprovado}`)
// }

// console.log(media)

// Exercício 3: Encontrar Maior e Menor Valor Crie um programa que declare um array de números
// inteiros e encontre o maior e o menor valor no array. 

// let exer3 = [4, 44, 5, 25, 12, 5, 66]


// if(exer3.length > 0){
//     let maiorvalor = Math.max(...exer3)
//     let menorvalor = Math.min(...exer3)

//     console.log('Maior valor: ', maiorvalor)
//     console.log('Menor valor: ', menorvalor)
// }



// Exercício 4: Contagem de Pares e Ímpares Crie um programa que declare um array de números 
// inteiros e conte quantos números são pares e quantos são ímpares.  

// function contarParesEImpares(array) {
//     let pares = 0;
//     let impares = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             pares++;
//         } else {
//             impares++;
//         }
//     }

//     return { pares, impares };
// }

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let resultado = contarParesEImpares(numeros);

// console.log("Quantidade de números pares:", resultado.pares);
// console.log("Quantidade de números ímpares:", resultado.impares);

// Exercício 5: Inverter um Array Crie um programa que declare um array 
// e o inverta, ou seja, troque a ordem dos elementos.

// const exer5 = [1, 4, 'Bruno', 89, 'RSRSRS']

// exer5.reverse()

// console.log(exer5)

// Exercício 6: Remover Duplicatas Crie um programa que declare um array com elementos 
// duplicados e remova as duplicatas, deixando apenas uma ocorrência de cada elemento.

// const exer6 = [1, 2, 3, 4, 1, 8, 5, 5, 6, 7, 8, 9];

// const exer6Semrepeticao = [... new Set(exer6)]

// console.log(exer6Semrepeticao)

// Exercício 7: Busca de Elemento Crie um programa que declare um array e solicite ao usuário 
// um valor para buscar. O programa deve informar se o valor foi encontrado no array ou não.

// function verificarvalor(exer7, valor){
//     return exer7.includes(valor)
// }

// let exer7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let valorbusca = parseInt(prompt('Digite um valor a ser consultado: '))

// if(verificarvalor(exer7, valorbusca)){
//    alert(`O valor ${valorbusca} foi encontrado na lista` )
// } else {
//     alert(`O valor ${valorbusca} não foi encontrado na lista`)
// }

// Exercício 8: Concatenar Arrays. Crie dois arrays e concatene-os em um terceiro array.

// const lista1 = [12, 14, 11, 2, 3]
// const lista2 = [1 , 88, 6, 4, 63]
// const lista3 = ['Bruno', 'Eduardo', 'Henrique']

// const listas = lista1.concat(lista2, lista3)

// console.log(listas)

// Exercício 9: Substituir Elementos Crie um programa que declare um array de strings e 
// substitua todas as ocorrências de uma determinada palavra por outra.

// function substituirPalavra(array, palavraAntiga, palavraNova) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i].replace(new RegExp('\\b' + palavraAntiga + '\\b', 'gi'), palavraNova);
//     }
//     return array;
// }

// let arrayDeStrings = ["O Palmeiras é o maior clube do Brasil"];
// let palavraAntiga = "Palmeiras";
// let palavraNova = "São Paulo";

// let arraySubstituido = substituirPalavra(arrayDeStrings, palavraAntiga, palavraNova);

// console.log(arraySubstituido);

// Exercício 10: Ordenação Crescente. Crie um programa que declare um array de números inteiros 
// e o ordene em ordem crescente.

let exer10 = [4, 44, 5, 25, 12, 5, 66]

exer10.sort(function(a, b){
    return a - b
})

console.log(exer10)