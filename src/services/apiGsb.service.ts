// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

// Models
// Importez vos models ici
@Injectable()
export class ApiGsbService {

    private baseUrl: string = 'http://joffreytrebot.raidghost.com/';

    constructor(private http: Http) { }

    public getPraticiens(): Promise<any> {
		const url = `${this.baseUrl}apiGSB/praticien/read.php`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

}
