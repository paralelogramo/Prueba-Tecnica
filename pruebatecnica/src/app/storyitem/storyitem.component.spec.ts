import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryitemComponent } from './storyitem.component';

describe('StoryitemComponent', () => {
  let component: StoryitemComponent;
  let fixture: ComponentFixture<StoryitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
