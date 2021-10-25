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
  templateUrl: './app.component.html', // chooses the html page
  styleUrls: ['./app.component.css'] //chooses the css page
})
```
