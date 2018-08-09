import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';

// Material
import {MatTableModule} from '@angular/material/table';
import {ProjectListService} from "./service/project-list.service";

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
  ],
  providers: [ProjectListService],
  declarations: [ProjectsListComponent],
  exports: [ProjectsListComponent]
})
export class ProjectsListModule { }
