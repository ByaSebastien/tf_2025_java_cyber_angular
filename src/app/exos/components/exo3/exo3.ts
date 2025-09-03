import { Component } from '@angular/core';
import {Exo3Enfant} from './exo3-enfant/exo3-enfant';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-exo3',
  imports: [
    Exo3Enfant,
    FormsModule
  ],
  templateUrl: './exo3.html',
  styleUrl: './exo3.scss'
})
export class Exo3 {

  private readonly _products: string[] = ["A", "B", "C"];
  productName: string = '';

  get products() {
    return [...this._products];
  }

  addProduct(): void {

    let name = this.productName.trim();

    this.productName = '';

    if(!name) {
      return;
    }

    this._products.push(name);

  }

  deleteProduct(i: number): void {
    this._products.splice(i, 1);
  }
}
