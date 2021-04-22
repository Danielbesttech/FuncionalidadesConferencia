let nomesListados = [];
let IDsListados = [];
let IDMeu = []
let nomeMeu = []

function setListaNOME(nomes) {
    console.log("Teste Set NOMES "+nomes);
    nomesListados = nomes;

}

function getListaNOME() {
    console.log("Teste Get NOMES "+nomesListados);

    return nomesListados;
}

function setListaID(id) {
    console.log("Teste Set ID "+id);
    IDsListados = id;

}

function getListaID() {
    console.log("Teste Get ID "+IDsListados);

    return IDsListados;
}
function setMeuNome(nome) {
    console.log("Teste Set MEUNOME "+nome);
    nomeMeu = nome;

}

function getMeuNome() {
    console.log("Teste Get MEUNOME "+nomeMeu);

    return nomeMeu;
}
function setMeuID(Meuid) {
    console.log("Teste Set MEUID "+Meuid);
    IDMeu = Meuid;

}

function getMeuID() {
    console.log("Teste Get MEUID "+IDMeu);

    return IDMeu;
}

export { setListaNOME, getListaNOME, setListaID, getListaID, setMeuNome, getMeuNome, setMeuID, getMeuID };
