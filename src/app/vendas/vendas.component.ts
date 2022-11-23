import { Component, OnInit } from '@angular/core';
import {LivrariaService} from "../livraria.service";

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  vd = this.livrariaService.getVendas()


  constructor(private livrariaService : LivrariaService) { }

  ngOnInit(): void {
  }

}
