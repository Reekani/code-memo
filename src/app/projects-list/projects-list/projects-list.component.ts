import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material";
import {ProjectListService} from "../service/project-list.service";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  @ViewChild(MatTable) projectsListTable: MatTable<any>;

  myDataArray = new MatTableDataSource<any>([]);
  columnsToDisplay = ['projectName', 'owner', 'upvote'];


  constructor(private projectsListService: ProjectListService) { }

  ngOnInit() {
    this.projectsListService.getUserRepos('Reekani')
      .subscribe(projectsListJson => {
        console.log('projectsListJson', projectsListJson);
        this.myDataArray = projectsListJson;
        this.projectsListTable.renderRows();
      })
  }

}

export interface ProjectElement {
  position: number;
  name: string;
}

const PROJECTS_DATA = [
  {position: 1, name: 'firstProject'},
  {position: 1, name: 'firstProject'},
  {position: 1, name: 'firstProject'},
  {position: 1, name: 'firstProject'},
  {position: 1, name: 'firstProject'},
  {position: 1, name: 'firstProject'},
  {position: 1, name: 'firstProject'},
  {position: 1, name: 'firstProject'},
  ];
