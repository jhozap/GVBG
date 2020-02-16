import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalRutaOnePage } from '../modal-ruta-one/modal-ruta-one.page';
import { ModalRutaTwoPage } from '../modal-ruta-two/modal-ruta-two.page';
import { ModalRutaThreePage } from '../modal-ruta-three/modal-ruta-three.page';

@Component({
  selector: 'app-rutas-institucionales',
  templateUrl: './rutas-institucionales.page.html',
  styleUrls: ['./rutas-institucionales.page.scss']  
})
export class RutasInstitucionalesPage implements OnInit {

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }

  async presentModal(index) {

    let modal;
    if(index == 1) {
      modal = await this.modalController.create({
        component: ModalRutaOnePage
      });
    } else if(index == 2) {
      modal = await this.modalController.create({
        component: ModalRutaTwoPage
      });
    } else if(index == 3) {
      modal = await this.modalController.create({
        component: ModalRutaThreePage
      });
    }

    modal.onDidDismiss()
    .then(()=> {
      this.router.navigateByUrl("/rutas-institucionales");
    });

    modal.present();
  }

}
