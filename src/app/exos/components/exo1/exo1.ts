import { Component } from '@angular/core';
import { TimerPipe } from '../../pipes/timer-pipe';

@Component({
  selector: 'app-exo1',
  imports: [TimerPipe],
  templateUrl: './exo1.html',
  styleUrl: './exo1.scss'
})
export class Exo1 {
  seconds : number = 0;
  //timer : any était autorisé pour celui ci vu que le type est plus complexe
  timer : ReturnType<typeof setInterval> | undefined;
  format : string = 'short';

  start() : void {
      this.timer = setInterval(() => {
        this.seconds++;
      }, 100);
  }

  pause() : void {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  reset() : void {
    this.pause();
    this.seconds = 0;
  }

  changeFormat(){

    this.format = (this.format == 'short') ? 'long' : 'short';

    // if(this.format == 'short'){
    //   this.format = 'long';
    // }
    // else if(this.format == 'long') {
    //   this.format = 'short';
    // }

  }



}
