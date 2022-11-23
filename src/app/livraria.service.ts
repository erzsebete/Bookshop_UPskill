import { Injectable } from '@angular/core';
/*import livros from "./data/livros";
import autores from "./data/autores";
import detalhes_livros from "./data/detalhes_livros";
import vendas from "./data/vendas";*/
/*import favoritos from "./data/favoritos";*/
import {HttpClient} from "@angular/common/http";


const BASE_URL = "https://m9-frontend.upskill.appx.pt/livraria";


@Injectable({
  providedIn: 'root'
})

export class LivrariaService {

  constructor(private http: HttpClient) { }

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
    return BASE_URL + "/livros/"+ String(id)+"/imagem";
  }

  getLivros()
  {
    return this.http.get(BASE_URL + "/livros");
  }

  getDetalhes(id : number)
  {
    return this.http.get(BASE_URL + "/livros/"+ String(id));
  }

  getAutores()
  {
    return this.http.get(BASE_URL + "/autores");
  }

  getVendas()
  {
    return this.http.get(BASE_URL + "/vendas");
  }
}
