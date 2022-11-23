import { Component, OnInit } from '@angular/core';
import {faBookOpen, faPenNib, faBookmark, faList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent implements OnInit {

  faBookOpen = faBookOpen;
  faPenNib=faPenNib;
  faBookmark=faBookmark;
  faList = faList;

  constructor() { }

  ngOnInit(): void {
  }

}
