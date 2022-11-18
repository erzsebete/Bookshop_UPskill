import {Component, Input, OnInit} from '@angular/core';
import {faEye} from '@fortawesome/free-solid-svg-icons';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  olhoAzul() {
    window.open("https://www.google.com", "_blank");
  }
}


