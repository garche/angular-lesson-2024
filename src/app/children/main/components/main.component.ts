import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoggerService } from '../../../service/logger.service';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
    constructor(
        private _loggerService: LoggerService
    ) {
        _loggerService.writeLog('MainComponent constructor')
    }
}
