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

const detalhes: DetalhesLivros = {
  1: {
    "id": 1,
    "titulo": "A Casa Grande de Romarigães ",
    "ano_publicacao": 2013,
    "autor": "Aquilino Ribeiro",
    "sinopse": "Este romance reproduz a mundivivência das terras nortenhas e aproxima o texto ficcional da realidade narrada, numa Beira rural e analfabeta ancorada numa sociedade patriarcal. Misturando erudição com a linguagem popular, Aquilino capta esse ambiente arreigado na religiosidade e na crendice e revela o instinto camponês com todas as superstições e todos os subterfúgios associados à obsessão de propriedade.",
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/1/imagem",
    "vendas": [
      {
        "data": "2021-11-19T20:32:10.000Z",
        "cliente": "João Miguel Fernandes"
      },
      {
        "data": "2021-03-29T01:39:45.000Z",
        "cliente": "Benjamin Campos"
      },
      {
        "data": "2018-06-14T16:58:56.000Z",
        "cliente": "Alexia Viana"
      },
      {
        "data": "2018-06-02T14:24:22.000Z",
        "cliente": "Isabel Ramos"
      },
      {
        "data": "2016-11-30T13:03:19.000Z",
        "cliente": "Gabrielly Rocha"
      },
      {
        "data": "2015-08-03T12:02:28.000Z",
        "cliente": "Yuri Dias"
      },
      {
        "data": "2015-05-26T11:57:18.000Z",
        "cliente": "Maria Julia da Paz"
      },
      {
        "data": "2014-08-28T20:08:25.000Z",
        "cliente": "Cecília Dias"
      },
      {
        "data": "2011-09-30T19:38:22.000Z",
        "cliente": "Theo Rezende"
      }
    ]
  },
  2: {
    "id": 2,
    "titulo": "A Sibila",
    "ano_publicacao": 1953,
    "autor": "Augustina Bessa-Luís",
    "sinopse": "«O que Sibila e sua descendência significam não precisa de ser sublinhado por contraste. Mas esse mundo romanesco, pelo seu simples aparecimento, deslocou o centro da atenção literária.» Eduardo Lourenço",
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/2/imagem",
    "vendas": [
      {
        "data": "2022-02-15T19:01:16.000Z",
        "cliente": "Diego Cavalcanti"
      },
      {
        "data": "2021-02-26T14:04:45.000Z",
        "cliente": "Maria Vitória Vieira"
      },
      {
        "data": "2020-10-26T14:46:12.000Z",
        "cliente": "Yasmin Pires"
      },
      {
        "data": "2020-09-23T15:07:09.000Z",
        "cliente": "Ana Cunha"
      },
      {
        "data": "2018-11-28T16:25:54.000Z",
        "cliente": "Alice Jesus"
      },
      {
        "data": "2018-06-23T13:28:32.000Z",
        "cliente": "Luigi das Neves"
      },
      {
        "data": "2017-07-21T20:26:56.000Z",
        "cliente": "Lucas Gabriel Campos"
      },
      {
        "data": "2015-06-06T16:34:18.000Z",
        "cliente": "Davi Lucas Cardoso"
      },
      {
        "data": "2015-05-24T16:50:18.000Z",
        "cliente": "Ana Clara Peixoto"
      },
      {
        "data": "2013-05-15T07:26:47.000Z",
        "cliente": "Elisa Costa"
      },
      {
        "data": "2013-04-24T18:48:46.000Z",
        "cliente": "Joana Nascimento"
      },
      {
        "data": "2012-06-14T12:08:25.000Z",
        "cliente": "Gabriel Costa"
      }
    ]
  },
  3: {
    "id": 3,
    "titulo": "Finisterra ",
    "ano_publicacao": 1978,
    "autor": "Carlos de Oliveira",
    "sinopse": "Ancorada no areal da gândara, uma casa em falência. Em seu redor, o halo lucilante protege o terreno antes da execução da hipoteca. Imagens difusas povoam a paisagem de dunas a perder de vista, tentando capturar o que resta do real: a criança sentada num osso de baleia, o pai premindo o obturador, a mãe na senda da alquimia das gisandras, o tio aperfeiçoando a fórmula da porcelana etérea. E o silêncio atemorizador ao longo dos dias: o executor fiscal, os peregrinos de cabeça em chamas ameaçando a harmonia do reino mineral.",
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/3/imagem",
    "vendas": [
      {
        "data": "2021-08-16T18:24:42.000Z",
        "cliente": "Sr. Ryan Moraes"
      },
      {
        "data": "2018-06-29T09:40:07.000Z",
        "cliente": "Agatha da Costa"
      },
      {
        "data": "2017-09-23T02:40:20.000Z",
        "cliente": "Lavínia Almeida"
      },
      {
        "data": "2017-07-23T17:25:44.000Z",
        "cliente": "Ana Sophia Moraes"
      },
      {
        "data": "2016-10-24T07:58:13.000Z",
        "cliente": "Elisa Fogaça"
      },
      {
        "data": "2015-11-08T08:03:33.000Z",
        "cliente": "Milena Sales"
      },
      {
        "data": "2015-09-24T17:18:06.000Z",
        "cliente": "Luigi da Conceição"
      },
      {
        "data": "2014-08-28T04:39:20.000Z",
        "cliente": "Dr. Antônio Lima"
      },
      {
        "data": "2012-05-16T00:51:36.000Z",
        "cliente": "Stephany Barbosa"
      },
      {
        "data": "2011-05-25T14:16:21.000Z",
        "cliente": "Marina Castro"
      },
      {
        "data": "2011-01-13T22:47:29.000Z",
        "cliente": "Catarina Viana"
      }
    ]
  },
  4: {
    "id": 4,
    "titulo": "Húmus",
    "ano_publicacao": 1917,
    "autor": "Raúl Brandão",
    "sinopse": "Publicado pela primeira vez em 1917, Húmus, a obraprima de Raul Brandão, é um misto de diário, feito de visões e reflexões metafísicas, e de ficção simbólica, onde se alternam dois monólogos interiores em fragmentos datados ao longo de cerca de um ano — o monólogo do autor/narrador, na primeira pessoa, e o de um filósofo lunático, alter ego do autor, apodado de Gabiru. Escrito num estilo poderosamente original e de uma modernidade impressionante, Húmus explora a contradição entre o mundo aparente e o autêntico, onde se descobrem monstruosidades não sonhadas.",
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/4/imagem",
    "vendas": [
      {
        "data": "2022-06-01T07:09:34.000Z",
        "cliente": "Maria Julia Fogaça"
      },
      {
        "data": "2022-05-06T12:38:31.000Z",
        "cliente": "Carolina Pereira"
      },
      {
        "data": "2022-02-20T04:26:25.000Z",
        "cliente": "Sophia Pinto"
      },
      {
        "data": "2022-01-21T05:19:48.000Z",
        "cliente": "Guilherme Souza"
      },
      {
        "data": "2021-03-25T16:08:23.000Z",
        "cliente": "Srta. Raquel Porto"
      },
      {
        "data": "2020-12-07T03:56:40.000Z",
        "cliente": "João Vitor da Costa"
      },
      {
        "data": "2019-08-23T07:47:40.000Z",
        "cliente": "Gabrielly Mendes"
      },
      {
        "data": "2019-03-13T01:24:42.000Z",
        "cliente": "Pedro Henrique Vieira"
      },
      {
        "data": "2018-01-13T03:26:03.000Z",
        "cliente": "Arthur Caldeira"
      },
      {
        "data": "2016-04-26T17:13:11.000Z",
        "cliente": "Nicolas Nascimento"
      },
      {
        "data": "2014-08-05T00:49:47.000Z",
        "cliente": "Milena Rocha"
      },
      {
        "data": "2014-01-22T01:28:24.000Z",
        "cliente": "Brenda Oliveira"
      },
      {
        "data": "2012-04-20T13:21:33.000Z",
        "cliente": "Rafael Rezende"
      }
    ]
  },
  5: {
    "id": 5,
    "titulo": "Livro do Desassossego",
    "ano_publicacao": 1982,
    "autor": "Fernando Pessoa",
    "sinopse": "«O que temos aqui não é um livro mas a sua subversão e negação, o livro em potência, o livro em plena ruína, o livro-sonho, o livro-desespero, o anti-livro, além de qualquer literatura. O que temos nestas páginas é o génio de Pessoa no seu auge».\n\nEstas são palavras da INTRODUÇÃO à primeira edição do Livro do Desassossego publicado pela Assírio & Alvim, em 1998. Com o presente volume, vamos na décima edição desta maravilhosa e sui generis obra, agora enriquecida por alguns inéditos e, sobretudo, por dezenas de melhoramentos na leitura dos originais manuscritos, redigidos numa caligrafia notoriamente difícil de decifrar.",
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/5/imagem",
    "vendas": [
      {
        "data": "2022-06-08T22:17:41.000Z",
        "cliente": "Cauã Azevedo"
      },
      {
        "data": "2021-12-26T06:48:47.000Z",
        "cliente": "Gustavo Nunes"
      },
      {
        "data": "2021-08-20T13:49:29.000Z",
        "cliente": "Evelyn Jesus"
      },
      {
        "data": "2018-01-24T01:45:17.000Z",
        "cliente": "Paulo Ribeiro"
      },
      {
        "data": "2017-11-11T09:17:11.000Z",
        "cliente": "Pietra Rocha"
      },
      {
        "data": "2016-11-27T07:38:20.000Z",
        "cliente": "Yasmin Campos"
      },
      {
        "data": "2013-04-12T17:11:07.000Z",
        "cliente": "Evelyn Cardoso"
      },
      {
        "data": "2012-04-10T00:31:24.000Z",
        "cliente": "Eduardo da Luz"
      }
    ]
  },
  6: {
    "id": 6,
    "titulo": "Mau Tempo no Canal",
    "ano_publicacao": 2018,
    "autor": "Vitorino Nemésio",
    "sinopse": "Mau Tempo no Canal conta a história de uma rapariga, Margarida Clark Dulmo, que anda pelos seus 20 anos e vive na ilha do Faial, Açores, no início do século XX.\n\nMargarida, que pertence a uma das mais respeitáveis famílias luso-britânicas das ilhas, está destinada a casar com André Barreto, jovem herdeiro de outra família, esta da ilha de São Jorge.\n\nEntretanto surge pelo meio um flirt entre Margarida e João Garcia, jovem pertencente à família dos Garcias, rival e inimiga da família Clark Dulmo, a que Margarida pertence. Mas aquilo que parece ir desenvolver-se como uma nova versão da história de Romeu e Julieta faz uma inversão de marcha e prossegue de modo menos romântico, de acordo com os brandos costumes da terra açoriana.",
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/6/imagem",
    "vendas": [
      {
        "data": "2021-12-17T14:40:14.000Z",
        "cliente": "Pietra Pires"
      },
      {
        "data": "2021-06-14T05:23:54.000Z",
        "cliente": "Maria Julia da Cruz"
      },
      {
        "data": "2020-09-01T01:51:05.000Z",
        "cliente": "Ana Luiza Rodrigues"
      },
      {
        "data": "2020-08-05T22:46:48.000Z",
        "cliente": "Julia Dias"
      },
      {
        "data": "2020-04-27T16:12:02.000Z",
        "cliente": "Ian Moraes"
      },
      {
        "data": "2018-11-01T07:35:08.000Z",
        "cliente": "Lavínia da Cunha"
      },
      {
        "data": "2018-02-09T02:18:00.000Z",
        "cliente": "Carlos Eduardo Nascimento"
      },
      {
        "data": "2016-01-10T08:25:30.000Z",
        "cliente": "Dra. Lavínia da Luz"
      },
      {
        "data": "2015-09-23T07:53:31.000Z",
        "cliente": "Pietra Azevedo"
      },
      {
        "data": "2013-02-26T02:21:46.000Z",
        "cliente": "Enzo Jesus"
      },
      {
        "data": "2013-02-17T08:22:13.000Z",
        "cliente": "Henrique Duarte"
      },
      {
        "data": "2012-09-12T02:34:15.000Z",
        "cliente": "Juliana Pires"
      },
      {
        "data": "2011-01-09T03:37:34.000Z",
        "cliente": "Gabrielly Melo"
      }
    ]
  },
  7: {
    "id": 7,
    "titulo": "O Ano da Morte de Ricardo Reis ",
    "ano_publicacao": 1935,
    "autor": "José Saramago",
    "sinopse": "Um tempo múltiplo. Labiríntico. As histórias das sociedades humanas. Ricardo Reis chega a Lisboa em finais de dezembro de 1935. Fica até setembro de 1936. Uma personagem vinda de uma outra ficção, a da heteronímia de Fernando Pessoa. E um movimento inverso, logo a começar: «Aqui onde o mar se acaba e a terra principia»; o virar ao contrário o verso de Camões: «Onde a terra acaba e o mar começa.» Em Camões, o movimento é da terra para o mar; no livro de Saramago temos Ricardo Reis a regressar a Portugal por mar. É substituído o movimento épico da partida. Mais uma vez, a história na escrita de Saramago. E as relações entre a vida e a morte. Ricardo Reis chega a Lisboa em finais de dezembro e Fernando Pessoa morreu a 30 de novembro. Ricardo Reis visita-o ao cemitério. Um tempo complexo. O fascismo consolida-se em Portugal.\n",
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/7/imagem",
    "vendas": [
      {
        "data": "2021-01-16T23:57:31.000Z",
        "cliente": "Ian Barros"
      },
      {
        "data": "2020-01-16T09:31:39.000Z",
        "cliente": "Valentina Moreira"
      },
      {
        "data": "2015-12-29T20:02:51.000Z",
        "cliente": "Guilherme Pires"
      },
      {
        "data": "2015-06-01T20:19:49.000Z",
        "cliente": "Ana Luiza Gonçalves"
      },
      {
        "data": "2014-11-09T15:59:18.000Z",
        "cliente": "Daniela Caldeira"
      }
    ]
  },
  9: {
    "id": 9,
    "titulo": "Uma Luz Inesperada",
    "ano_publicacao": 2005,
    "autor": "José Saramago",
    "sinopse": "«E houve também aqueles dois gloriosos dias em que fui ajuda de pastor, e a noite de permeio, tão gloriosa como os dias. Perdoe-se a quem nasceu no campo, e dele foi levado cedo, esta insistente chamada que vem de longe e traz no seu silencioso apelo uma aura, uma coroa de sons, de luzes, de cheiros miraculosamente conservados intactos. O mito do paraíso perdido é o da infância — não há outro. O mais são realidades a conquistar, sonhadas no presente, guardadas no futuro inalcançável. E sem elas não sei o que faríamos hoje. Eu não o sei.»\n\nNeste fragmento de A Bagagem do Viajante (1973), José Saramago recorda o dia em que foi ajudar o tio a vender porcos na feira. O reconto dessa experiência aparentemente comum espelha todo o seu poder narrativo, levando-nos para um mundo de deslumbramento que só a infância permite, e que Armando Fonseca ilustra na perfeição.\n",
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/9/imagem",
    "vendas": [
      {
        "data": "2020-07-29T02:34:27.000Z",
        "cliente": "Sr. Eduardo Duarte"
      },
      {
        "data": "2016-12-15T13:50:01.000Z",
        "cliente": "Ana Clara Cardoso"
      },
      {
        "data": "2016-03-11T23:54:53.000Z",
        "cliente": "Letícia da Costa"
      },
      {
        "data": "2014-05-16T12:32:47.000Z",
        "cliente": "Benjamin Martins"
      },
      {
        "data": "2012-08-06T06:29:04.000Z",
        "cliente": "Sr. Bryan da Luz"
      },
      {
        "data": "2011-12-24T14:38:51.000Z",
        "cliente": "Ana Costa"
      },
      {
        "data": "2011-03-19T00:56:48.000Z",
        "cliente": "Luiza Oliveira"
      },
      {
        "data": "2010-12-25T01:58:46.000Z",
        "cliente": "Vitor da Mata"
      }
    ]
  },
  10: {
    "id": 10,
    "titulo": "O Silêncio da Água",
    "ano_publicacao": 2022,
    "autor": "José Saramago",
    "sinopse": "«Voltei ao sítio, já o Sol se pusera, lancei o anzol e esperei. Não creio que exista no mundo um silêncio mais profundo que o silêncio da água. Senti-o naquela hora e nunca mais o esqueci.» Publicada originalmente em As Pequenas Memórias (2006), esta recordação de infância de José Saramago transformou-se num conto universal, pleno de sabedoria e doçura, agora com as encantadoras ilustrações de Yolanda Mosquera.",
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/10/imagem",
    "vendas": [
      {
        "data": "2021-06-20T03:32:38.000Z",
        "cliente": "Natália Cavalcanti"
      },
      {
        "data": "2019-03-09T03:00:25.000Z",
        "cliente": "Henrique Teixeira"
      },
      {
        "data": "2018-11-12T08:21:58.000Z",
        "cliente": "Vinicius Ramos"
      },
      {
        "data": "2017-12-09T11:39:04.000Z",
        "cliente": "Luiz Henrique Viana"
      },
      {
        "data": "2016-05-28T17:28:57.000Z",
        "cliente": "Bárbara Pereira"
      },
      {
        "data": "2014-10-09T06:25:48.000Z",
        "cliente": "Alícia Cardoso"
      },
      {
        "data": "2014-06-09T09:46:01.000Z",
        "cliente": "Lucca Barros"
      },
      {
        "data": "2013-09-29T13:37:53.000Z",
        "cliente": "Maria Sophia da Cruz"
      },
      {
        "data": "2013-09-28T06:23:02.000Z",
        "cliente": "Sarah Costa"
      },
      {
        "data": "2012-04-01T09:35:41.000Z",
        "cliente": "Fernando Souza"
      },
      {
        "data": "2011-10-23T03:00:10.000Z",
        "cliente": "Sarah Costa"
      }
    ]
  },
  11: {
    "id": 11,
    "titulo": "A Jangada de Pedra",
    "ano_publicacao": 2021,
    "autor": "José Saramago",
    "sinopse": "Em A Jangada de Pedra (…) o escritor recorre a um estratagema típico. Uma série de acontecimentos sobrenaturais culmina na separação da Península Ibérica que começa a vogar no Atlântico, inicialmente em direção aos Açores. A situação criada por Saramago dá-lhe um sem-número de oportunidades para, no seu estilo muito pessoal, tecer comentários sobre as grandezas e pequenezas da vida, ironizar sobre as autoridades e os políticos e, talvez muito especialmente, com os atores dos jogos de poder na alta política. O engenho de Saramago está ao serviço da sabedoria.",
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/11/imagem",
    "vendas": [
      {
        "data": "2021-04-17T13:53:34.000Z",
        "cliente": "Luiz Fernando Freitas"
      },
      {
        "data": "2021-02-16T22:06:55.000Z",
        "cliente": "Bruno da Cruz"
      },
      {
        "data": "2021-01-18T00:14:19.000Z",
        "cliente": "Srta. Júlia Rodrigues"
      },
      {
        "data": "2020-03-29T05:55:09.000Z",
        "cliente": "Isaac Lima"
      },
      {
        "data": "2017-04-06T11:33:06.000Z",
        "cliente": "Luana Cavalcanti"
      },
      {
        "data": "2016-03-21T06:12:19.000Z",
        "cliente": "Nicole Lima"
      },
      {
        "data": "2015-11-14T02:55:16.000Z",
        "cliente": "Cecília Costela"
      },
      {
        "data": "2012-07-14T02:46:48.000Z",
        "cliente": "Lorena Sales"
      },
      {
        "data": "2011-08-04T09:16:23.000Z",
        "cliente": "Sra. Cecília Costa"
      },
      {
        "data": "2011-07-03T19:40:22.000Z",
        "cliente": "Luna Porto"
      }
    ]
  },
  12: {
    "id": 12,
    "titulo": "Memorial do Convento",
    "ano_publicacao": 2022,
    "autor": "José Saramago",
    "sinopse": "«Um romance histórico inovador. Personagem principal, o Convento de Mafra. O escritor aparta-se da descrição engessada, privilegiando a caracterização de uma época. Segue o estilo: \"Era uma vez um rei que fez promessas de levantar um convento em Mafra... Era uma vez a gente que construiu esse convento... Era uma vez um soldado maneta e uma mulher que tinha poderes... Era uma vez um padre que queria voar e morreu doido\". Tudo, \"era uma vez...\". Logo a começar por \"D. João, quinto do nome na tabela real, irá esta noite ao quarto de sua mulher, D. Maria Ana Josefa, que chegou há mais de dois anos da Áustria para dar infantes à coroa portuguesa a até hoje ainda não emprenhou (...). Depois, a sobressair, essa espantosa personagem, Blimunda, ao encontro de Baltasar. Milhares de léguas andou Blimundo, e o romance correu mundo, na escrita e na ópera (numa adaptação do compositor italiano Azio Corghi). Para a nossa memória ficam essas duas personagens inesquecíveis, um Sete Sóis e o outro Sete Luas, a passearem o seu amor pelo Portugal violento e inquisitorial dos tristes tempos do rei D. João V.» (Diário de Notícias, 9 de outubro de 1998)",
    "imagem": "https://m9-frontend.upskill.appx.pt/livraria/livros/11/imagem",
    "vendas": []
  }
}

export default detalhes;
