import {Component} from '@angular/core';
import {LivrariaService} from "./livraria.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'livraria_upskill';
  constructor(public livrariaService: LivrariaService) {
  }
}


