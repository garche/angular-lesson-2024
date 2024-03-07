import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./children/main/components/main.component";
import { AboutComponent } from "./children/about/about.component";
import { NotFoundComponent } from "./children/not-found/not-found.component";

const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: 'main', pathMatch: "full" },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
