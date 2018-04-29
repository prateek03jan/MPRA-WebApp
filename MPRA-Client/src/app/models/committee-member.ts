import { Person } from './person-details';

export class CommitteeMember {
    person: Person;
    memberType: string;
    designation: string;
    subCommitteeType: string;

    constructor() {
        this.person = new Person();
    }
}
