function inverterTexto(txt) {
    var saida = '';
    for (var i = txt.length - 1; i >= 0; i--) {
        saida += txt[i];
    }
    return saida;
}

console.log(inverterTexto("Testando a inversão do texto!"));