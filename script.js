function lerLista() {
    const texto = document.getElementById("numeros").value;
    return texto.split(",").map(Number);
}

function mostrar(original, ordenada) {
    document.getElementById("listaOriginal").textContent = original.join(", ");
    document.getElementById("listaOrdenada").textContent = ordenada.join(", ");
}

function executarBubble() {
    const lista = lerLista();
    const original = [...lista];
    for (let i = 0; i < lista.length - 1; i++) {
        for (let j = 0; j < lista.length - i - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }
    mostrar(original, lista);
}

function executarSelection() {
    const lista = lerLista();
    const original = [...lista];
    for (let i = 0; i < lista.length - 1; i++) {
        let menor = i;
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[j] < lista[menor]) menor = j;
        }
        let temp = lista[i];
        lista[i] = lista[menor];
        lista[menor] = temp;
    }
    mostrar(original, lista);
}

function executarInsertion() {
    const lista = lerLista();
    const original = [...lista];
    for (let i = 1; i < lista.length; i++) {
        let atual = lista[i];
        let j = i - 1;
        while (j >= 0 && lista[j] > atual) {
            lista[j + 1] = lista[j];
            j--;
        }
        lista[j + 1] = atual;
    }
    mostrar(original, lista);
}

function mesclar(esq, dir) {
    let resultado = [];
    let i = 0, j = 0;
    while (i < esq.length && j < dir.length) {
        if (esq[i] < dir[j]) {
            resultado.push(esq[i]);
            i++;
        } else {
            resultado.push(dir[j]);
            j++;
        }
    }
    return resultado.concat(esq.slice(i)).concat(dir.slice(j));
}

function mergeSort(lista) {
    if (lista.length <= 1) return lista;
    let meio = Math.floor(lista.length / 2);
    let esquerda = mergeSort(lista.slice(0, meio));
    let direita = mergeSort(lista.slice(meio));
    return mesclar(esquerda, direita);
}

function executarMerge() {
    const lista = lerLista();
    const original = [...lista];
    const ordenada = mergeSort(lista);
    mostrar(original, ordenada);
}
