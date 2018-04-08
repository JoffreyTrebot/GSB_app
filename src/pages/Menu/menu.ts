import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PraticiensPage } from '../Praticiens/praticiens';
import { MedicamentsPage } from '../Medicaments/medicaments';
import { VisiteursPage } from '../Visiteurs/visiteurs';
import { RapportsPage } from '../Rapports/rapports';
import { NewRapportPage} from '../newRapport/newrapport';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController) {
  }
  private showNRap(){
    this.navCtrl.push(NewRapportPage);
  }
  private showRap(){
    this.navCtrl.push(RapportsPage);
  }
  private showVis(){
    this.navCtrl.push(VisiteursPage);
  }
  private showPra(){
    this.navCtrl.push(PraticiensPage);
  }
  private showMed(){
    this.navCtrl.push(MedicamentsPage);
  }
}
