import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Glosario',
      url: '/glosario',
      icon: 'help'
    },
    {
      title: 'Violencia basada en género',
      url: '/violencia-basada-genero',
      icon: 'woman'
    },
    {
      title: 'Marco juridico',
      url: '/marco-juridico',
      icon: 'book'
    },
    {
      title: 'Ataques con agentes quimicos',
      url: '/ataques-agentes-quimicos',
      icon: 'nuclear'
    },
    {
      title: 'Rutas institucionales',
      url: '/rutas-institucionales',
      icon: 'walk'
    },
    {
      title: 'Creditos',
      url: '/creditos',
      icon: 'newspaper'
    }
  ];  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }  
}
