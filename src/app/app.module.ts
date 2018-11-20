import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ProjectsListModule} from "./projects-list/projects-list.module";
import {AddProjectModule} from "./add-project/add-project.module";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./reducers";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {AppRoutingModule} from "./app-routing.module";
import {NavbarModule} from "./navbar/navbar.module";
import {ProgressBarModule} from "./progress-bar/progress-bar.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({
      name: 'NgRx code-memo Store DevTools',
    }),
    EffectsModule.forRoot([]),
    ProjectsListModule,
    AddProjectModule,
    NavbarModule,
    ProgressBarModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
