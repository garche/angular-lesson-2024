import { MainComponent } from './components/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../modues';
import { MainRoutingModule } from "./main.routing.module";
import { PersonDetailComponent } from "./children/person-detail.component";
import { PersonManagerService } from "./services/person.manger.service";
import { DogPictureComponent } from "./children/dog-picture.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        MainComponent,
        PersonDetailComponent,
        DogPictureComponent
    ],
    imports: [
        CommonModule,
        HeaderModule,
        MainRoutingModule,
        HttpClientModule
    ],
    providers: [PersonManagerService],
})
export class MainModule { }
