import { ProductsService } from './../../../services/products.service';
import { Sapato } from 'src/app/Models/sapato.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './masculinos.component.html',
  styleUrls: ['./masculinos.component.css']
})
export class MasculinosComponent implements OnInit {
  sapatosMasculinos!: Sapato[]

  constructor(private produtosServico: ProductsService) { }

  ngOnInit(): void {
    this.sapatosMasculinos = this.produtosServico.getManProducts()
  }

}
