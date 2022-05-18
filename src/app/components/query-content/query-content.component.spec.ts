import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryContentComponent } from './query-content.component';

describe('QueryContentComponent', () => {
  let component: QueryContentComponent;
  let fixture: ComponentFixture<QueryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
