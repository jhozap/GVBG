import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import * as $ from "jquery";

@Component({
  selector: "app-modal-ruta-one",
  templateUrl: "./modal-ruta-one.page.html",
  styleUrls: ["./modal-ruta-one.page.scss"]
})
export class ModalRutaOnePage implements OnInit {
  selected = 0;

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    // $(".content-1").toggle("slow");
    // $(".content-1").addClass("expand");    
  }

  toggle(index) {    
    $(".content-" + this.selected).toggle("slow");
    if(index != this.selected) {
      $(".content-" + index).toggle("slow");
      this.selected = index;
    } else {
      this.selected = 0;
    }      
  }

  close() {
    this.modalController.dismiss();
  }
}
