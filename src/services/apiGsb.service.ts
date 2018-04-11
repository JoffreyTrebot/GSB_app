// Core components
import { Injectable }   from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

// Models
// Importez vos models ici
@Injectable()
export class ApiGsbService {

    private baseUrl: string = 'https://joffreytrebot.fr/';
    data: Observable<any>;

    constructor(private http: Http) { }

    public getPraticiens(): Promise<any> {
		const url = `${this.baseUrl}apiGSB/praticien/read.php`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

    public getMedicaments(): Promise<any> {
		const url = `${this.baseUrl}apiGSB/medicament/read.php`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

    public getCollaborateurs(): Promise<any> {
		const url = `${this.baseUrl}apiGSB/collaborateur/read.php`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

    public getUnCollaborateurs(id): Promise<any> {

		const url = `${this.baseUrl}apiGSB/collaborateur/read_one.php?id=${id}`;
    console.log(url);
        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

    public getRapports(): Promise<any> {
		const url = `${this.baseUrl}apiGSB/rapport_visite/read.php`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

    public getMotif(): Promise<any> {
		const url = `${this.baseUrl}apiGSB/motif/read.php`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

    public getMaxRapport(): Promise<any> {
		const url = `${this.baseUrl}apiGSB/rapport_visite/readMax.php`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

    public setRapport(MATRICULE, NUM, BILAN, LIBELLE,DATE): Promise<any> {

      const url = `${this.baseUrl}apiGSB/rapport_visite/create.php`;



      let postData = new FormData();
      postData.append('COL_MATRICULE', MATRICULE);
      postData.append('PRA_NUM', NUM);
      postData.append('RAP_BILAN', BILAN);
      postData.append('MOTIF_LIBELLE', LIBELLE);
      postData.append('RAP_DATE', DATE);
      return this.http.post(url, postData)
      .toPromise()
      .then(response => response.json())
      .catch(error => console.log('Une erreur est survenue ' + error))
    }


}
