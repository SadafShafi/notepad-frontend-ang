import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteHeadsComponent } from './note-heads.component';

describe('NoteHeadsComponent', () => {
  let component: NoteHeadsComponent;
  let fixture: ComponentFixture<NoteHeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteHeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteHeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
