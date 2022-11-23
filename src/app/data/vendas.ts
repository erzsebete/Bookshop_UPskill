interface Venda {
  id: number,
  data: string,
  cliente: string,
  valor: number,
  livro: string,
  livro_imagem: string,
}

export {Venda};

const vendas: Venda[] = [
  {
    "id": 1,
    "data": "2021-11-19T20:32:10.000Z",
    "cliente": "João Miguel Fernandes",
    "valor": 13,
    "livro": "A Casa Grande de Romarigães ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/1/imagem"
  },
  {
    "id": 3,
    "data": "2014-01-22T01:28:24.000Z",
    "cliente": "Brenda Oliveira",
    "valor": 14,
    "livro": "Húmus",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/4/imagem"
  },
  {
    "id": 4,
    "data": "2012-04-10T00:31:24.000Z",
    "cliente": "Eduardo da Luz",
    "valor": 13,
    "livro": "Livro do Desassossego",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/5/imagem"
  },
  {
    "id": 5,
    "data": "2020-04-27T16:12:02.000Z",
    "cliente": "Ian Moraes",
    "valor": 13,
    "livro": "Mau Tempo no Canal",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/6/imagem"
  },
  {
    "id": 8,
    "data": "2012-04-01T09:35:41.000Z",
    "cliente": "Fernando Souza",
    "valor": 12,
    "livro": "O Silêncio da Água",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/10/imagem"
  },
  {
    "id": 9,
    "data": "2021-01-18T00:14:19.000Z",
    "cliente": "Srta. Júlia Rodrigues",
    "valor": 13,
    "livro": "A Jangada de Pedra",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/11/imagem"
  },
  {
    "id": 10,
    "data": "2021-08-16T18:24:42.000Z",
    "cliente": "Sr. Ryan Moraes",
    "valor": 16,
    "livro": "Finisterra ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/3/imagem"
  },
  {
    "id": 16,
    "data": "2014-08-28T20:08:25.000Z",
    "cliente": "Cecília Dias",
    "valor": 16,
    "livro": "A Casa Grande de Romarigães ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/1/imagem"
  },
  {
    "id": 17,
    "data": "2018-11-28T16:25:54.000Z",
    "cliente": "Alice Jesus",
    "valor": 13,
    "livro": "A Sibila",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/2/imagem"
  },
  {
    "id": 20,
    "data": "2020-09-01T01:51:05.000Z",
    "cliente": "Ana Luiza Rodrigues",
    "valor": 12,
    "livro": "Mau Tempo no Canal",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/6/imagem"
  },
  {
    "id": 23,
    "data": "2013-09-29T13:37:53.000Z",
    "cliente": "Maria Sophia da Cruz",
    "valor": 12,
    "livro": "O Silêncio da Água",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/10/imagem"
  },
  {
    "id": 24,
    "data": "2017-04-06T11:33:06.000Z",
    "cliente": "Luana Cavalcanti",
    "valor": 14,
    "livro": "A Jangada de Pedra",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/11/imagem"
  },
  {
    "id": 31,
    "data": "2011-09-30T19:38:22.000Z",
    "cliente": "Theo Rezende",
    "valor": 12,
    "livro": "A Casa Grande de Romarigães ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/1/imagem"
  },
  {
    "id": 34,
    "data": "2022-06-08T22:17:41.000Z",
    "cliente": "Cauã Azevedo",
    "valor": 15,
    "livro": "Livro do Desassossego",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/5/imagem"
  },
  {
    "id": 35,
    "data": "2018-11-01T07:35:08.000Z",
    "cliente": "Lavínia da Cunha",
    "valor": 12,
    "livro": "Mau Tempo no Canal",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/6/imagem"
  },
  {
    "id": 36,
    "data": "2015-12-29T20:02:51.000Z",
    "cliente": "Guilherme Pires",
    "valor": 12,
    "livro": "O Ano da Morte de Ricardo Reis ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/7/imagem"
  },
  {
    "id": 37,
    "data": "2012-08-06T06:29:04.000Z",
    "cliente": "Sr. Bryan da Luz",
    "valor": 14,
    "livro": "Uma Luz Inesperada",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/9/imagem"
  },
  {
    "id": 40,
    "data": "2016-10-24T07:58:13.000Z",
    "cliente": "Elisa Fogaça",
    "valor": 13,
    "livro": "Finisterra ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/3/imagem"
  },
  {
    "id": 48,
    "data": "2022-05-06T12:38:31.000Z",
    "cliente": "Carolina Pereira",
    "valor": 12,
    "livro": "Húmus",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/4/imagem"
  },
  {
    "id": 50,
    "data": "2021-12-17T14:40:14.000Z",
    "cliente": "Pietra Pires",
    "valor": 14,
    "livro": "Mau Tempo no Canal",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/6/imagem"
  },
  {
    "id": 54,
    "data": "2021-04-17T13:53:34.000Z",
    "cliente": "Luiz Fernando Freitas",
    "valor": 15,
    "livro": "A Jangada de Pedra",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/11/imagem"
  },
  {
    "id": 61,
    "data": "2015-08-03T12:02:28.000Z",
    "cliente": "Yuri Dias",
    "valor": 15,
    "livro": "A Casa Grande de Romarigães ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/1/imagem"
  },
  {
    "id": 62,
    "data": "2013-04-24T18:48:46.000Z",
    "cliente": "Joana Nascimento",
    "valor": 13,
    "livro": "A Sibila",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/2/imagem"
  },
  {
    "id": 63,
    "data": "2020-12-07T03:56:40.000Z",
    "cliente": "João Vitor da Costa",
    "valor": 12,
    "livro": "Húmus",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/4/imagem"
  },
  {
    "id": 64,
    "data": "2017-11-11T09:17:11.000Z",
    "cliente": "Pietra Rocha",
    "valor": 14,
    "livro": "Livro do Desassossego",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/5/imagem"
  },
  {
    "id": 67,
    "data": "2010-12-25T01:58:46.000Z",
    "cliente": "Vitor da Mata",
    "valor": 12,
    "livro": "Uma Luz Inesperada",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/9/imagem"
  },
  {
    "id": 68,
    "data": "2014-10-09T06:25:48.000Z",
    "cliente": "Alícia Cardoso",
    "valor": 14,
    "livro": "O Silêncio da Água",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/10/imagem"
  },
  {
    "id": 70,
    "data": "2011-01-13T22:47:29.000Z",
    "cliente": "Catarina Viana",
    "valor": 17,
    "livro": "Finisterra ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/3/imagem"
  },
  {
    "id": 76,
    "data": "2015-05-26T11:57:18.000Z",
    "cliente": "Maria Julia da Paz",
    "valor": 13,
    "livro": "A Casa Grande de Romarigães ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/1/imagem"
  },
  {
    "id": 77,
    "data": "2015-06-06T16:34:18.000Z",
    "cliente": "Davi Lucas Cardoso",
    "valor": 15,
    "livro": "A Sibila",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/2/imagem"
  },
  {
    "id": 80,
    "data": "2013-02-26T02:21:46.000Z",
    "cliente": "Enzo Jesus",
    "valor": 14,
    "livro": "Mau Tempo no Canal",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/6/imagem"
  },
  {
    "id": 84,
    "data": "2020-03-29T05:55:09.000Z",
    "cliente": "Isaac Lima",
    "valor": 15,
    "livro": "A Jangada de Pedra",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/11/imagem"
  },
  {
    "id": 92,
    "data": "2017-07-21T20:26:56.000Z",
    "cliente": "Lucas Gabriel Campos",
    "valor": 16,
    "livro": "A Sibila",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/2/imagem"
  },
  {
    "id": 93,
    "data": "2016-04-26T17:13:11.000Z",
    "cliente": "Nicolas Nascimento",
    "valor": 16,
    "livro": "Húmus",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/4/imagem"
  },
  {
    "id": 94,
    "data": "2018-01-24T01:45:17.000Z",
    "cliente": "Paulo Ribeiro",
    "valor": 12,
    "livro": "Livro do Desassossego",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/5/imagem"
  },
  {
    "id": 96,
    "data": "2015-06-01T20:19:49.000Z",
    "cliente": "Ana Luiza Gonçalves",
    "valor": 16,
    "livro": "O Ano da Morte de Ricardo Reis ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/7/imagem"
  },
  {
    "id": 99,
    "data": "2011-07-03T19:40:22.000Z",
    "cliente": "Luna Porto",
    "valor": 12,
    "livro": "A Jangada de Pedra",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/11/imagem"
  },
  {
    "id": 106,
    "data": "2018-06-14T16:58:56.000Z",
    "cliente": "Alexia Viana",
    "valor": 11,
    "livro": "A Casa Grande de Romarigães ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/1/imagem"
  },
  {
    "id": 110,
    "data": "2016-01-10T08:25:30.000Z",
    "cliente": "Dra. Lavínia da Luz",
    "valor": 15,
    "livro": "Mau Tempo no Canal",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/6/imagem"
  },
  {
    "id": 111,
    "data": "2021-01-16T23:57:31.000Z",
    "cliente": "Ian Barros",
    "valor": 13,
    "livro": "O Ano da Morte de Ricardo Reis ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/7/imagem"
  },
  {
    "id": 115,
    "data": "2015-09-24T17:18:06.000Z",
    "cliente": "Luigi da Conceição",
    "valor": 15,
    "livro": "Finisterra ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/3/imagem"
  },
  {
    "id": 121,
    "data": "2018-06-02T14:24:22.000Z",
    "cliente": "Isabel Ramos",
    "valor": 14,
    "livro": "A Casa Grande de Romarigães ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/1/imagem"
  },
  {
    "id": 122,
    "data": "2012-06-14T12:08:25.000Z",
    "cliente": "Gabriel Costa",
    "valor": 13,
    "livro": "A Sibila",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/2/imagem"
  },
  {
    "id": 125,
    "data": "2011-01-09T03:37:34.000Z",
    "cliente": "Gabrielly Melo",
    "valor": 11,
    "livro": "Mau Tempo no Canal",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/6/imagem"
  },
  {
    "id": 127,
    "data": "2014-05-16T12:32:47.000Z",
    "cliente": "Benjamin Martins",
    "valor": 16,
    "livro": "Uma Luz Inesperada",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/9/imagem"
  },
  {
    "id": 128,
    "data": "2016-05-28T17:28:57.000Z",
    "cliente": "Bárbara Pereira",
    "valor": 11,
    "livro": "O Silêncio da Água",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/10/imagem"
  },
  {
    "id": 137,
    "data": "2018-06-23T13:28:32.000Z",
    "cliente": "Luigi das Neves",
    "valor": 15,
    "livro": "A Sibila",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/2/imagem"
  },
  {
    "id": 138,
    "data": "2022-02-20T04:26:25.000Z",
    "cliente": "Sophia Pinto",
    "valor": 13,
    "livro": "Húmus",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/4/imagem"
  },
  {
    "id": 140,
    "data": "2012-09-12T02:34:15.000Z",
    "cliente": "Juliana Pires",
    "valor": 14,
    "livro": "Mau Tempo no Canal",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/6/imagem"
  },
  {
    "id": 142,
    "data": "2016-03-11T23:54:53.000Z",
    "cliente": "Letícia da Costa",
    "valor": 14,
    "livro": "Uma Luz Inesperada",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/9/imagem"
  },
  {
    "id": 143,
    "data": "2011-10-23T03:00:10.000Z",
    "cliente": "Sarah Costa",
    "valor": 11,
    "livro": "O Silêncio da Água",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/10/imagem"
  },
  {
    "id": 144,
    "data": "2011-08-04T09:16:23.000Z",
    "cliente": "Sra. Cecília Costa",
    "valor": 13,
    "livro": "A Jangada de Pedra",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/11/imagem"
  },
  {
    "id": 151,
    "data": "2021-03-29T01:39:45.000Z",
    "cliente": "Benjamin Campos",
    "valor": 14,
    "livro": "A Casa Grande de Romarigães ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/1/imagem"
  },
  {
    "id": 152,
    "data": "2021-02-26T14:04:45.000Z",
    "cliente": "Maria Vitória Vieira",
    "valor": 14,
    "livro": "A Sibila",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/2/imagem"
  },
  {
    "id": 153,
    "data": "2019-03-13T01:24:42.000Z",
    "cliente": "Pedro Henrique Vieira",
    "valor": 14,
    "livro": "Húmus",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/4/imagem"
  },
  {
    "id": 154,
    "data": "2021-08-20T13:49:29.000Z",
    "cliente": "Evelyn Jesus",
    "valor": 15,
    "livro": "Livro do Desassossego",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/5/imagem"
  },
  {
    "id": 155,
    "data": "2015-09-23T07:53:31.000Z",
    "cliente": "Pietra Azevedo",
    "valor": 14,
    "livro": "Mau Tempo no Canal",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/6/imagem"
  },
  {
    "id": 156,
    "data": "2014-11-09T15:59:18.000Z",
    "cliente": "Daniela Caldeira",
    "valor": 14,
    "livro": "O Ano da Morte de Ricardo Reis ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/7/imagem"
  },
  {
    "id": 158,
    "data": "2013-09-28T06:23:02.000Z",
    "cliente": "Sarah Costa",
    "valor": 14,
    "livro": "O Silêncio da Água",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/10/imagem"
  },
  {
    "id": 159,
    "data": "2021-02-16T22:06:55.000Z",
    "cliente": "Bruno da Cruz",
    "valor": 12,
    "livro": "A Jangada de Pedra",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/11/imagem"
  },
  {
    "id": 160,
    "data": "2017-07-23T17:25:44.000Z",
    "cliente": "Ana Sophia Moraes",
    "valor": 13,
    "livro": "Finisterra ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/3/imagem"
  },
  {
    "id": 169,
    "data": "2013-04-12T17:11:07.000Z",
    "cliente": "Evelyn Cardoso",
    "valor": 14,
    "livro": "Livro do Desassossego",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/5/imagem"
  },
  {
    "id": 173,
    "data": "2014-06-09T09:46:01.000Z",
    "cliente": "Lucca Barros",
    "valor": 16,
    "livro": "O Silêncio da Água",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/10/imagem"
  },
  {
    "id": 174,
    "data": "2016-03-21T06:12:19.000Z",
    "cliente": "Nicole Lima",
    "valor": 15,
    "livro": "A Jangada de Pedra",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/11/imagem"
  },
  {
    "id": 182,
    "data": "2013-05-15T07:26:47.000Z",
    "cliente": "Elisa Costa",
    "valor": 14,
    "livro": "A Sibila",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/2/imagem"
  },
  {
    "id": 183,
    "data": "2014-08-05T00:49:47.000Z",
    "cliente": "Milena Rocha",
    "valor": 16,
    "livro": "Húmus",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/4/imagem"
  },
  {
    "id": 184,
    "data": "2021-12-26T06:48:47.000Z",
    "cliente": "Gustavo Nunes",
    "valor": 12,
    "livro": "Livro do Desassossego",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/5/imagem"
  },
  {
    "id": 190,
    "data": "2015-11-08T08:03:33.000Z",
    "cliente": "Milena Sales",
    "valor": 17,
    "livro": "Finisterra ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/3/imagem"
  },
  {
    "id": 197,
    "data": "2015-05-24T16:50:18.000Z",
    "cliente": "Ana Clara Peixoto",
    "valor": 16,
    "livro": "A Sibila",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/2/imagem"
  },
  {
    "id": 198,
    "data": "2022-06-01T07:09:34.000Z",
    "cliente": "Maria Julia Fogaça",
    "valor": 16,
    "livro": "Húmus",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/4/imagem"
  },
  {
    "id": 202,
    "data": "2011-12-24T14:38:51.000Z",
    "cliente": "Ana Costa",
    "valor": 14,
    "livro": "Uma Luz Inesperada",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/9/imagem"
  },
  {
    "id": 203,
    "data": "2021-06-20T03:32:38.000Z",
    "cliente": "Natália Cavalcanti",
    "valor": 13,
    "livro": "O Silêncio da Água",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/10/imagem"
  },
  {
    "id": 204,
    "data": "2012-07-14T02:46:48.000Z",
    "cliente": "Lorena Sales",
    "valor": 13,
    "livro": "A Jangada de Pedra",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/11/imagem"
  },
  {
    "id": 205,
    "data": "2011-05-25T14:16:21.000Z",
    "cliente": "Marina Castro",
    "valor": 12,
    "livro": "Finisterra ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/3/imagem"
  },
  {
    "id": 213,
    "data": "2019-08-23T07:47:40.000Z",
    "cliente": "Gabrielly Mendes",
    "valor": 11,
    "livro": "Húmus",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/4/imagem"
  },
  {
    "id": 215,
    "data": "2021-06-14T05:23:54.000Z",
    "cliente": "Maria Julia da Cruz",
    "valor": 15,
    "livro": "Mau Tempo no Canal",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/6/imagem"
  },
  {
    "id": 216,
    "data": "2020-01-16T09:31:39.000Z",
    "cliente": "Valentina Moreira",
    "valor": 15,
    "livro": "O Ano da Morte de Ricardo Reis ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/7/imagem"
  },
  {
    "id": 218,
    "data": "2017-12-09T11:39:04.000Z",
    "cliente": "Luiz Henrique Viana",
    "valor": 15,
    "livro": "O Silêncio da Água",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/10/imagem"
  },
  {
    "id": 219,
    "data": "2015-11-14T02:55:16.000Z",
    "cliente": "Cecília Costela",
    "valor": 16,
    "livro": "A Jangada de Pedra",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/11/imagem"
  },
  {
    "id": 220,
    "data": "2014-08-28T04:39:20.000Z",
    "cliente": "Dr. Antônio Lima",
    "valor": 13,
    "livro": "Finisterra ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/3/imagem"
  },
  {
    "id": 226,
    "data": "2016-11-30T13:03:19.000Z",
    "cliente": "Gabrielly Rocha",
    "valor": 13,
    "livro": "A Casa Grande de Romarigães ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/1/imagem"
  },
  {
    "id": 227,
    "data": "2020-09-23T15:07:09.000Z",
    "cliente": "Ana Cunha",
    "valor": 14,
    "livro": "A Sibila",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/2/imagem"
  },
  {
    "id": 228,
    "data": "2018-01-13T03:26:03.000Z",
    "cliente": "Arthur Caldeira",
    "valor": 15,
    "livro": "Húmus",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/4/imagem"
  },
  {
    "id": 230,
    "data": "2020-08-05T22:46:48.000Z",
    "cliente": "Julia Dias",
    "valor": 12,
    "livro": "Mau Tempo no Canal",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/6/imagem"
  },
  {
    "id": 232,
    "data": "2011-03-19T00:56:48.000Z",
    "cliente": "Luiza Oliveira",
    "valor": 12,
    "livro": "Uma Luz Inesperada",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/9/imagem"
  },
  {
    "id": 233,
    "data": "2018-11-12T08:21:58.000Z",
    "cliente": "Vinicius Ramos",
    "valor": 15,
    "livro": "O Silêncio da Água",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/10/imagem"
  },
  {
    "id": 242,
    "data": "2022-02-15T19:01:16.000Z",
    "cliente": "Diego Cavalcanti",
    "valor": 14,
    "livro": "A Sibila",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/2/imagem"
  },
  {
    "id": 243,
    "data": "2021-03-25T16:08:23.000Z",
    "cliente": "Srta. Raquel Porto",
    "valor": 14,
    "livro": "Húmus",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/4/imagem"
  },
  {
    "id": 244,
    "data": "2016-11-27T07:38:20.000Z",
    "cliente": "Yasmin Campos",
    "valor": 11,
    "livro": "Livro do Desassossego",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/5/imagem"
  },
  {
    "id": 247,
    "data": "2020-07-29T02:34:27.000Z",
    "cliente": "Sr. Eduardo Duarte",
    "valor": 16,
    "livro": "Uma Luz Inesperada",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/9/imagem"
  },
  {
    "id": 250,
    "data": "2012-05-16T00:51:36.000Z",
    "cliente": "Stephany Barbosa",
    "valor": 13,
    "livro": "Finisterra ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/3/imagem"
  },
  {
    "id": 257,
    "data": "2020-10-26T14:46:12.000Z",
    "cliente": "Yasmin Pires",
    "valor": 15,
    "livro": "A Sibila",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/2/imagem"
  },
  {
    "id": 258,
    "data": "2012-04-20T13:21:33.000Z",
    "cliente": "Rafael Rezende",
    "valor": 16,
    "livro": "Húmus",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/4/imagem"
  },
  {
    "id": 260,
    "data": "2013-02-17T08:22:13.000Z",
    "cliente": "Henrique Duarte",
    "valor": 12,
    "livro": "Mau Tempo no Canal",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/6/imagem"
  },
  {
    "id": 262,
    "data": "2016-12-15T13:50:01.000Z",
    "cliente": "Ana Clara Cardoso",
    "valor": 11,
    "livro": "Uma Luz Inesperada",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/9/imagem"
  },
  {
    "id": 263,
    "data": "2019-03-09T03:00:25.000Z",
    "cliente": "Henrique Teixeira",
    "valor": 12,
    "livro": "O Silêncio da Água",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/10/imagem"
  },
  {
    "id": 265,
    "data": "2018-06-29T09:40:07.000Z",
    "cliente": "Agatha da Costa",
    "valor": 16,
    "livro": "Finisterra ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/3/imagem"
  },
  {
    "id": 273,
    "data": "2022-01-21T05:19:48.000Z",
    "cliente": "Guilherme Souza",
    "valor": 16,
    "livro": "Húmus",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/4/imagem"
  },
  {
    "id": 275,
    "data": "2018-02-09T02:18:00.000Z",
    "cliente": "Carlos Eduardo Nascimento",
    "valor": 15,
    "livro": "Mau Tempo no Canal",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/6/imagem"
  },
  {
    "id": 280,
    "data": "2017-09-23T02:40:20.000Z",
    "cliente": "Lavínia Almeida",
    "valor": 12,
    "livro": "Finisterra ",
    "livro_imagem": "https://m9-frontend.upskill.appx.pt/livros/3/imagem"
  }
]

export default vendas;
