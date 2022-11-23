interface Livro {
  id: number,
  titulo: string,
  ano_publicacao: number,
  autor: string,
  vendas: number,
  imagem: string,
}

export {Livro};

const livros: Livro[] = [
  {
    "id": 1,
    "titulo": "A Casa Grande de Romarigães ",
    "ano_publicacao": 2013,
    "autor": "Aquilino Ribeiro",
    "vendas": 9,
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/1/imagem"
  },
  {
    "id": 2,
    "titulo": "A Sibila",
    "ano_publicacao": 1953,
    "autor": "Augustina Bessa-Luís",
    "vendas": 12,
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/2/imagem"
  },
  {
    "id": 3,
    "titulo": "Finisterra ",
    "ano_publicacao": 1978,
    "autor": "Carlos de Oliveira",
    "vendas": 11,
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/3/imagem"
  },
  {
    "id": 4,
    "titulo": "Húmus",
    "ano_publicacao": 1917,
    "autor": "Raúl Brandão",
    "vendas": 13,
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/4/imagem"
  },
  {
    "id": 5,
    "titulo": "Livro do Desassossego",
    "ano_publicacao": 1982,
    "autor": "Fernando Pessoa",
    "vendas": 8,
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/5/imagem"
  },
  {
    "id": 6,
    "titulo": "Mau Tempo no Canal",
    "ano_publicacao": 2018,
    "autor": "Vitorino Nemésio",
    "vendas": 13,
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/6/imagem"
  },
  {
    "id": 7,
    "titulo": "O Ano da Morte de Ricardo Reis ",
    "ano_publicacao": 1935,
    "autor": "José Saramago",
    "vendas": 5,
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/7/imagem"
  },
  {
    "id": 9,
    "titulo": "Uma Luz Inesperada",
    "ano_publicacao": 2005,
    "autor": "José Saramago",
    "vendas": 8,
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/9/imagem"
  },
  {
    "id": 10,
    "titulo": "O Silêncio da Água",
    "ano_publicacao": 2022,
    "autor": "José Saramago",
    "vendas": 11,
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/10/imagem"
  },
  {
    "id": 11,
    "titulo": "A Jangada de Pedra",
    "ano_publicacao": 2021,
    "autor": "José Saramago",
    "vendas": 10,
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/11/imagem"
  },
  {
    "id": 12,
    "titulo": "Memorial do Convento",
    "ano_publicacao": 2022,
    "autor": "José Saramago",
    "vendas": 1,
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/12/imagem"
  }
]



export default livros;
