# Angular
## Introduction
### Installer NodeJs 
Nous aurons besoin de Node pour utiliser son gestionnaire de package. Il faudra installer la [dernière version stable (LTS)](https://nodejs.org/fr/download)
Si vous souhaitez vérifier quelle version de Node vous avez d'installé sur votre machine, ouvrez votre console et tapez
```
node --version
```

### Installer Angular
Pour installer Angular : 
Le -g est pour installer en global sur toute la machine
```
npm i -g @angular/cli
```
Pour voir la version d'Angular installée :
```
ng version
```

### Extensions VS Code utiles
* [Angular Schematics](https://marketplace.visualstudio.com/items?itemName=cyrilletuzi.angular-schematics) → Vous pouvoir créer des éléments par click au lieu de ligne de commandes
* [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template) & [Angular Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2) → Vous donne accès à l'auto-complétion, des raccourcis etc

## Création d'un projet
### Commande pour créer le projet
```
ng new nomDuProjet
```
On vous demandera ensuite de choisir
* le CSS voulu (SCSS)
* si c'est un projet avec SSR (Service Side Rendering) (Non)
* si vous voulez déjà une IA intégrée (Non)

### Architecture du projet
#### Base de l'architecture :
>--**node_modules** (ne pas toucher, c'est le dossier avec tout ce dont le projet Angular a besoin pour fonctionner. Ce dossier est créé/mis à jour quand on fait *npm i* grâce au fichier package.json)\
--**public** (dossier pour les media publics)\
--**src** (dossier source qui contient notre application)\
--**angular.json**(fichier de configuration de votre projet) \
--**package.json** (fichier où on retrouve toutes les dépendances du projet)\
--**tsconfig.json** (configuration du typescript)

#### Zoom sur le dossier src :
>**src**\
|--**app** (le dossier qui contient l'application) \
&nbsp;&nbsp;|--**app.config.ts** (fichier contenant toutes les injections dans le composant de démarrage de l'application)\
&nbsp;&nbsp;|--**app.html** (fichier html du composant app)\
&nbsp;&nbsp;|--**app.routes.ts** (fichier qui contient tout le routing de l'application)\
&nbsp;&nbsp;|--**app.scss** (fichier css associé au composant app)\
&nbsp;&nbsp;|--**app.spec.ts** (fichier le test du composant)\
&nbsp;&nbsp;|--**app.ts** (fichier ts du composant app dans lequel il y a le lien vers le html et le css)\
|--**index.html** (LA page html qui contient notre app)\
|--**main.ts** (LE fichier js qui est lancé au démarrage de la page et qui indique que le composant de démarrage est App)\
|--**styles.scss** (LE fichier de style global à toute l'application)

### Lancement du projet
Dans votre console :
```
ng serve
```
Où pour les flemmards ingénieux :
```
ng s -o 
```
Cette ligne de commande lance votre serveur et l'ouvre en plus dans votre navigateur favoris

Pour **réduire** le terminal sans le fermer [Ctrl] + [J] 

Pour **couper** le serveur -> Tapez [Ctrl] + [C] tout en étant dans la console

Votre projet se lance sur un serveur local, sur le port 4200 par défaut (mais vous pouvez modifier ça dans la commande de lancement du serveur)

Si vous ne voulez pas retaper ng s -o (options) à chaque fois, vous pouvez modifier le package.json pour modifier le script start 
```json
"scripts": {
    "start": "ng s -o",
  },
```
ou 
```json
"scripts": {
    "start": "ng s -o --port=4265",
  },
```
si vous voulez changer le port.

## Composants

### Composition d'un composant
Quand on va créer un composant, nous avons à chaque fois 3 fichiers minimum qui sont créés :
* Le fichier html
* Le fichier css
* Le fichier ts
* (le fichier de test)

Dans le fichier ts, nous avons un décorateur @Component qui indique que ce fichier est pour un composant, dans lequel plusieurs informations sont reprises :
```ts
@Component({
  selector: 'app-root', /* le nom qu'aura le composant si on veut l'utiliser dans le html */
  imports: [], /* en standalone, nous permet de renseigner de quoi le composant à besoin pour fonctionner */
  templateUrl: './app.html', /* le lien vers la page html */
  styleUrl: './app.scss' /*le lien vers le css associé */
})
```

Il y a deux façons principales d'afficher un composant :
* utiliser son sélecteur afin de l'ajouter dans un autre composant (parent-enfant)
* via le routing (en fonction de l'url on ira afficher un composant spécifique)

### Création d'un composant
Tapez dans la console :
Version longue
```
ng generate component chemin/nomComposant
```

Version courte 
```
ng g c chemin/nomComposant
```
## Pipes
Ils permettent de formater des données pour le rendu (sans modifier la propriété)
### Création d'un pipe
```
ng g p chemin/nomPipe
```

## Liens utiles
* [Exemple d'architecture](https://www.angular.courses/blog/angular-folder-structure-guide)