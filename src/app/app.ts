import { Component, signal } from '@angular/core';
import { Demo1 } from "./demos/components/demo1/demo1";
import { Demo2 } from "./demos/components/demo2/demo2";
import { Exo1 } from './exos/components/exo1/exo1';
import { Demo3 } from "./demos/components/demo3/demo3";
import {Exo2} from './exos/components/exo2/exo2';

@Component({
  selector: 'app-root',
  imports: [Demo1, Demo2, Exo1, Demo3, Exo2],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo');
}
