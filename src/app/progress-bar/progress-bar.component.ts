import {Component, OnInit} from '@angular/core';
import {ProgressBarService} from "./progress-bar.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  loading$: Observable<boolean>;

  constructor(private progressBarService: ProgressBarService) {}

  ngOnInit() {
    this.loading$ = this.progressBarService.state();
  }
}
