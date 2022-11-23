import { Component, OnInit } from '@angular/core';
import {LivrariaService} from "../livraria.service";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  favoritos = this.livrariaService.getListaFav();

  constructor(public livrariaService : LivrariaService) { }

  ngOnInit(): void {
  }

}
