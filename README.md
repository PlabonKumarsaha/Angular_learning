# Angular_learning
-Full stack app : spring+angular crud
## Starting steps
* Insatll node in pc
* install angular cli from : https://angular.io/cli
* `ng new todo-list`
* Run a project : `ng serve`
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
* command : `ng g component component_name`

## Angular material
https://material.angular.io/guide/getting-started

## Adding a module in angular
* import API (ex : 'import {MatButtonModule} from '@angular/material/button';') in app.module.ts and add the module name(ex : MatButtonModule) in imports


## Routing
* use `app-routing module.ts`
* add path the following way
```
const routes: Routes = [{
  path:"sendemail",
  component:EmailComponent,
  pathMatch:"full"
}];
```

## Service
* create new service `ng g service service_name`
* add the service name as provider

## Module
* Module is collection of several component
* create module : `ng g m module-name`

## Input text
```
<input type="text" #val/>
<button (click)=" getVal(val.value)">Get value</button>

 getVal(val:string) {
    console.warn(val);
    this.currentValue =val;
    console.log(this.currentValue)
  }
```

## property Binding
```
<input type="text"  [disabled]= "disabledBox" value={{name}}/>
<br>
<br>
<button (click)="enableBox()">Enable ToolBox</button>

 name : string = "Plabon";
  disabledBox= true;
  enableBox(){
    this.disabledBox = false;
  }

```
## adding bootrap
* command `npm install --save bootstrap`

## adding new class
* command `ng g class className`
*

## The full stack app
* CRDU from spring backend
* CRUD operation from frontend
* Used modules : Bootstrap , HttpClientModule , FormsModule , activatedrout for finding the id from link

