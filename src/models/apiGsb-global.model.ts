import { ApiGsbPraticiens } from './apiGsb-praticiens.model';
import { ApiGsbMedicaments } from './apiGsb-medicaments.model';
import { ApiGsbCollaborateurs } from './apiGsb-collaborateurs.model';

export class ApiGsbGlobal{
  praticiens: string;
  PRA_NUM: ApiGsbPraticiens[];
  PRA_NOM: ApiGsbPraticiens[];
  PRA_PRENOM: ApiGsbPraticiens[];
  PRA_CP: ApiGsbPraticiens[];
  PRA_ADRESSE: ApiGsbPraticiens[];
  PRA_VILLE: ApiGsbPraticiens[];
  PRA_COEFNOTORIETE: ApiGsbPraticiens[];
  TYP_CODE:ApiGsbPraticiens[];
  dep: ApiGsbPraticiens[];

  medicaments: string;
  MED_NOMCOMMERCIAL: ApiGsbMedicaments[];
  FAM_CODE: ApiGsbMedicaments[];
  MED_COMPOSITION: ApiGsbMedicaments[];
  MED_EFFETS: ApiGsbMedicaments[];
  MED_CONTREINDIC: ApiGsbMedicaments[];
  MED_PRIXECHANTILLON: ApiGsbMedicaments[];
  MED_DEPOTLEGAL: ApiGsbMedicaments[];

  collaborateurs: string;
  COL_NOM: ApiGsbCollaborateurs[];
  COL_PRENOM: ApiGsbCollaborateurs[];
  COL_ADRESSE: ApiGsbCollaborateurs[];
  COL_CP: ApiGsbCollaborateurs[];
  SEC_LIBELLE: ApiGsbCollaborateurs[];
  COL_VILLE: ApiGsbCollaborateurs[];
  LAB_CHEFVENTE: ApiGsbCollaborateurs[];
  COL_MATRICULE: ApiGsbCollaborateurs[];
}
