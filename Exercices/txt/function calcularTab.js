let tabuadaUser = prompt("Insira a tabuada: ");

function calcularTab(tabuadaUser) {
    let tamanho = 1;
    let multi = 0;
    while (tamanho <=10) {
        multi = tamanho * tabuadaUser;
        console.log(`${tabuadaUser}x${tamanho} = ${multi}`);
        tamanho +=1;
    }
}

calcularTab(tabuadaUser)
