import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-ruta-two',
  templateUrl: './modal-ruta-two.page.html',
  styleUrls: ['./modal-ruta-two.page.scss'],
})
export class ModalRutaTwoPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

}
