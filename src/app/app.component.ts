import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, name: string, component: any, icon: string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if(!auth) {
        this.rootPage = Login;
        this.menu.enable(false);
      }
      else {
        this.rootPage = HomePage;
        this.menu.enable(true);
      }
    });

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', name: 'HomePage', component: HomePage, icon: 'home' },
      { title: 'List', name: 'ListPage', component: ListPage, icon: 'list' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  isActive(page) {
    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    else
      return 'blur';    
  }  

  logout() {
    this.afAuth.auth.signOut();
  }  
}
