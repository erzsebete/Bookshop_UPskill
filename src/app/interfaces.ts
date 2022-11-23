/*--------- AUTOR -----------*/

interface Autor {
  id: number,
  nome: string,
  livros: number
}

export {Autor};

/*--------- LIVRO -----------*/

interface Livro {
  id: number,
  titulo: string,
  ano_publicacao: number,
  autor: string,
  vendas: number,
  imagem: string,
}

export {Livro};

/*--------- DETALHES LIVROS E DETALHE DE UM LIVRO -----------*/

interface DetalheLivro {
  id: number,
  titulo: string,
  ano_publicacao: number,
  autor: string,
  sinopse: string,
  imagem: string,
  vendas: VendaLivro[]
}

interface VendaLivro {
  data: string,
  cliente: string
}

interface DetalhesLivros {
  [key: number]: DetalheLivro
}

export {DetalheLivro, DetalhesLivros};

/*--------- VENDA -----------*/

interface Venda {
  id: number,
  data: string,
  cliente: string,
  valor: number,
  livro: string,
  livro_imagem: string,
}

export {Venda};
