import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LivroComponent } from './livro/livro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {RouterLink} from "@angular/router";
import { LivrosComponent } from './livros/livros.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { AutoresComponent } from './autores/autores.component';
import { VendasComponent } from './vendas/vendas.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { AppRoutingModule } from './app-routing.module';
import { VendaComponent } from './venda/venda.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LivroComponent,
    LivrosComponent,
    CabecalhoComponent,
    NavegacaoComponent,
    DetalhesComponent,
    AutoresComponent,
    VendasComponent,
    FavoritosComponent,
    VendaComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FontAwesomeModule,
        RouterLink,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
