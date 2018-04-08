import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  date: string;
  leBilan: string;
  leMatricule: string;

  constructor(public navCtrl: NavController, private apiGsbService: ApiGsbService) {
    this.apiGsbService.getPraticiens()
    .then(praticiensFetched => {
      this.praticiens = praticiensFetched;
    })

    this.apiGsbService.getMaxRapport()
    .then(MaxrapportFetched => {
      this.Maxrapport = MaxrapportFetched;
    })

    this.apiGsbService.getMotif()
    .then(motifFetched => {
      this.motif = motifFetched;
    })
  }

  private valider(){
    this.leMatricule = "a131";

    this.apiGsbService.setRapport(this.leMatricule, this.lePraticien, this.leBilan, this.leMotif)
  }

}
