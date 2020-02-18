import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import * as $ from "jquery";

@Component({
  selector: 'app-modal-ruta-two',
  templateUrl: './modal-ruta-two.page.html',
  styleUrls: ['./modal-ruta-two.page.scss'],
})
export class ModalRutaTwoPage implements OnInit {

  constructor(public modalController: ModalController, public alertController: AlertController) { }

  selected = 0;
  alerta = '<ol> \
  <li> \
    Si la víctima presenta lesiones o abuso sexual debe trasladarse de manera \
    inmediata al centro de salud más cercano, sin perder la localización de la \
    víctima, para que se active el Protocolo de Atención Integral en Salud \
    para Víctimas creado por el Ministerio de Salud y Protección Social. \
  </li> \
  <br> \
  <li> \
    La víctima no deberá ser confrontada en ningún MOMENTO con el victimario. \
  </li> \
  <br> \
  <li> \
    En caso de que la víctima sea recluida en un centro de salud, el \
    uniformado que conoció el caso deberá coordinar con la Policía Judicial la \
    recepción de la denuncia. \
  </li> \
</ol>';

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
