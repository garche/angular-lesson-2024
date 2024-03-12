import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from "@angular/router";
import { MainComponent } from "./components/main.component";
import { inject, NgModule } from "@angular/core";
import { PersonDetailComponent } from "./children/person-detail.component";
import { PersonManagerService } from "./services/person.manger.service";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
    {
        path: 'person/:id',
        component: PersonDetailComponent,
        canDeactivate: [ (component: PersonDetailComponent,
                          currentRoute: ActivatedRouteSnapshot,
                          currentState: RouterStateSnapshot,
                          nextState: RouterStateSnapshot) => {
            return nextState.url === '/login' ? true :
                inject(PersonManagerService).leavePersonDetailGuard(component)
        } ]
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
