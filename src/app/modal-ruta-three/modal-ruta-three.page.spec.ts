import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalRutaThreePage } from './modal-ruta-three.page';

describe('ModalRutaThreePage', () => {
  let component: ModalRutaThreePage;
  let fixture: ComponentFixture<ModalRutaThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRutaThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalRutaThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
