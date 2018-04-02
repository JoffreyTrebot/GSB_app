import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiGsbGlobal } from '../../models/apiGsb-global.model';
import { ApiGsbService } from '../../services/apiGsb.service';

@Component({
  selector: 'page-medicaments',
  templateUrl: 'medicaments.html'
})
export class MedicamentsPage {

  medicaments: ApiGsbGlobal = new ApiGsbGlobal;
  constructor(public navCtrl: NavController, private apiGsbService: ApiGsbService) {

    this.apiGsbService.getMedicaments()
    .then(medicamentsFetched => {
      this.medicaments = medicamentsFetched;
    })
  }

}
