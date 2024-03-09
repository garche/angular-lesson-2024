import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main.component";
import { NgModule } from "@angular/core";
import { PersonDetailComponent } from "./children/person-detail.component";
import { PersonalDetailGuard } from "./guards/personal-detail.guard";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
    {
        path: 'person/:id',
        component: PersonDetailComponent,
        canDeactivate: [ PersonalDetailGuard ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    providers: [],
})
export class MainRoutingModule { }
