import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{ title: string, component: any, icom: string }>;
  pLogout: Array<{ title: string, component: any }>;
  menuPage: Array<{ title: string, component: any, icon: string}>;
  menuAdd: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: TabsPage, icom: 'home' },
      { title: 'Add Restaurant', component: 'AddPage', icom: 'md-restaurant'},
      // { title: 'List', component: ListPage, icom: 'list-box' },
    ];
    // this.pages.push({title: 'Add Restaurant', component: 'AddshopPage', icom: 'cloud-upload'});

    this.pLogout = [
      { title: 'Logout', component: LoginPage }
    ];

    this.menuPage = [
      { title: 'Home', component: TabsPage, icon: 'home'},
      { title: 'Register Restaurant', component: 'AddshopPage', icon: 'clipboard'},
      { title: 'Like Restaurant', component: 'LikePage', icon: 'md-thumbs-up'}
    ];
    this.menuAdd =[
      { title: 'Setting', component: 'AccountPage', icon: 'cog'},
      { title: 'Help', component: 'CartPage', icon: 'help-circle'}
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
}