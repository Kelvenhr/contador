const form = document.querySelectorAll('#form')
const btn = document.getElementById('btn')
let result = document.getElementById('result')

btn.addEventListener('click', pegarnotas)

function pegarnotas() {
    dados = new FormData(form[0])
    n100 = Number(dados.get('notadecem'))
    n50 = Number(dados.get('notadecinquenta'))
    n20 = Number(dados.get('notadevinte'))
    n10 = Number(dados.get('notadedez'))
    n5 = Number(dados.get('notadecinco'))
    n2 = Number(dados.get('notadedois'))
    m1 = Number(dados.get('moedade1'))
    m50 = Number(dados.get('moedade50'))
    m25 = Number(dados.get('moedade25'))
    m10 = Number(dados.get('moedade10'))
    m5 = Number(dados.get('moedade5'))
    somadasnotas = Calcularnotas(n100, n50, n20, n10, n5, n2, m1, m50, m25, m10, m5)
    result.innerHTML = `<p>Resultado total: ${somadasnotas.toFixed(2).replace('.', ',')} R$</p>`
}

function Calcularnotas(cem=0, cinquenta=0, vinte=0, dez=0, cinco=0, dois=0, m1=0, m50=0, m25=0, m10=0, m5=0) {
    let calculo = (cem * 100) + (cinquenta * 50) + (vinte * 20) + (dez * 10) + (cinco * 5) + (dois * 2) + (m1 * 1) + (m50 * 0.5) + (m25 * 0.25) + (m10 * 0.1) + (m5 * 0.05)
    return calculo
}