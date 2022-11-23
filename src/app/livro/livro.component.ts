import {Component, Input, OnInit} from '@angular/core';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})

export class LivroComponent implements OnInit {
  faEye = faEye;

  @Input() titulo! : string;
  @Input() imagem! : string;
  @Input() ano! : number;
  @Input() nome! : string;
  @Input() nacionalidade! : string;
  @Input() vendas! : number;

  @Input() id! :number;


/*
  constructor() {

  }
*/

  ngOnInit(): void {
  }

}


