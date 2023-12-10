function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let rank = '';

    // Verifica o nível com base na quantidade de vitórias
    if (vitorias < 10) {
        rank = 'Ferro';
    } else if (vitorias >= 10 && vitorias <= 20) {
        rank = 'Bronze';
    } else if (vitorias > 20 && vitorias <= 50) {
        rank = 'Prata';
    } else if (vitorias > 50 && vitorias <= 80) {
        rank = 'Ouro';
    } else if (vitorias > 80 && vitorias <= 90) {
        rank = 'Diamante';
    } else if (vitorias > 90 && vitorias <= 100) {
        rank = 'Lendário';
    } else {
        rank = 'Imortal';
    }

    // Retornar uma mensagem com o saldo de vitórias e o nível
    return `O Herói tem um saldo de ${saldoVitorias} está no Ranking : ${rank}`;
}

// Exemplo de uso da função:
let resultado = calcularNivel(70, 20); // Passando a quantidade de vitórias e derrotas
console.log(resultado); // Exibindo o resultado no console

