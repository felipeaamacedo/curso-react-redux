function sortearNumeroNaoContido(min, max, array) {
    const numeroSorteado = parseInt(Math.random() * (max + 1 - min) + min);
    return array.includes(numeroSorteado) ? sortearNumeroNaoContido(min, max, array) : numeroSorteado
}


function gerarNumeros(qtd) {
    let numerosGerados = Array(qtd)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = sortearNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 - n2)
    return numerosGerados
}


console.log(gerarNumeros(7))