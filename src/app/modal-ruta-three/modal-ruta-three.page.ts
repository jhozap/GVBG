import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import * as $ from "jquery";

@Component({
  selector: 'app-modal-ruta-three',
  templateUrl: './modal-ruta-three.page.html',
  styleUrls: ['./modal-ruta-three.page.scss'],
})
export class ModalRutaThreePage implements OnInit {

  constructor(public modalController: ModalController, public alertController: AlertController) { }

  selected = 0;
  alerta = '';

  ngOnInit() {
  }

  toggle(index) {
    $(".content-" + this.selected).toggle("slow");
    if (index != this.selected) {
      $(".content-" + index).toggle("slow");
      this.selected = index;
    } else {
      this.selected = 0;
    }
  }

  async presentAlert(i) {
    const alert = await this.alertController.create({
      header: "Para tener en cuenta",
      message: this.alerta,
      buttons: ["OK"]
    });

    await alert.present();
  }

  close() {
    this.modalController.dismiss();
  }

}
