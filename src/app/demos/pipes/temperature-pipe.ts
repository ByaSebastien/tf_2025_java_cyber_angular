import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  // Un pipe aura toujours en paramètres 
  // value : la valeur qui se trouve à gauche de notre pipe (il faudra préciser le type)
  // un ou des params : par défaut ...args mais si on n'en a qu'un, on peut remplacer par juste un param
  // et 
  // un type du retour (par défaut quand on vient de créer le pipe, il est en unknown puisqu'on ne le connait pas encore)

  transform(value: number, unit : string = 'c-f'): string {
     switch(unit){
        case 'c-f' :
          return `${ Math.round(value * 9/5 + 32) } °F`;
        case 'f-c' : 
          return `${ Math.round((value - 32) * 5/9) } °C`;
        case 'c-k' :
          return `${ Math.round(value + 273.15) } °K`;
        case 'k-c' : 
          return `${ Math.round(value - 273.15) } °C`;
        //flemme de faire k-f et f-k
        default : 
          return value.toString();
     }
  }

}
