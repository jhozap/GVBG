import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutasInstitucionalesPage } from './rutas-institucionales.page';

describe('RutasInstitucionalesPage', () => {
  let component: RutasInstitucionalesPage;
  let fixture: ComponentFixture<RutasInstitucionalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutasInstitucionalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutasInstitucionalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
