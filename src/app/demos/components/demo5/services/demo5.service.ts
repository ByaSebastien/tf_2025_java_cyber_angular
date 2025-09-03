import { Injectable } from '@angular/core';
import {Formateur} from '../models/formateur';

@Injectable({
  providedIn: 'root'
})
export class Demo5Service {

  private readonly _formateurs: Formateur[] = [
    {
      id: 1,
      firstname: 'Aude',
      lastname: 'Beurive',
    },
    {
      id: 2,
      firstname: 'Flavian',
      lastname: 'Ovyn',
    },
    {
      id: 3,
      firstname: 'Sébastien',
      lastname: 'Bya',
    },
  ];

  getAll(): Formateur[] {
    return [...this._formateurs];
  }

  getById(id: number): Formateur | undefined {
    let formateur: Formateur | undefined = this._formateurs.find(f => f.id === id);
    if(!formateur) {
      return undefined;
    }
    return {...formateur};
  }
}
