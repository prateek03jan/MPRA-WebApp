import { Phone } from './phone';

export class Person {
    firstName: string;
    middleName: string;
    lastName: string;
    contactNumber: Array<Phone>;
    email: string;
    phase: string;
    block: string;
    flat: string;
    panCard: string;
    aadharCard: string;
    dateOfBirth: string;
    individualType: string;
    isCommitteeMember: boolean;
    profileImage: string;

    constructor() {
        this.contactNumber = new Array<Phone>();
    }
}
