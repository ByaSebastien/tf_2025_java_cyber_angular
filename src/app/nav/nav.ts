import { Component } from '@angular/core';
import {Link} from '../models/link';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {

  links: Link[] = [
    { title: 'Bindings' , url: '/demo1'},
    { title: 'Pipes' , url: '/demo2'},
    { title: 'Directives' , url: '/demo3'},
    { title: 'Input/Output' , url: '/demo4'},
    { title: 'Timer' , url: '/exo1'},
    { title: 'Courses' , url: '/exo2'},
  ];
}
