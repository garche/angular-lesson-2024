import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { IPerson } from "../interfaces/person.interface";
import { PersonManagerService } from "../services/person.manger.service";

@Component({
    selector: 'app-person-detail',
    templateUrl: './person-detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PersonDetailComponent {

    public person!: IPerson;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _personService: PersonManagerService,
        private _router: Router,
        private _cdr: ChangeDetectorRef,
    ) {
        this._activatedRoute.params
            .subscribe((params: Params) => {
                const person: IPerson | undefined = this._personService.getPersonById(+params['id']);
                if(!person){
                    this._router.navigate(['not-found'])

                    return;
                }

                this.person = person;
                this._cdr.markForCheck()
            })
    }
}
