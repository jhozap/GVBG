import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-ruta-two',
  templateUrl: './modal-ruta-two.page.html',
  styleUrls: ['./modal-ruta-two.page.scss'],
})
export class ModalRutaTwoPage implements OnInit {

  constructor(public modalController: ModalController) { }

  selected = 0;

  ngOnInit() {
  }

  toggle(index) {
    $(".forma-" + this.selected).toggle("slow");
    if (index != this.selected) {
      $(".forma-" + index).toggle("slow");
      this.selected = index;
    } else {
      this.selected = 0;
    }
  }

  close() {
    this.modalController.dismiss();
  }

}
