import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiGsbGlobal } from '../../models/apiGsb-global.model';
import { ApiGsbService } from '../../services/apiGsb.service';

@Component({
  selector: 'page-praticiens',
  templateUrl: 'praticiens.html'
})
export class PraticiensPage {

  praticiens: ApiGsbGlobal = new ApiGsbGlobal;
  constructor(public navCtrl: NavController, private apiGsbService: ApiGsbService) {

    this.apiGsbService.getPraticiens()
    .then(praticiensFetched => {
      this.praticiens = praticiensFetched;
      console.log(this.praticiens);
    })
  }

}
