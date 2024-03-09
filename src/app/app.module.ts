import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component/app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoggerService } from './service/logger.service';
import { MainModule } from "./children/main/main.module";
import { NotFoundComponent } from "./children/not-found/not-found.component";
import { AboutComponent } from "./children/about/about.component";
import { HeaderModule } from "./modues";
import { LoginComponent } from "./children/login/login.component";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        NotFoundComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainModule,
        HeaderModule,
    ],
    providers: [
        LoggerService,
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],

})
export class AppModule { }
