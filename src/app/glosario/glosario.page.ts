import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.page.html',
  styleUrls: ['./glosario.page.scss'],
})
export class GlosarioPage implements OnInit {

  src = 'assets/img/2.png';

  glosario = [
    {
      image: 'assets/img/2.png',
      word: 'Sexo',
      definition: 'Desde la perspectiva biológica, el sexo se refiere a las características genéticas, endocrinas y morfológicas del cuerpo. Las categorías utilizadas para clasificar estas características en los seres humanos son hombre, mujer e intersexual.',
      detail: false      
    },
    {
      image: 'assets/img/2.png',
      word: 'Género',
      definition: 'Tiene que ver con la historia, la cultura y la sociedad, en donde los individuos nacemos con sexo, pero no con género. El género se va construyendo en la relación con el otro o la otra, de acuerdo con las ideas validadas en la sociedad a través de la cultura, frente a las diversas construcciones de identidad de género (femenina, masculino, transitando en el género, entre otras).',
      detail: false
    },
    {
      image: 'assets/img/2.png',
      word: 'Género no-binario:',
      definition: 'Identidad en la que el individuo no se identifica con los géneros masculino o femenino.',
      detail: false
    },
    {
      image: 'assets/img/2.png',
      word: 'Orientación sexual',
      definition: 'Es la atracción erótica, afectiva o emocional hacia una persona del mismo sexo o del sexo contrario, o los dos.',
      detail: true,
      detailData: [
        {
          word: 'Orientación sexual',
          items: [
            {
              value: 'Heterosexual'
            },
            {
              value: 'Homosexual (lesbiana, gay, bisexual, asexual)'
            }
          ]
        },
        {
          word: 'Identidad de género',
          items: [
            {
              value: 'Femenino'
            },
            {
              value: 'Masculino'
            },
            {
              value: 'Trans'
            }
          ]
        },
        {
          word: 'Sexo',
          items: [
            {
              value: 'Hombre'
            },
            {
              value: 'mujer'
            },
            {
              value: 'intersexual'
            }
          ]
        }
      ]
    },
    {
      image: 'assets/img/2.png',
      word: 'LGTBI',
      definition: 'La sigla LGBTI hace referencia a lesbianas, gays, bisexuales, transexuales e intersexuales, para hacer alusión a diferentes aspectos de la sexualidad, la construcción de la identidad de las personas y la forma en la que la expresan.',
      detail: false
    },
    {
      image: 'assets/img/2.png',
      word: 'Lesbiana',
      definition: 'Mujer que siente atracción física, emocional y erótica hacia otras   mujeres (orientación sexual).',
      detail: false
    },
    {
      image: 'assets/img/2.png',
      word: 'Gay',
      definition: 'Hombres que muestran inclinación hacia la relación erótico – afectiva  entre individuos de su mismo sexo (orientación sexual).',
      detail: false
    },
    {
      image: 'assets/img/2.png',
      word: 'Bisexual',
      definition: 'Persona que involucra atracción física y/o sentimental hacia individuos de ambos sexos.',
      detail: false
    },
    {
      image: 'assets/img/2.png',
      word: 'Transgénero',
      definition: 'Forma de expresión de la sexualidad de una persona que difiere de su género biológico y lo que la sociedad le ha asignado a este. Autoidentificación como hombre, mujer, ambos o ninguno, que no se corresponde con el género asignado a uno mismo.',
      detail: false
    },
    {
      image: 'assets/img/2.png',
      word: 'Intersexual',
      definition: 'Personas que nacen con ‘ambos’ sexos. <i>Presidencia de la República. Consejería DDHH. Orientación Sexual, Identidad de Género y Derechos Humanos, ¡Sus derechos valen! Recuperado el 17 de septiembre de 2019 </i>',
      detail: false
    },
    {
      image: 'assets/img/2.png',
      word: 'Perspectiva de género',
      definition: 'Corresponde a una mirada epistemológica de la realidad desde el análisis de las relaciones de poder entre los géneros, en la que tradicionalmente se ha subvalorado lo masculino sobre lo femenino.',
      detail: false
    },
    {
      image: 'assets/img/2.png',
      word: 'Violencias contra las mujeres',
      definition: 'De acuerdo con el Artículo 2° de la Ley 1257 de 2008, se entiende como cualquier acción u omisión que les cause muerte, daño o sufrimiento físico, sexual, psicológico, económico o patrimonial a las mujeres, por su condición de mujeres, así como las amenazas de tales actos, la coacción o la privación arbitraria de la libertad, bien sea que se presente en el ámbito público o en el privado.',
      detail: false
    },
    {
      image: 'assets/img/2.png',
      word: 'Feminicidio',
      definition: 'Quien causare la muerte a una mujer por su condición de ser mujer o por motivos de su identidad de género o donde haya concurrido o antecedido cualquiera de las circunstancias descritas en el artículo 104A literales a, b, c, d, e, f. de la Ley 1761 del 6 de julio de 2015.',
      detail: false
    },
    {
      image: 'assets/img/2.png',
      word: 'Violencia intrafamiliar',
      definition: 'El que maltrate física o psicológicamente a cualquier miembro de su núcleo familiar (padre, madre, abuelos, hijos-as, hijos-as adoptivos-as), personas que permanentemente están integradas a la unidad doméstica o personas que no son miembros de la familia, pero están encargadas de las labores de cuidado.',
      detail: false
    },
    {
      image: 'assets/img/2.png',
      word: 'Agresión con agente químico',
      definition: 'Los ataques con ácidos, álcalis o sustancias similares o corrosivas (en adelante agentes químicos) no son un evento aislado, sino una de las manifestaciones de las violencias basadas en género (VBG); esto es, que son ejercidas principalmente contra las mujeres por el hecho de ser mujeres. No obstante, a diferencia de otras modalidades, esta agresión es particular en cuanto al medio utilizado y la calidad de daño que pretende el agresor.',
      detail: false
    },
    {
      image: 'assets/img/2.png',
      word: 'Delitos sexuales',
      definition: 'El delito sexual en Colombia continúa siendo uno de los factores violentos que registra un mayor impacto en la sociedad, dadas las circunstancias en que se cometen y por involucrar en él, prioritariamente, a menores de edad de ambos sexos y ser sus victimarios, en su gran mayoría, personas cercanas al círculo familiar y social.',
      detail: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
