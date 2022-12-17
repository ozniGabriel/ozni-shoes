import { DetailsProductComponent } from './components/details-product/details-product.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/list-products/home/home.component';
import { PromocoesComponent } from './components/list-products/promocoes/promocoes.component';
import { FemininosComponent } from './components/list-products/femininos/femininos.component';
import { MasculinosComponent } from './components/list-products/masculinos/masculinos.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'masculinos',
    component: MasculinosComponent,
  },
  {
    path: 'femininos',
    component: FemininosComponent,
  },
  {
    path: 'promocoes',
    component: PromocoesComponent,
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  },
  {
    path: 'detalhes/:id',
    component: DetailsProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
