import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiGsbGlobal } from '../../models/apiGsb-global.model';
import { ApiGsbService } from '../../services/apiGsb.service';

@Component({
  selector: 'page-visiteurs',
  templateUrl: 'visiteurs.html'
})
export class VisiteursPage {

  collaborateurs: ApiGsbGlobal = new ApiGsbGlobal;
  constructor(public navCtrl: NavController, private apiGsbService: ApiGsbService) {

    this.apiGsbService.getCollaborateurs()
    .then(collaborateursFetched => {
      this.collaborateurs = collaborateursFetched;
    })
  }

}
