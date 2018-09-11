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
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./reducers";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";


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
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({
      name: 'NgRx code-memo Store DevTools',
    }),
    EffectsModule.forRoot([]),
    ProjectsListModule,
    AddProjectModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
