import { CarrinhoService } from '../../../services/carrinho.service';
import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})

export class NavComponent implements OnInit {
  itemsNoCarro: any
  openMenu = false
  isMobile = true

  constructor(private carrinho: CarrinhoService) {}

  ngOnInit() {
    setInterval(() => {
      this.getCar();
    }, 300);

    if(window.innerWidth > 799){
      this.isMobile = false
    }
  }

  getCar() {
    this.carrinho.productsInCar
    .subscribe(items => this.itemsNoCarro = items.length)
  }

  // ABRIR E FECHAR MENU
  // PORÉM SÓ ME SERVE EM DISPOSITIVOS MOVEIS, POR ISSO FIZ A CONDICAO ABAIXO
  openMenuMobile(){
    // SÓ ABRE/FECHA SE FOR UM DISPOSITIVO MÓVEL 
    if(window.innerWidth < 799){
      this.openMenu = !this.openMenu
    }
  }
}
