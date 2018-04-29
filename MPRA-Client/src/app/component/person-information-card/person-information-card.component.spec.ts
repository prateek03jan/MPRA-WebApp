import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInformationCardComponent } from './person-information-card.component';

describe('PersonInformationCardComponent', () => {
  let component: PersonInformationCardComponent;
  let fixture: ComponentFixture<PersonInformationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInformationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInformationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
