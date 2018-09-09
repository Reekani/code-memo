import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddProjectComponent} from './add-project/add-project.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [AddProjectComponent]
})
export class AddProjectModule {
}
