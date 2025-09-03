import {Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';

@Component({
  selector: 'app-exo3-enfant',
  imports: [],
  templateUrl: './exo3-enfant.html',
  styleUrl: './exo3-enfant.scss'
})
export class Exo3Enfant {

  items: InputSignal<string[]> = input.required();
  deleteEvent: OutputEmitterRef<number> = output();
}
