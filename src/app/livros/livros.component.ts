import {Component, OnInit} from '@angular/core';
import Livros from "../data/livros"



interface Livro {
  imagem: string;
  titulo: string;
  autor: Autor;
  ano: number;
}

interface Autor {
  nome: string;
  data_nascimento: Date;
  nacionalidade: string
}

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

livros = Livros;

livro1: Livro =
  {
    imagem: "https://m9-frontend.upskill.appx.pt/livraria/livros/12/imagem",
    titulo: "Memorial do Convento",
    autor: {
      nome: "José Saramago",
      data_nascimento: new Date(1922, 11, 16),
      nacionalidade: "portuguesa"
    },
    ano: 1982
  }
livro2: Livro =
  {
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Book_cover_of_Ensaio_sobre_a_Cegueira.jpg/230px-Book_cover_of_Ensaio_sobre_a_Cegueira.jpg",
    titulo: "Ensaio sobre a Cegueira",
    autor: {
      nome: "José Saramago",
      data_nascimento: new Date(1922, 11, 16),
      nacionalidade: "portuguesa"
    },
    ano: 1995
  }
livro3: Livro =
  {
    imagem: "https://static.fnac-static.com/multimedia/Images/PT/NR/b6/d9/07/514486/1540-6/tsp20160819065932/O-Deus-das-Moscas.jpg",
    titulo: "O Deus das Moscas",
    autor: {
      nome: "William Golding",
      data_nascimento: new Date(1911, 9, 19),
      nacionalidade: "inglesa"
    },
    ano: 1954
  }
livro4: Livro =
  {
    imagem: "https://static.fnac-static.com/multimedia/Images/PT/NR/d4/8b/04/297940/1545-6/tsp20160819012324/Crime-e-Castigo.jpg",
    titulo: "Crime e Castigo",
    autor: {
      nome: "Fiódor Dostoiévski",
      data_nascimento: new Date(1821, 11, 11),
      nacionalidade: "russa"
    },
    ano: 1866
  }
livro5: Livro =
  {
    imagem: "https://static.fnac-static.com/multimedia/Images/PT/NR/51/c3/09/639825/1545-6/tsp20160817131842/Orgulho-e-Preconceito.jpg",
    titulo: "Orgulho e Preconceito",
    autor: {
      nome: "Jane Austen",
      data_nascimento: new Date(1775, 7, 18),
      nacionalidade: "inglesa"
    },
    ano: 1813
  }


constructor()
{
}

ngOnInit()
:
void {}

}
