import { MainComponent } from './components/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../modues';
import { MainRoutingModule } from "./main.routing.module";
import { PersonDetailComponent } from "./children/person-detail.component";
import { PersonManagerService } from "./services/person.manger.service";

@NgModule({
    declarations: [
        MainComponent,
        PersonDetailComponent
    ],
    imports: [
        CommonModule,
        HeaderModule,
        MainRoutingModule,
    ],
    providers: [PersonManagerService],
})
export class MainModule { }
