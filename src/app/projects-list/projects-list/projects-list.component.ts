import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material";
import {ProjectListService} from "../service/project-list.service";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projectsList = null;
  selectedProject = null;

  constructor(private projectsListService: ProjectListService) { }

  selectProject(id: number) {
    this.selectedProject = id;
  }

  viewOnGithub(url: string) {
    window.open(url);
    this.selectedProject = null;
  }

  ngOnInit() {
    this.projectsListService.getUserRepos('Reekani')
      .subscribe(projectsListJson => {
        this.projectsList = projectsListJson;
        console.log('this.projectsList', this.projectsList);
      })
  }

}

