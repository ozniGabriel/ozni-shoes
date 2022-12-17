import { ProductsService } from './../../../services/products.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Sapato } from 'src/app/Models/sapato.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  sapatos!: Sapato[]
  
  constructor(private produtosServico: ProductsService) {}
  
  ngOnInit(): void {
    this.sapatos = this.produtosServico.getHomeProducts()
  }

  

}
