import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardCodedServicesService } from './hard-coded-services.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardCodedAuthService: HardCodedServicesService,
    private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardCodedAuthService.isUserAuthenticated()) return true;
    //redirect to login component if other url is tried to acess without login
    this.router.navigate(['login']);
    return false;
  }


}
