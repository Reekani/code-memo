import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddProjectComponent} from './add-project.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatInputModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
],
  declarations: [AddProjectComponent]
})
export class AddProjectModule {
}
