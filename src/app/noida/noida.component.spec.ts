import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoidaComponent } from './noida.component';

describe('NoidaComponent', () => {
  let component: NoidaComponent;
  let fixture: ComponentFixture<NoidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoidaComponent]
    });
    fixture = TestBed.createComponent(NoidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
