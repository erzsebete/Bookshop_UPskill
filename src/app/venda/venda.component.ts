import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {


  @Input() livro? : string
  @Input() cliente! : string
  @Input() data! : string
  @Input() valor? : number
  @Input() livro_imagem? : string
  @Input() tipo : string = "lista"

  constructor() { }

  ngOnInit(): void {
  }

}
