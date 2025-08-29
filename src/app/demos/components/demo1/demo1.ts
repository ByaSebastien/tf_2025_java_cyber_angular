import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-demo1',
  /* FormsModule : module natif Angular à importer pour pouvoir utiliser ngModel */
  imports: [FormsModule],
  templateUrl: './demo1.html',
  styleUrl: './demo1.scss'
})
export class Demo1 {
  // Comme on est dans une classe, on va y trouver
  // Des propriétés 
  firstname : string = 'Aude';
  lastname : string = '';
  age : number = 35;
  dogName : string | null = 'Taylor';
  catName : string | null = null;
  avatar : string = 'https://www.worldsbestcatlitter.com/wp-content/uploads/2019/12/02_coughing-cat-meme.jpg';

  helloMsg : string = '';
  
  // Un constructeur
  constructor(){
    
  }

  // Des méthodes
  // Certains dev trouvent ça ok pour le retour void de ne pas écrire le type de retour (MAIS UNIQUEMENT POUR VOID)
  // sayHello() : void {
  //   this.helloMsg = 'Bonjour';
  // }

  // Le = après un paramètre vous permet de mettre une valeur par défaut si le paramètre n'est pas fourni
  sayHello(lang : string = 'fr') : void {
    switch(lang){
      case 'fr' : 
        this.helloMsg = 'Bonjour';
        break;
      case 'en' :
        this.helloMsg = 'Hello';
        break;
      case 'es' :
        this.helloMsg = 'Hola';
        break;
      default :
        this.helloMsg = 'Je ne parle pas cette langue';
        break;
    }
  }

  resetHello() : void {
    this.helloMsg = '';
  }

}

