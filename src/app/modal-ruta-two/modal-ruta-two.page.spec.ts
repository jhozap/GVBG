import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalRutaTwoPage } from './modal-ruta-two.page';

describe('ModalRutaTwoPage', () => {
  let component: ModalRutaTwoPage;
  let fixture: ComponentFixture<ModalRutaTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRutaTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalRutaTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
