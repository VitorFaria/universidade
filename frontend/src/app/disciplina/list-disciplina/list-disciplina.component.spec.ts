import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDisciplinaComponent } from './list-disciplina.component';

describe('ListDisciplinaComponent', () => {
  let component: ListDisciplinaComponent;
  let fixture: ComponentFixture<ListDisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
