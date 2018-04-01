// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

// Models
// Importez vos models ici
@Injectable()
export class NewApiService {

    private baseUrl: string = 'http://joffreytrebot.raidghost.com/';

    constructor(private http: Http) { }

    public getObjects(): Promise<any> {
		const url = `${this.baseUrl}apiGSB/collaborateur/read_one.php`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

}
