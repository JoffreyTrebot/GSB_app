import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { ApiGsbGlobal } from '../../models/apiGsb-global.model';
import { ApiGsbService } from '../../services/apiGsb.service';

@Component({
  selector: 'page-newrapport',
  templateUrl: 'newrapport.html'
})
export class NewRapportPage {

  praticiens: ApiGsbGlobal = new ApiGsbGlobal;
  Maxrapport: ApiGsbGlobal = new ApiGsbGlobal;
  motif: ApiGsbGlobal = new ApiGsbGlobal;

  leMotif: string;
  lePraticien: number;
  leBilan: string;
  leMatricule: string;

  results: any;

  constructor(public navCtrl: NavController, private apiGsbService: ApiGsbService, private alertCtrl: AlertController, private navParams: NavParams) {
    
    this.leMatricule = navParams.get('matricule');
    
    this.apiGsbService.getPraticiens()
    .then(praticiensFetched => {
      this.praticiens = praticiensFetched;
    });

    this.apiGsbService.getMaxRapport()
    .then(MaxrapportFetched => {
      this.Maxrapport = MaxrapportFetched;
    });

    this.apiGsbService.getMotif()
    .then(motifFetched => {
      this.motif = motifFetched;
    });
  }

  private valider(){
    if(this.leBilan != undefined || this.leMotif != undefined || this.lePraticien != undefined){
      this.apiGsbService.setRapport(this.leMatricule, this.lePraticien, this.leBilan, this.leMotif)
      .then(result => {
        this.results = result;
        console.log(result);
      });

      let alert = this.alertCtrl.create({
        title: 'Nouveau rapport !',
        subTitle: 'Vous venez de créer un nouveau rapport avec succès.',
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
