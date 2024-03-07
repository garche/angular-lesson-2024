import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component/app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoggerService } from './service/logger.service';
import { MainModule } from "./children/main/main.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainModule,
    ],
    providers: [
        LoggerService
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
    // jit: true,

})
export class AppModule { }
