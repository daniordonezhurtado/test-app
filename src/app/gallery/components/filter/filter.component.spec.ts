import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FilterText } from '../../model/filter-text.model';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    component.filterText = new FilterText();
    fixture.detectChanges();
  });

  it('should create filter component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit change event on filter', () => {
    expect(component.updateListPicturesToShow()).toBeUndefined();
  });
});
