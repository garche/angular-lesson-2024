import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    providers: [],
})
export class MainRoutingModule { }
