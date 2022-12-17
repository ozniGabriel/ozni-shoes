import { ProductsService } from './../../services/products.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-item-template',
  templateUrl: './sale-item-template.component.html',
  styleUrls: ['./sale-item-template.component.css']
})

export class SaleItemTemplateComponent implements OnInit {

  @Input() name = ''
  @Input() image = ''
  @Input() description = ''
  @Input() price: number = 0
  @Input() seller = ''
  @Input() inCar!: boolean
  @Input() id!: number
  @Input() favorited = false
  @Input() condition = ''
  @Input() unitsInCar = 0

  constructor(private carrinho: CarrinhoService, 
    private productService: ProductsService) { }

  ngOnInit(): void {
    
  }

  favorite(id: any){
    this.productService.favoriteProduct(id)
  }

  onPushProduct(newProduct: any){
    this.carrinho.addProductInCar(newProduct)
    this.productService.removeOrPushProductOfCar(newProduct.id)
  }

  onDeleteProduct(productId: any){
    this.carrinho.removeProductOfCar(productId)
    this.productService.removeOrPushProductOfCar(productId)
  }

}
