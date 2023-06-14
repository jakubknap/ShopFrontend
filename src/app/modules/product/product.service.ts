import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        name: "Produkt 1",
        category: "Kategoria 1",
        description: "Opis produktu 1",
        price: 11.99,
        currency: "PLN"
      },
      {
        name: "Produkt 2",
        category: "Kategoria 2",
        description: "Opis produktu 2",
        price: 11.99,
        currency: "PLN"
      },
      {
        name: "Produkt 3",
        category: "Kategoria 3",
        description: "Opis produktu 3",
        price: 11.99,
        currency: "PLN"
      }
    ];
  }
}
