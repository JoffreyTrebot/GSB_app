import { ApiGsbPraticiens } from './apiGsb-praticiens.model';
import { ApiGsbMedicaments } from './apiGsb-medicaments.model';
import { ApiGsbCollaborateurs } from './apiGsb-collaborateurs.model';
import { ApiGsbRapportvisite } from './apiGsb-rapportvisite.model';
import { ApiGsbMotif } from './apiGsb-motif.model';
import { ApiGsbMaxRapport } from './apiGsb-Maxrapport.model';

export class ApiGsbGlobal{
  praticiens: ApiGsbPraticiens[];
  medicaments: ApiGsbMedicaments[];
  collaborateurs: ApiGsbCollaborateurs[];
  COL_DATEEMBAUCHE: string;
  Rapport_visite: ApiGsbRapportvisite[];
  motifs: ApiGsbMotif[];
  MAX: number;
  Max_rapport: ApiGsbMaxRapport[];
}
