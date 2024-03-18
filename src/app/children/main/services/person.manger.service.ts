import { Injectable } from "@angular/core";
import { IPerson } from "../interfaces/person.interface";
import { ActivatedRoute, UrlTree } from "@angular/router";
import { PersonDetailComponent } from "../children/person-detail.component";
import { map, Observable, timer } from "rxjs";

@Injectable()
export class PersonManagerService {

    private personList: IPerson[] = [
        {
            id: 1,
            name: 'Вася',
            age:  10,
        },
        {
            id: 2,
            name: 'Василий',
            age:  24,
        },
        {
            id: 3,
            name: 'Василяндрий',
            age:  7,
        },
        {
            id: 4,
            name: 'Васякинатор',
            age:  11,
        },
    ]

    public getPersonList(): IPerson[] {
        return this.personList;
    }

    public getPersonById(id: number): Observable<IPerson | undefined> {
        return timer(2000)
            .pipe(
                map(() => {
                    return this.personList.find((person: IPerson) =>
                        person.id === id);
                })
            )
    };

    public leavePersonDetailGuard(component: PersonDetailComponent): boolean | UrlTree {
        return Boolean(component.isCheckBoxConfirm) ?
            true:
            (
                () => {
                    alert('вы должны нажать галочку');
                    return false
                }
            )();
    }
}
