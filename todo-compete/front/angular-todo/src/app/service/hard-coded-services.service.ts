import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedServicesService {

  constructor() { }

  authenticate(username: string,password: string){
    console.log(username)
    if(username === 'pks' && password ==='abc'){
      return true;
    }else{
      return false
    }
  }
}
