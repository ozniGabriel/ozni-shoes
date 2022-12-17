import { CarrinhoService } from './../../services/carrinho.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  product: any
  parametrosUrl: any
  constructor(private route: ActivatedRoute, private productService: ProductsService, private carrinho: CarrinhoService) { }

  ngOnInit(){
    this.route.params.subscribe( (params) => {
      // PEGO OS PARAMETROS DA MINHA URL
      this.parametrosUrl = params
      // CHAMO UMA FUNCAO DO MEU SERVICO PASSANDO O ID DA MINHA URL COMO ARGUMENTO
      this.product = this.productService.getSingleProduct(this.parametrosUrl.id)[0]
    })
  }

  favorite(productId: any){
    this.productService.favoriteProduct(productId)
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
