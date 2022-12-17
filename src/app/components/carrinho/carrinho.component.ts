import { Sapato } from './../../Models/sapato.model';
import { ProductsService } from './../../services/products.service';
import { CarrinhoService } from './../../services/carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent implements OnInit {
  carro: any
  total: any
  units = 1
  
  constructor(private carrinho: CarrinhoService, private produtoServico: ProductsService) { }

  ngOnInit(): void {
    this.carrinho.productsInCar
    .subscribe(items => {
      this.carro = items
      // CHAMADA DA FUNCAO DO TOTAL, PASSANDO COMO ARGUMENTO UM ARRAY COM OS PREÇOS DE CADA ITEM DO CARRO
      this.sumTotal(this.carro)
    })
  }
  
  sumTotal(array: Array<Sapato>){
    this.total = this.carrinho.getSumProductsInCar(array)
  
  }

  onAddOneUnit(id: number){
    this.carrinho.IncrementUnitInCar(id)
  }

  onRemoveOneUnit(id: number){
    this.carrinho.DecrementUnitInCar(id)
  }
  
}
