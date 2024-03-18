import { Component } from '@angular/core';
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'app-dog',
    templateUrl: './dog-picture.component.html',
})
export class DogPictureComponent {

    public dogSrc: string = this._activatedRoute.snapshot.data['imageSrc'];
        // .pipe(
        //     map((data: { [k: string]: string }) => data['imageSrc'])
        // )

    constructor(private _activatedRoute: ActivatedRoute) {
    }
}
