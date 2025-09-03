import {Component, inject} from '@angular/core';
import {Demo5Service} from '../services/demo5.service';
import {Formateur} from '../models/formateur';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo5-detail',
  imports: [],
  templateUrl: './demo5-detail.html',
  styleUrl: './demo5-detail.scss'
})
export class Demo5Detail {

  private readonly _ar: ActivatedRoute = inject(ActivatedRoute);
  private readonly _formateurService: Demo5Service = inject(Demo5Service);
  formateur?: Formateur;

  constructor() {
    let id = + this._ar.snapshot.params['id'];
    this.formateur = this._formateurService.getById(id);
  }
}
