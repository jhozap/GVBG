import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController, public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Para tener en cuenta',
      message: '<p> \
      Mantener y transmitir la calma es muy importante. Esto le permitirá \
      actuar correctamente y servirá de apoyo para la víctima. \
    </p> \
    <ion-label> \
      <b \
        >Captar la atención de la víctima siendo prudente en el ofrecimiento \
        de ayuda.</b \
      > \
    </ion-label> \
    <p> \
      Hacerle saber a la víctima que está ahí para ayudarla, utilizando un \
      lenguaje claro y sencillo, como, por ejemplo: \
      <i \
        >"vamos a ayudarle", "estamos capacitados para atender este tipo de \
        ataques", "ya solicitamos ayuda y la ambulancia viene en camino", \
        "por favor siga nuestras instrucciones"</i \
      >. \
    </p> \
    <p> \
      Ganar la confianza de la víctima mediante una comunicación adecuada, \
      ser amable, escucharla si desea hablar, ser honesto y confiable. \
    </p> \
    <p>Respetar sus derechos corno persona y cómo víctima</p> \
    <p> \
      Anular juicios de valor, por ejemplo:<i> \
        "grave la quemadura"," va a quedar desfigurada, que horror".</i \
      > \
      o cualquier otra frase que pueda atemorizar o incrementar el pánico o \
      desespero. \
    </p> \
    <ion-label \
      ><b> \
        Si la víctima no desea hablar, respetar su decisión</b \
      ></ion-label \
    >',
      buttons: ['OK']
    });

    await alert.present();
  }

  close() {
    this.modalController.dismiss();
  }

}
