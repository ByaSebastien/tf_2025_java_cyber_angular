import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number, format : string = 'short'): string {
   
    let minutes = Math.floor(value / 60);
    let secondes = value % 60;

    if(format === 'short') {
      //permet de rajouter un 0 jusqu'à avoir 2 caractères. Si ça fait déjà 2 caractères ne fera rien
      //minutes.toString().padStart(2, '0');
      return `${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`;
    }
    else if(format === 'long'){
      return `${minutes} minute${minutes > 1? 's' : '' } et ${secondes} seconde${secondes > 1 ? 's' : ''}`;
    }
    else {
      return value.toString();
    }
  }

}
