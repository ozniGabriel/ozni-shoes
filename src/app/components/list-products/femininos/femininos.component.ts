import { ProductsService } from './../../../services/products.service';
import { Sapato } from 'src/app/Models/sapato.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './femininos.component.html',
  styleUrls: ['./femininos.component.css']
})
export class FemininosComponent implements OnInit {

  sapatosFemininos!: Sapato[]

  constructor(private produtosServico: ProductsService) { }

  ngOnInit(): void {
    this.sapatosFemininos = this.produtosServico.getWomanProducts()
  }

}
