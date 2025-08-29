import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[sound]'
})
export class Sound {
  // Pour pouvoir mettre un attribut à notre directives
  // Si on veut l'utiliser directement sur la directive, on doit mettre le même nom
  sound = input('');

  audio : HTMLAudioElement = new Audio();

  //injection de dépendance
  // element -> représente l'élément HTML sur lequel se trouve la directive
  element : ElementRef = inject(ElementRef);

  constructor() { 
      this.element.nativeElement.style.fontWeight = 'bold';
      this.element.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('click') onMouseClick(){
      this.audio.src = this.sound();
      
      this.audio.play();
      this.element.nativeElement.style.backgroundColor = 'lightblue';
    
  } 

  @HostListener('mouseleave') onMouseLeave(){
      this.audio.pause();
      this.element.nativeElement.style.backgroundColor = 'transparent';
  }
}
