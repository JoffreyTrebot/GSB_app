import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiGsbGlobal } from '../../models/apiGsb-global.model';
import { ApiGsbService } from '../../services/apiGsb.service';

@Component({
  selector: 'page-rapports',
  templateUrl: 'rapports.html'
})
export class RapportsPage {

  rapports: ApiGsbGlobal = new ApiGsbGlobal;
  constructor(public navCtrl: NavController, private apiGsbService: ApiGsbService) {

    this.apiGsbService.getRapports()
    .then(rapportsFetched => {
      this.rapports = rapportsFetched;
    })
  }

}
