import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectsListComponent} from "./projects-list/projects-list/projects-list.component";
import {AddProjectComponent} from "./add-project/add-project.component";

export const routes: Routes = [
  {path: '', redirectTo: '/add', pathMatch: 'full'},
  {path: 'list', component: ProjectsListComponent},
  {path: 'add', component: AddProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
