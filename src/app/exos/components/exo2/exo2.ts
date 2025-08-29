import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

interface Product {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-exo2',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './exo2.html',
  styleUrl: './exo2.scss'
})
export class Exo2 {

  productName: string = '';
  productQuantity: number = 1;

  courses: Product[] = [];

  // courses: Set<string> = new Set();

  addCourse() {

    if (this.productQuantity < 1) {
      this.productQuantity = 1;
      return;
    }
    if (!this.productName.trim()) {
      this.productName = '';
      return;
    }

    let existingProduct = this.courses.find(p => p.name === this.productName);

    if (existingProduct) {
      existingProduct.quantity += this.productQuantity;
    } else {

      let product = {
        name: this.productName.trim(),
        quantity: this.productQuantity
      };

      this.courses.push(product);
    }
    this.productName = '';
    this.productQuantity = 1;
  }

  deleteProduct(item: Product) {
    this.courses.splice(this.courses.indexOf(item), 1);
  }

  increaseQuantity(item: Product) {
    item.quantity++;
  }

  decreaseQuantity(item: Product) {
    item.quantity--;
    if(item.quantity <= 0) {
      this.deleteProduct(item);
    }
  }
}
