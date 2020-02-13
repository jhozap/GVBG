import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViolenciaBasadaGeneroPage } from './violencia-basada-genero.page';

describe('ViolenciaBasadaGeneroPage', () => {
  let component: ViolenciaBasadaGeneroPage;
  let fixture: ComponentFixture<ViolenciaBasadaGeneroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolenciaBasadaGeneroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViolenciaBasadaGeneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
