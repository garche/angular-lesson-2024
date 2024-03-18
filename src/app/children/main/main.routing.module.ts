import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    Params,
    RouterModule,
    RouterStateSnapshot,
    Routes
} from "@angular/router";
import { MainComponent } from "./components/main.component";
import { inject, NgModule } from "@angular/core";
import { PersonDetailComponent } from "./children/person-detail.component";
import { PersonManagerService } from "./services/person.manger.service";
import { DogPictureComponent } from "./children/dog-picture.component";
import { HttpClient } from "@angular/common/http";
import { map, switchMap } from "rxjs";

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
        } ],
        resolve: {
            person: (route: ActivatedRouteSnapshot) => inject(PersonManagerService).getPersonById(+route.params['id'])
        }
    },
    {
        path: 'dog',
        component: DogPictureComponent,
        resolve: {
            imageSrc: () => inject(HttpClient).get<{message: string}>('https://dog.ceo/api/breeds/image/random')
                .pipe(
                    map((value: {message: string}) => value.message)
                )
        }
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
