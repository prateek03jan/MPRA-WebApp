import { Component, OnInit, Input } from '@angular/core';
import { CommitteeMember } from '../../models/committee-member';

@Component({
  selector: 'app-person-information-card',
  templateUrl: './person-information-card.component.html',
  styleUrls: ['./person-information-card.component.css']
})

export class PersonInformationCardComponent implements OnInit {

  @Input('PersonObject') personObject: CommitteeMember;

  constructor() { }

  ngOnInit() {

  }

}
