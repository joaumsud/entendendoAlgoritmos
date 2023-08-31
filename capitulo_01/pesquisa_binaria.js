function pesquisa_binaria(lista, item) {
  let baixo = 0; //indice inicial da lista
  let alto = lista.length - 1; // maior indice da lista

  while (baixo <= alto) {
    //enquanto baixo menor igual a alto
    let meio = Math.floor((baixo + alto) / 2); // calcular o meio
    if (lista[meio] === item) {
      //se o valor do meio igual ao item (valor informado)
      return meio; //retorna o valor do meio
    } else if (lista[meio] > item) {
      //se valor do meio maior que item (valor informado)
      alto = meio - 1; // alto  se torna o meio -1 pq será o valor mais alto no momento
    } else {
      // se valor meio menor que item,
      baixo = meio + 1; //o valor de baixo se tornara o valor do meio + 1
    }
  }
  return -1; // se o valor não estiver no array vai retornar -1
}

let minha_lista = [1, 3, 5, 7, 9];

let minhaBusca = pesquisa_binaria(minha_lista, 7);

console.log(minhaBusca);
