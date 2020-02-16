import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalRutaOnePage } from './modal-ruta-one.page';

describe('ModalRutaOnePage', () => {
  let component: ModalRutaOnePage;
  let fixture: ComponentFixture<ModalRutaOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRutaOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalRutaOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
