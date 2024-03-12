import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { USER_NAME_TOKEN } from "../tokens/storage-tokens";

@Injectable({
    providedIn: 'root'
})
export class AuthorisationGuard {

    constructor(
        private _router: Router,
    ) {
    }
    public canActivate(): Observable<boolean | UrlTree> | boolean | UrlTree {
        return localStorage.getItem(USER_NAME_TOKEN) ?
            true : (() => {
                alert('войдите в аккаунт');
                return this._router.createUrlTree([ 'login' ]);
            })()
    }
}
