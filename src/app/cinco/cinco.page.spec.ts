import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CincoPage } from './cinco.page';

describe('CincoPage', () => {
  let component: CincoPage;
  let fixture: ComponentFixture<CincoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CincoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CincoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
