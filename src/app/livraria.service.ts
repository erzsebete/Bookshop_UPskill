import { Injectable } from '@angular/core';
import livros from "./data/livros";
import autores from "./data/autores";
import detalhes_livros from "./data/detalhes_livros";
import vendas from "./data/vendas";
import favoritos from "./data/favoritos";

@Injectable({
  providedIn: 'root'
})



export class LivrariaService {

  constructor() { }

  listaFav: number [] = JSON.parse(localStorage.getItem("favoritos") || "[]");

  toggleFavorite(id:number) {

    if (this.isFavorite(id))
    {
      this.listaFav.splice(this.listaFav.indexOf(id), 1);
      this.guardarLocalStorage(id);
    }
    else
    {
      this.listaFav.push(id)
      this.guardarLocalStorage(id)
    }
  }

  isFavorite(id:number) {
    return this.listaFav.includes(id);
  }

  guardarLocalStorage (id:number)
  {
    localStorage.setItem("favoritos", JSON.stringify(this.listaFav));
  }



  getListaFav ()
  {
    return this.listaFav;
  }

  getImagemFav (id:number)
  {
    return this.getDetalhes(id).imagem;
  }


  getLivros()
  {
    return livros;
  }

  getDetalhes(id : number)
  {
    return detalhes_livros[id];
  }

  getAutores()
  {
    return autores;
  }

  getFavoritos()
  {
    return favoritos;
  }

  getVendas()
  {
    return vendas;
  }
}
