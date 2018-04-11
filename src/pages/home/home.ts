import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { MenuPage } from '../Menu/menu';

import { ApiGsbGlobal } from '../../models/apiGsb-global.model';
import { ApiGsbService } from '../../services/apiGsb.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    collaborateur: ApiGsbGlobal = new ApiGsbGlobal;
    matricule: string;
    date: string;

    constructor(public navCtrl: NavController, private apiGsbService: ApiGsbService, private toastCtrl: ToastController) {

    }

    private connexion(){
      this.apiGsbService.getUnCollaborateurs(this.matricule)
      .then(collaborateurFetched => {
        this.collaborateur = collaborateurFetched;
        if(this.matricule != null && this.collaborateur.COL_DATEEMBAUCHE == this.date){
          this.navCtrl.push(MenuPage);
        }
        else{
          let toast = this.toastCtrl.create({
            message: 'Vos informations de connexion sont incorrectes',
            duration: 3000,
            position: 'top'
          });

          toast.present();
        }
      })
    }
  }
