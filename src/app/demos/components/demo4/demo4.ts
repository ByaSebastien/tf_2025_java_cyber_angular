import {Component} from '@angular/core';
import {Demo4Enfant} from '../demo4-enfant/demo4-enfant';

@Component({
  selector: 'app-demo4',
  imports: [
    Demo4Enfant
  ],
  templateUrl: './demo4.html',
  styleUrl: './demo4.scss'
})
export class Demo4 {

  products: string[] = ['A', 'B', 'C', 'D', 'E'];

  productToDelete: string | undefined = undefined;

  testTw: string = 'ok';

  selectProductToDelete(product: string) {
    this.productToDelete = this.products.find(p => p === product);
  }

  deleteProduct(isOk: boolean) {
    if (isOk) {
      this.products.splice(this.products.indexOf(this.productToDelete!), 1);
    }
    this.productToDelete = undefined;
  }
}
