import { ProductsService } from './products.service';
import { Sapato } from 'src/app/Models/sapato.model';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarrinhoService {
  productsInCar!: Observable<Sapato[]>

  constructor(private produtosServico: ProductsService) {
    this.getProducts()
    this.productsInCar = of(PRODUCTS_IN_CAR)
  
  }

  getProducts(){
    PRODUCTS_IN_CAR = this.produtosServico.getProductsInCar()
  }

  addProductInCar(newProduct: any){
    PRODUCTS_IN_CAR.push(newProduct)
  }

  removeProductOfCar(productId: any){
    PRODUCTS_IN_CAR.forEach((produto, indice, array) => {
      if(produto.id == productId){
        array.splice(indice, 1)
      }
    });
  }

  IncrementUnitInCar(productId: any){
    PRODUCTS_IN_CAR.forEach((produto)=>{
      if(produto.id == productId){
        produto.unitsInCar++
      }
    })
  }

  DecrementUnitInCar(productId: any){
    PRODUCTS_IN_CAR.forEach((produto)=>{
      if(produto.id == productId){
        if(produto.unitsInCar > 0){
          produto.unitsInCar--
        }
      }
    })
  }

  getSumProductsInCar(carrinho: Array<Sapato>, precos?: Array<number>): number{
    precos = carrinho.map((item)=>{
      return item.price * item.unitsInCar
    })
    TOTAL = precos.reduce((acumulador, proxItem) => acumulador + proxItem, 0)
    return TOTAL
  }
  
}

let TOTAL = 0
let PRODUCTS_IN_CAR: Sapato[] = []
