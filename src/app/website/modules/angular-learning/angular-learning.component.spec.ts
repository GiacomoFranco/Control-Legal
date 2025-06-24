import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLearningComponent } from './angular-learning.component';

describe('AngularLearningComponent', () => {
  let component: AngularLearningComponent;
  let fixture: ComponentFixture<AngularLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
