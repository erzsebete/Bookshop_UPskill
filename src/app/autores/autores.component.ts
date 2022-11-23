import { Component, OnInit } from '@angular/core';
import {LivrariaService} from "../livraria.service";

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  autores = this.livrariaService.getAutores();

  constructor(private livrariaService : LivrariaService) { }

  ngOnInit(): void {
  }

}
