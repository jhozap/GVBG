import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-ataques-agentes-quimicos',
  templateUrl: './ataques-agentes-quimicos.page.html',
  styleUrls: ['./ataques-agentes-quimicos.page.scss'],
})
export class AtaquesAgentesQuimicosPage {

  constructor(public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

}
