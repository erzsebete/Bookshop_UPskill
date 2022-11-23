import { Component, OnInit } from '@angular/core';
import {LivrariaService} from "../livraria.service";
import {Autor} from "../interfaces";

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  /*autores = this.livrariaService.getAutores();*/

  autores : Autor[] = [];

  constructor(public livrariaService : LivrariaService) { }

  ngOnInit(): void {
    this.livrariaService.getAutores().subscribe((autores ) => {
      this.autores = <Autor[]> autores;
    })
  }
}
