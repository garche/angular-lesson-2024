import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { USER_NAME_TOKEN } from "../../tokens/storage-tokens";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @ViewChild('input')
    public input!: ElementRef<HTMLInputElement>

    constructor(
        private _router: Router
    ) {
    }

    public ngOnInit(): void {
        localStorage.removeItem(USER_NAME_TOKEN)
    }

    public login(): void {
        localStorage.setItem(USER_NAME_TOKEN, this.input.nativeElement.value);
        this._router.navigate(['main'])
    }
}
