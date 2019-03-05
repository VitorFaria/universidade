import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMatriculaComponent } from './edit-matricula.component';

describe('EditMatriculaComponent', () => {
  let component: EditMatriculaComponent;
  let fixture: ComponentFixture<EditMatriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMatriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
