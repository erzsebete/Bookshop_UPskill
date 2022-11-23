import {Component, OnInit} from '@angular/core';
import {LivrariaService} from "../livraria.service";
import {Livro} from "../interfaces";


@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})



export class LivrosComponent implements OnInit {

  livros: Livro[] = [];


constructor(private livrariaService : LivrariaService){}


/* Ou:
  ngOnInit() : void {
    this.livrariaService.getLivros().subscribe((livros: any) => {
      this.livros = livros;
    })
*/

ngOnInit() : void {
  this.livrariaService.getLivros().subscribe((livros) => {
    this.livros = <any[]>livros;
  })
}
}
