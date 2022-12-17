import { Sapato } from 'src/app/Models/sapato.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductsService implements OnInit{

  constructor() { }

  ngOnInit(){
  }

  getHomeProducts(){
    return SAPATOS
  }

  getWomanProducts(){
    return SAPATOS.filter(sapato => sapato.category == 'feminino')
  }
  getManProducts(){
    return SAPATOS.filter(sapato => sapato.category == 'masculino')
  }
  getPromoProducts(){
    return SAPATOS.filter(sapato => sapato.category == 'promo')
  }

  getSingleProduct(id: any){
    return SAPATOS.filter(sapato => sapato.id == id)
  }

  getProductsInCar(){
    return SAPATOS.filter( sapato => sapato.inCar == true)
  }

  removeOrPushProductOfCar(productId: any){
    SAPATOS.forEach((sapato) =>{
      if(sapato.id == productId){
        sapato.inCar = !sapato.inCar
      }
    })
  }

  favoriteProduct(productId: any){
    SAPATOS.forEach((sapato) =>{
      if(sapato.id == productId){
        sapato.like = !sapato.like
      }
    })
  }

  addUnit(productId: number){
    SAPATOS.forEach((sapato)=>{
      if(sapato.id == productId){
        sapato.unitsInCar++
      }
    })
  }
  removeUnit(productId: number){
    SAPATOS.forEach((sapato)=>{
      if(sapato.id == productId){
        sapato.unitsInCar--
      }
    })
  }
  
}

var SAPATOS = [
  {
    id: 1,
    name: "Tênis Nike Downshifter",
    price: 200,
    description: "Mesh respirável e macio que auxilia na ventilação interna. Entressola: oferece amortecimento em cada passada. Solado: borracha resistente.",
    seller: "Br-30",
    img: "./assets/image/spt1.jpg",
    like: false,
    category: 'masculino',
    inCar: false,
    condition: 'Novo',
    unitsInCar: 1
  },
  {
    id: 2,
    name: "ADIDAS ELA",
    price: 300,
    description: "Mesh respirável e macio que auxilia na ventilação interna. Entressola: oferece amortecimento em cada passada. Solado: borracha resistente.",
    seller: "Mg-48",
    img: "./assets/image/spt2.jpg",
    like: false,
    category: 'feminino',
    inCar: false,
    condition: 'Novo',
    unitsInCar: 1
  },
  {
    id: 3,
    name: "ADIDAS SPRING",
    price: 540,
    description: "Mesh respirável e macio que auxilia na ventilação interna. Entressola: oferece amortecimento em cada passada. Solado: borracha resistente.",
    seller: "ba-94",
    img: "./assets/image/spt3.jpg",
    like: false,
    category: 'masculino',
    inCar: false,
    condition: 'Novo',
    unitsInCar: 1
  },
  {
    id: 4,
    name: "FILA MDOX",
    price: 800,
    description: "Mesh respirável e macio que auxilia na ventilação interna. Entressola: oferece amortecimento em cada passada. Solado: borracha resistente.",
    seller: "meu pai",
    img: "./assets/image/spt4.jpg",
    like: false,
    category: 'promo',
    inCar: false,
    condition: 'Novo',
    unitsInCar: 1
  },
  {
    id: 5,
    name: "NIKE FUSION",
    price: 850,
    description: "Mesh respirável e macio que auxilia na ventilação interna. Entressola: oferece amortecimento em cada passada. Solado: borracha resistente.",
    seller: "meu irmão",
    img: "./assets/image/spt5.jpg",
    like: false,
    category: 'masculino',
    inCar: false,
    condition: 'Novo',
    unitsInCar: 1
  },
  {
    id: 6,
    name: "ADIDAS TRACKER ELA",
    price: 850,
    description: "Mesh respirável e macio que auxilia na ventilação interna. Entressola: oferece amortecimento em cada passada. Solado: borracha resistente.",
    seller: "meu irmão",
    img: "./assets/image/spt6.jpg",
    like: false,
    category: 'feminino',
    inCar: false,
    condition: 'Novo',
    unitsInCar: 1
  }
]
