import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { ApiGsbGlobal } from '../../models/apiGsb-global.model';
import { ApiGsbService } from '../../services/apiGsb.service';

@Component({
  selector: 'page-noteDeFrais',
  templateUrl: 'noteDeFrais.html'
})
export class noteDeFraisPage {

  praticiens: ApiGsbGlobal = new ApiGsbGlobal;

  matricule: string;
  lePraticien:string;
  date:string;
  midi:number;
  soir:number;
  nuit:number;
  hf:number;
  justif:number;

  results: any;
  constructor(public navCtrl: NavController, private apiGsbService: ApiGsbService, private alertCtrl: AlertController, private navParams: NavParams) {
    this.matricule = navParams.get('matricule');

    this.apiGsbService.getPraticiens()
    .then(praticiensFetched => {
      this.praticiens = praticiensFetched;
    });
  }

  private valider(){
    
    if(this.midi != undefined || this.soir != undefined || this.nuit != undefined || this.hf != undefined || this.justif != undefined){
      this.apiGsbService.setNoteDeFrais(this.matricule, this.lePraticien, this.date, this.midi, this.soir, this.nuit, this.hf, this.justif)
      .then(result => {
        this.results = result;
        console.log(result);
      });

      let alert = this.alertCtrl.create({
        title: 'Nouvelle note !',
        subTitle: 'Vous venez de créer une note de frais avec succès.',
        buttons: ['Ok']
      });
      alert.present();
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'ERREUR !',
        subTitle: 'Vos champs ne sont pas tous remplis.',
        buttons: ['Ok']
      });
      alert.present();
    }
    
  }

}
