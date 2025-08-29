import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturePipe } from '../../pipes/temperature-pipe';

@Component({
  selector: 'app-demo2',
  /* Pour utiliser les pipes natifs, on peut soit importer CommonModule et on les a tous ou alors on peut importer chacun des pipes individuellement */
  imports: [CommonModule /*,UpperCasePipe*/, TemperaturePipe],
  templateUrl: './demo2.html',
  styleUrl: './demo2.scss'
})
export class Demo2 {
  welcome : string = 'Bonjour et bienvenue au cours d\'Angular !';

  pi : number = 3.141592653589793;
  price : number = 12;

  today : Date = new Date();

  person : { firstname : string, lastname : string } = {
    firstname : 'Aude',
    lastname : 'Beurive'
  }

  temperature : number = 25;
  temperatureF : number = 85;

}
