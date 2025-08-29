import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sound } from '../../directives/sound';

@Component({
  selector: 'app-demo3',
  imports: [FormsModule, CommonModule, Sound],
  templateUrl: './demo3.html',
  styleUrl: './demo3.scss'
})
export class Demo3 {
  // pour demo ngmodel
  repasDuJour : string = '';

  // pour demo ngStyle
  textColorOptions : string[] = ['red', 'blue', 'orange', 'fuschia', 'green'];
  textColorCount : number = 0;

  textColor : string;

  // pour demo ngClass
  temperature : number = 35;

  // pour demo if
  today : Date = new Date();

  // pour demo for
  trainers : string[] = ['Flavian', 'Seb', 'Aude'];

  // pour demo switch
  // en fait on va réutiliser today


  constructor(){
    this.textColor = this.textColorOptions[this.textColorCount];

    setInterval(() => {
      //On augmente de 1 le compteur
      this.textColorCount++;

      //Si le compteur est arrivé au bout du tableau, on revient à 0
      if(this.textColorCount >= this.textColorOptions.length) {
        this.textColorCount = 0;
      }

      //On modifie la couleur courante
      this.textColor = this.textColorOptions[this.textColorCount];

    }, 500)


  }
  
}
