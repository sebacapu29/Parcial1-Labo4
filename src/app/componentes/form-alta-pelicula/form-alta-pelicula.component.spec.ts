import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAltaPeliculaComponent } from './form-alta-pelicula.component';

describe('FormAltaPeliculaComponent', () => {
  let component: FormAltaPeliculaComponent;
  let fixture: ComponentFixture<FormAltaPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAltaPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAltaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
