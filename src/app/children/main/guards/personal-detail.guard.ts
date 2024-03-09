import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonDetailComponent } from "../children/person-detail.component";

@Injectable({
    providedIn: 'root'
})
export class PersonalDetailGuard implements CanDeactivate<PersonDetailComponent> {

    canDeactivate(
        component: PersonDetailComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | boolean | UrlTree {
        return confirm('Вы уверены, что хотите перейти?');
        // return component.isCheckBoxConfirm ?
        //   true
        //   : (() => {
        //   alert('Вы должны проставить галочку')
        //
        //   return false
        // })()
        // || nextState.url === '/login'
    }
}
