import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {faBookmark} from '@fortawesome/free-solid-svg-icons';
import {faBookmark as faBookmarkRegular} from '@fortawesome/free-regular-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';


import {LivrariaService} from "../livraria.service";
import {DetalheLivro} from "../data/detalhes_livros";


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})

export class DetalhesComponent {
  faBookmark = faBookmark;
  faBookmarkRegular = faBookmarkRegular;

  id!: number;
  dt: DetalheLivro;








  constructor(private route: ActivatedRoute, public livrariaService: LivrariaService) {

    this.id = route.snapshot.params['id_livro'];
    this.dt = this.livrariaService.getDetalhes(this.id);


  }




}


