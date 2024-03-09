import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./children/about/about.component";
import { NotFoundComponent } from "./children/not-found/not-found.component";
import { AuthorisationGuard } from "./guards/autorisation.guard";
import { LoginComponent } from "./children/login/login.component";

const routes: Routes = [
    {
        path: 'main',
        loadChildren: () => import('./children/main/main.module').then((m: any) => m.MainModule),
        canActivate: [AuthorisationGuard],
    },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: 'main', pathMatch: "full" },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
