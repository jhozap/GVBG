import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcoJuridicoPage } from './marco-juridico.page';

describe('MarcoJuridicoPage', () => {
  let component: MarcoJuridicoPage;
  let fixture: ComponentFixture<MarcoJuridicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcoJuridicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcoJuridicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
