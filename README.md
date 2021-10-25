# Angular_learning
## Starting steps
* Insatll node in pc
* install angular cli from : https://angular.io/cli
* ng new todo-list
* Run a project : ng serve
* Creating new component: ng generate component MyComponents/todos


## Project Structure
* index.html : Main end point of the project
* in src>>app >> app.component.html is the template of the component.
* in src>>app >> app.component.css is the design of the component
* in src>>app >> app.component.ts the logics are added here.
```
@Component({
  selector: 'app-root', // through the selector tag a component is called
  templateUrl: './app.component.html', // the visible html
  styleUrls: ['./app.component.css'] // the visible css page
})
```


## New component
* cd to src
* cd to app
* create a component folder in app
* cd to components
* ng g component component_name

## Angular material
https://material.angular.io/guide/getting-started

## Adding a module in angular
* import API (ex : 'import {MatButtonModule} from '@angular/material/button';') in app.module.ts and add the module name(ex : MatButtonModule) in imports


## Routing
* use app-routing module.ts
* add path the following way
```
const routes: Routes = [{
  path:"sendemail",
  component:EmailComponent,
  pathMatch:"full"
}];

```
