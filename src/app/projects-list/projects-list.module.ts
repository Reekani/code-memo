import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';

// Material
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'
import {ProjectListService} from "./service/project-list.service";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatTooltipModule
  ],
  providers: [ProjectListService],
  declarations: [ProjectsListComponent],
  exports: [ProjectsListComponent]
})
export class ProjectsListModule { }
