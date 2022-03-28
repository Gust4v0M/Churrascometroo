// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function chamar() {
    console.log("Calculando...")

    let  adultos = inputAdultos.value;
    let  criancas = inputCriancas.value;
    let  duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
    let qdtTotalCerveja = cervejaPP(duracao) * adultos ;
    let qdtTotalBebidas = refriPP(duracao) * adultos + (refriPP(duracao) / 2)

    
    resultado.innerHTML = "<h3>Você vai precisar de: </h3>"
  
    resultado.innerHTML +=`
    <div class="result-block">
    <img id="icons" src="./icons/steak.png">
    <p>${qdtTotalCarne /1000} Kg de carne</p>
    </div>`

    resultado.innerHTML += `
    <div class="result-block">
    <img id="icons" src="./icons/beer.png">
    <p>${Math.ceil(qdtTotalCerveja / 350)} latinhas de cerveja</p>
    </div>` 
    
    resultado.innerHTML += `
    <div class="result-block">
    <img id="icons" src="./icons/water.png">
    <p>${qdtTotalBebidas / 1000} litros de refri</p>
    </div>`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }

}

function refriPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }

}
