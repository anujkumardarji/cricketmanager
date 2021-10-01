import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss'],
})
export class AddMatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  createMatchForm = new FormGroup({
    team1: new FormControl(),
    team2: new FormControl(),
    link: new FormControl(),
  });

  onFormSubmit() {
    console.log(this.createMatchForm)
    console.log('team1:' + this.createMatchForm.get('team1').value);
    console.log('team2:' + this.createMatchForm.get('team2').value);
    console.log('link:' + this.createMatchForm.get('link').value);
  }
}
