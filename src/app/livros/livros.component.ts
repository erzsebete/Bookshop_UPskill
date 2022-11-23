import {Component, OnInit} from '@angular/core';
import {LivrariaService} from "../livraria.service";

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

constructor(private livrariaService : LivrariaService){}

  livros = this.livrariaService.getLivros();


ngOnInit()
:
void {}

}
