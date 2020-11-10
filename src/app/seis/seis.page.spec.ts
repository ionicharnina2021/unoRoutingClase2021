import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeisPage } from './seis.page';

describe('SeisPage', () => {
  let component: SeisPage;
  let fixture: ComponentFixture<SeisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
