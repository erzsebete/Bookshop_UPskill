import { Component, OnInit } from '@angular/core';
import {LivrariaService} from "../livraria.service";
import {Autor, Venda} from "../interfaces";

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  vd : Venda[] = []


  constructor(public livrariaService : LivrariaService) { }

  ngOnInit(): void {
    this.livrariaService.getVendas().subscribe((venda ) => {
      this.vd = <Venda[]> venda;
    })
  }
}

