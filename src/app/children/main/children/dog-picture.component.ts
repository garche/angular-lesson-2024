import { Component } from '@angular/core';
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Component({
    selector: 'app-dog',
    templateUrl: './dog-picture.component.html',
})
export class DogPictureComponent {
    public dogSrc$: Observable<string> = this._httpService.get<{message: string}>('https://dog.ceo/api/breeds/image/random')
        .pipe(
            map((value: {message: string}) => value.message)
        )
    constructor(private _httpService: HttpClient) {
    }
}
