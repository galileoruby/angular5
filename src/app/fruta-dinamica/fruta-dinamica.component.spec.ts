import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutaDinamicaComponent } from './fruta-dinamica.component';

describe('FrutaDinamicaComponent', () => {
  let component: FrutaDinamicaComponent;
  let fixture: ComponentFixture<FrutaDinamicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutaDinamicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutaDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
