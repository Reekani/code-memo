import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {ProjectsListModule} from "./projects-list/projects-list.module";


const appRoutes: Routes = [
  {path: '', component: AppComponent}
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

