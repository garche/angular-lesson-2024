import { Component } from '@angular/core';
import { LoggerService } from '../service/logger.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
        private _loggerService: LoggerService
    ) {
        _loggerService.writeLog('AppComponent constructor')
    }
}
