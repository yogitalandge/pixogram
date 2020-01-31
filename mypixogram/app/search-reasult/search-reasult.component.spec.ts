import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReasultComponent } from './search-reasult.component';

describe('SearchReasultComponent', () => {
  let component: SearchReasultComponent;
  let fixture: ComponentFixture<SearchReasultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchReasultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReasultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
