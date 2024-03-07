import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { LoggerService } from '../../../service/logger.service';
import { Router } from "@angular/router";
import { PersonManagerService } from "../services/person.manger.service";
import { IPerson } from "../interfaces/person.interface";
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['main.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
    public personList: IPerson[]

    constructor(
        _loggerService: LoggerService,
        private _personService: PersonManagerService,
        private _router: Router,
    ) {
        this.personList = this._personService.getPersonList();
        _loggerService.writeLog('MainComponent constructor')
    }

    public navigateToDetail(id: number): void {
        this._router.navigate(['main', 'person', String(id)], {
            queryParams: {
              back: 'main'
            },
        })
    }
}
