import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'

import { PraticiensPage } from '../Praticiens/praticiens';
import { MedicamentsPage } from '../Medicaments/medicaments';
import { VisiteursPage } from '../Visiteurs/visiteurs';
import { RapportsPage } from '../Rapports/rapports';
import { NewRapportPage} from '../newRapport/newrapport';
import { noteDeFraisPage  } from '../NoteDeFrais/noteDeFrais';
import { RnoteDeFraisPage  } from '../RNoteDeFrais/RnoteDeFrais';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  matricule: string;
  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, private navParams: NavParams) {
    this.matricule = navParams.get('matricule');
  }

  private presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Note de frais',
     buttons: [
       {
         text: 'Lire',
         role: 'read',
         handler: () => {
           this.navCtrl.push(RnoteDeFraisPage);
           console.log('Read clicked');
         }
       },
       {
         text: 'Ajouter',
         role: 'add',
         handler: () => {
           this.navCtrl.push(noteDeFraisPage, { matricule: this.matricule });
           console.log('Add clicked');
         }
       },
       {
         text: 'Annuler',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }

  private showNRap(){
    this.navCtrl.push(NewRapportPage, { matricule: this.matricule });
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
