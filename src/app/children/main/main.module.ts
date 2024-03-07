import { MainComponent } from './components/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../modues';
import { MainRoutingModule } from "./main.routing.module";

@NgModule({
    declarations: [
        MainComponent
    ],
    exports: [
        MainComponent
    ],
    imports: [
        CommonModule,
        HeaderModule,
        // MainRoutingModule,
    ],
    providers: [],
})
export class MainModule { }
