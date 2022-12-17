import { CarrinhoService } from './services/carrinho.service';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {MatBadgeModule} from '@angular/material/badge';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(ptBr);

import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/list-products/home/home.component';
import { MasculinosComponent } from './components/list-products/masculinos/masculinos.component';
import { FemininosComponent } from './components/list-products/femininos/femininos.component';
import { PromocoesComponent } from './components/list-products/promocoes/promocoes.component';
import { FilterComponent } from './components/shared/filter/filter.component';
import { SaleItemTemplateComponent } from './components/sale-item-template/sale-item-template.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    MasculinosComponent,
    FemininosComponent,
    PromocoesComponent,
    FilterComponent,
    SaleItemTemplateComponent,
    CarrinhoComponent,
    DetailsProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatBadgeModule,

  ],
  providers: [
    CarrinhoService,
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
