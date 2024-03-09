import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, ElementRef, ViewChild,
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

    @ViewChild('checkbox')
    public checkbox!: ElementRef<HTMLInputElement>

    public get isCheckBoxConfirm(): any {
      return this.checkbox.nativeElement.checked
    }

    public person!: IPerson;

    public backUrl: string = '';
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _personService: PersonManagerService,
        private _router: Router,
        private _cdr: ChangeDetectorRef,
    ) {
        this.backUrl = this._activatedRoute.snapshot.queryParams['back'] || '';

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

    public navigateBack(): void {
      this._router.navigate([this.backUrl]);
    }
}
