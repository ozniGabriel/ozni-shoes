import { ProductsService } from './../../../services/products.service';
import { Sapato } from 'src/app/Models/sapato.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css']
})
export class PromocoesComponent implements OnInit {

  sapatosPromo!: Sapato[]
  constructor(private produtosService: ProductsService) { }

  ngOnInit(): void {
    this.sapatosPromo = this.produtosService.getPromoProducts()
  }

}
