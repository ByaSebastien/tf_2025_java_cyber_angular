import {Component, inject} from '@angular/core';
import {Demo5Service} from './services/demo5.service';
import {Formateur} from './models/formateur';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-demo5',
  imports: [
    RouterLink
  ],
  templateUrl: './demo5.html',
  styleUrl: './demo5.scss'
})
export class Demo5 {

  private readonly _formateurService: Demo5Service = inject(Demo5Service);

  formateurs: Formateur[];

  // Ancienne maniere de faire
  // constructor(private readonly _formateurService: Demo5Service) {}

  constructor() {
    this.formateurs = this._formateurService.getAll();
  }
}
