import {Component, OnInit} from '@angular/core';
import {ProgressBarService} from "../progress-bar/progress-bar.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  buttonDisabled = false;

  nameFormControl: FormControl;

  constructor(private progressBarService: ProgressBarService) {
    this.nameFormControl = new FormControl('', [
      Validators.required,
    ])
  }

  ngOnInit() {
  }

  addProject(event): void {
    event.preventDefault();
    this.progressBarService.start();
    this.buttonDisabled = true;
  }

}
