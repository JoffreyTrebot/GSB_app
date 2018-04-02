import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuPage } from '../Menu/menu';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  private show(){
    this.navCtrl.push(MenuPage);
  }
}
