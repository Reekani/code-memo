import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {ProjectsListModule} from "./projects-list/projects-list.module";
import {ProjectsListComponent} from "./projects-list/projects-list/projects-list.component";
import {AddProjectModule} from "./add-project/add-project.module";
import {AddProjectComponent} from "./add-project/add-project/add-project.component";


const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'list', component: ProjectsListComponent},
  {path: 'add', component: AddProjectComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ProjectsListModule,
    AddProjectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

