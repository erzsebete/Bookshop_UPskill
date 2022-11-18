import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LivroComponent } from './livro/livro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {RouterLink} from "@angular/router";
import { LivrosComponent } from './livros/livros.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroComponent,
    LivrosComponent
  ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        RouterLink
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
