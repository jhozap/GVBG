import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtaquesAgentesQuimicosPage } from './ataques-agentes-quimicos.page';

describe('AtaquesAgentesQuimicosPage', () => {
  let component: AtaquesAgentesQuimicosPage;
  let fixture: ComponentFixture<AtaquesAgentesQuimicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtaquesAgentesQuimicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtaquesAgentesQuimicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
