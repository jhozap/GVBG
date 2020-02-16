import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-ruta-three',
  templateUrl: './modal-ruta-three.page.html',
  styleUrls: ['./modal-ruta-three.page.scss'],
})
export class ModalRutaThreePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

}
