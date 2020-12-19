import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PictureComponent } from './picture.component';

describe('PictureComponent', () => {
  let component: PictureComponent;
  let fixture: ComponentFixture<PictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureComponent ],
      imports: [ ScrollingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse el cuadro', () => {
    expect(component).toBeTruthy();
  });

  it('Debe recargar el scroll', () => {
    expect(component.reloadScroll()).toBeUndefined();
  });
});
