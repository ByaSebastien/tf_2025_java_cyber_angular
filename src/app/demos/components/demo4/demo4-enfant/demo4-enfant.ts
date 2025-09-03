import {
  Component,
  EventEmitter,
  input,
  Input,
  InputSignal,
  model, ModelSignal,
  output,
  Output,
  OutputEmitterRef
} from '@angular/core';

@Component({
  selector: 'app-demo4-enfant',
  imports: [],
  templateUrl: './demo4-enfant.html',
  styleUrl: './demo4-enfant.scss'
})
export class Demo4Enfant {

  product: InputSignal<string> = input.required();
  confirm: OutputEmitterRef<boolean> = output<boolean>();
  tw: ModelSignal<string> = model.required<string>();

  // Ancienne methode

  // @Input({required:true})
  // product!: string;

  // @Output()
  // confirm: EventEmitter<boolean> = new EventEmitter();

  // Pour le two way il suffit de nomer l'output avec [nomDeLinput]Change
  // @Input()
  // tw!: string;
  // @Output()
  // twChange = new EventEmitter<string>();

  confirmDelete(isOk: boolean) {
    this.confirm.emit(isOk);
  }

  test(){
    this.tw.set("Kawabunga!")
  }
}
