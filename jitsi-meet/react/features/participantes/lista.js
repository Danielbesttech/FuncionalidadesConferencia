let nomesListados = [];

function setLista(nomes) {
    console.log("Teste Set "+nomes);
    nomesListados = nomes;

}

function getLista() {
    console.log("Teste Get "+nomesListados);

    return nomesListados;
}

export { setLista, getLista };
