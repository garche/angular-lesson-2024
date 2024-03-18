import { Component } from '@angular/core';
import { LoggerService } from '../service/logger.service';
import {
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router,
    RouterEvent
} from "@angular/router";
import { BehaviorSubject, tap } from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public routingProcess: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

    constructor(
        private _loggerService: LoggerService,
        private _router: Router,
    ) {
        _loggerService.writeLog('AppComponent constructor')

        this._router.events
            .pipe(
                tap((event: any) => {
                    if(event instanceof NavigationStart) {
                        this.routingProcess.next(true)
                    }
                    if(event instanceof NavigationEnd) {
                        this.routingProcess.next(false)
                    }
                    if(event instanceof NavigationError) {
                        this.routingProcess.next(false)
                    }
                    if(event instanceof NavigationCancel) {
                        this.routingProcess.next(false)
                    }
                })
            )
            .subscribe()
    }
}
