import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../Services/userAuth/user-auth.service';
import { LoginService } from '../Services/loginService/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userAuthService : UserAuthService,
    private router: Router, private loginService : LoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      //fetch the token
      if(this.userAuthService.getToken() !==null){
        //fetch the allowed roles
        const role = route.data["roles"]

        if(role){
          //match if the allowed role is matched with the actual role
          const match = this.loginService.roleMatch(role);
          if(match){
            return true;
          } else{
            this.router.navigate(["/forBidden"]);
            return false;
          }
        }//if they matched allow the path otherwise not
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}
