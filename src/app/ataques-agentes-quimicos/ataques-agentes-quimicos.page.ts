import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ataques-agentes-quimicos',
  templateUrl: './ataques-agentes-quimicos.page.html',
  styleUrls: ['./ataques-agentes-quimicos.page.scss'],
})
export class AtaquesAgentesQuimicosPage {

  constructor(public modalController: ModalController, private router: Router) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });

    modal.onDidDismiss()
    .then(()=> {
      this.router.navigateByUrl("/ataques-agentes-quimicos");
    });

    modal.present();
  }

}
