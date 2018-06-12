import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { ApiGsbGlobal } from '../../models/apiGsb-global.model';
import { ApiGsbService } from '../../services/apiGsb.service';

@Component({
  selector: 'page-RnoteDeFrais',
  templateUrl: 'RnoteDeFrais.html'
})
export class RnoteDeFraisPage {

  noteDeFrais: ApiGsbGlobal = new ApiGsbGlobal;
  constructor(public navCtrl: NavController, private apiGsbService: ApiGsbService) {

    this.apiGsbService.getnoteDeFrais()
    .then(noteDeFraisFetched => {
      this.noteDeFrais = noteDeFraisFetched;
      console.log(this.noteDeFrais);
    })
  }

}
