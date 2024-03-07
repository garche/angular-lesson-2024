import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'my-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

    @Input()
    public title: string = '';
}
