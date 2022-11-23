import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LivrosComponent} from "./livros/livros.component";



const routes: Routes = [
  {path: '', redirectTo: '/livros', pathMatch: 'full'},
  {path: 'livros', component: LivrosComponent},
  {path: 'detalhes/:id_livro', component: DetalhesComponent},
  {path: 'autores', component: AutoresComponent},
  {path: 'vendas', component: VendasComponent},
  {path: 'favoritos', component: FavoritosComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
