import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  

  userName :string='';
  messageVal : string='';
  constructor(private actiavtedRoute : ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.userName = this.actiavtedRoute.snapshot.params['name'];
  }

  getWelcomeMessage(){
    //console.log("welcome in get welcome service")
   // console.log( this.service.executeHellowWorldBeanService());
    this.service.executeHellowWorldBeanService().subscribe(
      response =>this.handleSucessfulResponse(response),
      error => this.handleErrorMessage(error)
      
    );
    console.log("exc")
  }

  getWelcomeMessageWithParams(){
    //console.log("welcome in get welcome service")
   // console.log( this.service.executeHellowWorldBeanService());
    this.service.executeHellowWorldBeanServiceWithParam(this.userName).subscribe(
      response =>this.handleSucessfulResponse(response),
      error => this.handleErrorMessage(error)
      
    );
    console.log("exc")
  }

  handleSucessfulResponse(response : any){
    this.messageVal = response.message;
    console.log(response.message)
  }

  handleErrorMessage(error : any){
    console.log("error"+ error);
    this.getWelcomeMessage = error.error.message;
    ;
  }

}
