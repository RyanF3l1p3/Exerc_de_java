
let numero = 10;
console.log(`Valor de 'numero' ANTES do bloco: ${numero}`); // Saída: 10

{
    // Variável 'numero' declarada NOVO escopo de bloco.
    // Esta é uma variável DIFERENTE da que está lá fora.
    let numero = 20;

    // Exibe o valor dentro do bloco
    console.log(`Valor de 'numero' DENTRO do bloco: ${numero}`); // Saída: 20
}

// Exibe o valor depois de sair do bloco.
// A variável 'numero' do bloco { } foi destruída, e voltamos a usar a original.
console.log(`Valor de 'numero' DEPOIS do bloco: ${numero}`); // Saída: 10