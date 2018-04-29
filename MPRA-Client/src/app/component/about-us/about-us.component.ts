import { Component, OnInit } from '@angular/core';
import { PersonInformationCardComponent } from '../person-information-card/person-information-card.component';
import { Person } from '../../models/person-details';
import { CommitteeMember } from '../../models/committee-member';
import { Phone } from '../../models/phone';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  presidentDetails: CommitteeMember;
  vicePresidentDetails: CommitteeMember;
  jointSecretaryDetails1: CommitteeMember;
  jointSecretaryDetails2: CommitteeMember;
  treasurerDetails: CommitteeMember;
  assistantTreasurerDetails: CommitteeMember;
  constructor() { }

  ngOnInit() {
    // President details
    this.presidentDetails = new CommitteeMember();
    this.presidentDetails.designation = 'President';
    this.presidentDetails.memberType = 'Permanent';
    this.presidentDetails.person.firstName = 'Kalpataru';
    this.presidentDetails.person.lastName = 'Kar';
    let phone: Phone = new Phone();
    phone.phoneNumber = 9831722318;
    phone.phoneType = 'Mobile';
    this.presidentDetails.person.contactNumber.push(phone);
    this.presidentDetails.person.email = 'test@123.com';
    this.presidentDetails.person.phase = 'I';
    this.presidentDetails.person.block = 'VII';
    this.presidentDetails.person.flat = '3A';
    this.presidentDetails.person.individualType = 'Resident';
    this.presidentDetails.person.isCommitteeMember = true;
    // President details

    // Vice President details
    this.vicePresidentDetails = new CommitteeMember();
    this.vicePresidentDetails.designation = 'Vice President';
    this.vicePresidentDetails.memberType = 'Permanent';
    this.vicePresidentDetails.person.firstName = 'Shamibrata';
    this.vicePresidentDetails.person.middleName = 'Dutta';
    this.vicePresidentDetails.person.lastName = 'Roy';
    phone = new Phone();
    phone.phoneNumber = 9836006067;
    phone.phoneType = 'Mobile';
    this.vicePresidentDetails.person.contactNumber.push(phone);
    this.vicePresidentDetails.person.email = 'test@123.com';
    this.vicePresidentDetails.person.phase = 'I';
    this.vicePresidentDetails.person.block = 'II';
    this.vicePresidentDetails.person.flat = '1H';
    this.vicePresidentDetails.person.individualType = 'Resident';
    this.vicePresidentDetails.person.isCommitteeMember = true;
    // Vice President details

    // Joint Secretary details
    this.jointSecretaryDetails1 = new CommitteeMember();
    this.jointSecretaryDetails1.designation = 'Joint Secretary';
    this.jointSecretaryDetails1.memberType = 'Permanent';
    this.jointSecretaryDetails1.person.firstName = 'Ashish';
    this.jointSecretaryDetails1.person.middleName = '';
    this.jointSecretaryDetails1.person.lastName = 'Kumar';
    phone = new Phone();
    phone.phoneNumber = 7044072879;
    phone.phoneType = 'Mobile';
    this.jointSecretaryDetails1.person.contactNumber.push(phone);
    this.jointSecretaryDetails1.person.email = 'test@123.com';
    this.jointSecretaryDetails1.person.phase = 'I';
    this.jointSecretaryDetails1.person.block = 'II';
    this.jointSecretaryDetails1.person.flat = '3D';
    this.jointSecretaryDetails1.person.individualType = 'Resident';
    this.jointSecretaryDetails1.person.isCommitteeMember = true;
    // Joint Secretary details

    // Joint Secretary details
    this.jointSecretaryDetails2 = new CommitteeMember();
    this.jointSecretaryDetails2.designation = 'Joint Secretary';
    this.jointSecretaryDetails2.memberType = 'Permanent';
    this.jointSecretaryDetails2.person.firstName = 'Sourav';
    this.jointSecretaryDetails2.person.middleName = '';
    this.jointSecretaryDetails2.person.lastName = 'Maity';
    phone = new Phone();
    phone.phoneNumber = 9874286784;
    phone.phoneType = 'Mobile';
    this.jointSecretaryDetails2.person.contactNumber.push(phone);
    this.jointSecretaryDetails2.person.email = 'test@123.com';
    this.jointSecretaryDetails2.person.phase = 'I';
    this.jointSecretaryDetails2.person.block = 'VIII';
    this.jointSecretaryDetails2.person.flat = '4D';
    this.jointSecretaryDetails2.person.individualType = 'Resident';
    this.jointSecretaryDetails2.person.isCommitteeMember = true;
    // Joint Secretary details

    // Treasurer details
    this.treasurerDetails = new CommitteeMember();
    this.treasurerDetails.designation = 'Treasurer';
    this.treasurerDetails.memberType = 'Permanent';
    this.treasurerDetails.person.firstName = 'Malay';
    this.treasurerDetails.person.middleName = 'Kumar';
    this.treasurerDetails.person.lastName = 'Nandi';
    phone = new Phone();
    phone.phoneNumber = 7319342104;
    phone.phoneType = 'Mobile';
    this.treasurerDetails.person.contactNumber.push(phone);
    this.treasurerDetails.person.email = 'test@123.com';
    this.treasurerDetails.person.phase = 'I';
    this.treasurerDetails.person.block = 'III';
    this.treasurerDetails.person.flat = '3D';
    this.treasurerDetails.person.individualType = 'Resident';
    this.treasurerDetails.person.isCommitteeMember = true;
    // Treasurer details

    // Assistant Treasurer details
    this.assistantTreasurerDetails = new CommitteeMember();
    this.assistantTreasurerDetails.designation = 'Assistant Treasurer';
    this.assistantTreasurerDetails.memberType = 'Permanent';
    this.assistantTreasurerDetails.person.firstName = 'Manish';
    this.assistantTreasurerDetails.person.middleName = '';
    this.assistantTreasurerDetails.person.lastName = 'Kumar';
    phone = new Phone();
    phone.phoneNumber = 9232606035;
    phone.phoneType = 'Mobile';
    this.assistantTreasurerDetails.person.contactNumber.push(phone);
    this.assistantTreasurerDetails.person.email = 'test@123.com';
    this.assistantTreasurerDetails.person.phase = 'I';
    this.assistantTreasurerDetails.person.block = 'III';
    this.assistantTreasurerDetails.person.flat = '1C';
    this.assistantTreasurerDetails.person.individualType = 'Resident';
    this.assistantTreasurerDetails.person.isCommitteeMember = true;
    // Assistant Treasurer details
  }

}
