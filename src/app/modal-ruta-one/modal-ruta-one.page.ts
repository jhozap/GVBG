import { Component, OnInit } from "@angular/core";
import { ModalController, AlertController } from "@ionic/angular";
import * as $ from "jquery";

@Component({
  selector: "app-modal-ruta-one",
  templateUrl: "./modal-ruta-one.page.html",
  styleUrls: ["./modal-ruta-one.page.scss"]
})
export class ModalRutaOnePage implements OnInit {
  selected = 0;

  alert3 =
    "<p> \
  <b>Num. 3.</b> Para defenderse o defender a otra persona de una violencia \
  actual o inminente contra su integridad y la de sus bienes, o protegerla de \
  peligro inminente y grave. \
</p> \
<p> \
  <b>Num. 5.</b> Para hacer cumplir los medios inmateriales y materiales, \
  cuando se presente oposición o resistencia, se apele a la amenaza o a medios \
  violentos. \
</p> \
<p> \
  <b>Par. 1°.</b> El personal uniformado de la Policía Nacional sólo podrá \
  utilizar los medios de fuerza autorizados por ley o reglamento, y al hacer \
  uso de ellos siempre escogerá entre los más eficaces, aquellos que causen \
  menor daño a la integridad de las personas y de sus bienes. \
</p> \
<p> \
  <b>Par. 2°</b> El personal uniformado de la Policía Nacional está obligado a \
  suministrar el apoyo de su fuerza por iniciativa propia o a petición de \
  persona que esté urgida de esa asistencia para proteger su vida o la de \
  terceros, sus bienes, domicilio y su libertad personal. \
</p> \
<p> \
  <b>Par. 3°.</b> El personal uniformado de la Policía Nacional que dirija o \
  coordine el uso de la fuerza, informará al superior jerárquico y a quien \
  hubiese dado la orden de usarla, una vez superados los hechos que dieron \
  lugar a dicha medida, precisando las circunstancias de tiempo, modo y lugar, \
  y desenlace de los hechos. En caso de que se haga uso de la fuerza que cause \
  daños colaterales, se remitirá informe escrito al superior jerárquico y al \
  Ministerio Público. \
</p> \
<p> \
  Si la víctima es menor de dieciocho (18) años, deberá informar y tramitar de \
  inmediato el caso a través de la Policía de Infancia y Adolescencia para que \
  aplique los procedimientos y lineamientos preestablecidos. \
</p>";

  alert4 =
    "<ol> \
<li> \
  Si recepcionó denuncia, expida una remisión para valoración forense como \
  parte de las medidas urgentes, dirigida a la entidad competente de la \
  jurisdicción Solicite entrega de copia a la víctima y el original del \
  dictamen anéxelo a la denuncia. \
</li> \
<br> \
<li> \
  Atender a la víctima de violencia en un lugar que permita la discreción y \
  privacidad. • Ofrecer un trato respetuoso, amable, con excelente \
  disposición para el servicio y en ninguna circunstancia exprese opiniones \
  acerca de lo ocurrido. \
</li> \
<br> \
<li> \
  En una situación de crisis, acompañe a la víctima para estabilizar su \
  estado anímico antes de iniciar la atención. Si a pesar de sus esfuerzos, \
  la persona mantiene un alto grado de exaltación que le impida recepcionar \
  el caso, acompáñela al servicio de atención psicosocial dispuesto en su \
  jurisdicción para que se le preste la ayuda necesaria, luego recíbale la \
  denuncia. \
</li> \
</ol>";

  constructor(public modalController: ModalController, public alertController: AlertController) {}

  ngOnInit() {
    // $(".content-1").toggle("slow");
    // $(".content-1").addClass("expand");
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

  close() {
    this.modalController.dismiss();
  }

  async presentAlert(i) {
    const alert = await this.alertController.create({
      header: i == 3 ? "" : "Para tener en cuenta",
      message: i == 3 ? this.alert3 : this.alert4,
      buttons: ["OK"]
    });

    await alert.present();
  }
}
