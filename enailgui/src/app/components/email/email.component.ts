import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackendService } from 'src/app/Service/backend.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private email: BackendService, private snakbar : MatSnackBar) { }
  data={
    to:"",
    subject:"" ,
    message:""
  }

  ngOnInit(): void {
  }

  doSubmitForm(){
    console.log("Submitted attemped")
    console.log(this.data)
    if(this.data.to =='' || this.data.subject == ''){
      this.snakbar.open("fiels are empty","Ok!")
    }else{
      this.email.sendEmail(this.data).subscribe(
        response=>{
          console.log("response")
        },
        error=>{
          console.log("error")
        }
      );
    }
   
  }

}
