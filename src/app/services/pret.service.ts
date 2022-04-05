import { Injectable } from '@angular/core';
import { Pret } from "../models/pret.model";

@Injectable({
  providedIn: 'root'
})
export class PretService {
  prets = [
    {"id":1,"dossier_num":1,"matricule":"91-707-9863","nom":"Jeffy","prenoms":"Isherwood","date":"18/01/2022","heure":"0:19","etat":false,"date_modif_etat":"4/12/2020","date_modif_status":"6/24/2020","status":true},
    {"id":2,"dossier_num":2,"matricule":"66-889-2089","nom":"Fitz","prenoms":"Rawll","date":"16/05/2020","heure":"1:34","etat":false,"date_modif_etat":"3/10/2022","date_modif_status":"4/24/2021","status":true},
    {"id":3,"dossier_num":3,"matricule":"41-246-3016","nom":"Helsa","prenoms":"Standell","date":"27/09/2021","heure":"20:17","etat":true,"date_modif_etat":"4/12/2020","date_modif_status":"5/22/2021","status":undefined},
    {"id":4,"dossier_num":4,"matricule":"70-588-7666","nom":"Kinny","prenoms":"Leaton","date":"20/04/2020","heure":"21:41","etat":true,"date_modif_etat":"1/19/2022","date_modif_status":"5/15/2020","status":true},
    {"id":5,"dossier_num":5,"matricule":"57-702-1496","nom":"Auberon","prenoms":"Heasly","date":"29/05/2021","heure":"0:50","etat":true,"date_modif_etat":"3/18/2022","date_modif_status":"3/3/2022","status":false},
    {"id":6,"dossier_num":6,"matricule":"44-976-6376","nom":"Stesha","prenoms":"Songist","date":"02/11/2020","heure":"13:42","etat":true,"date_modif_etat":"7/13/2020","date_modif_status":"3/27/2022","status":undefined},
    {"id":7,"dossier_num":7,"matricule":"51-733-3601","nom":"Sallee","prenoms":"Lightfoot","date":"28/05/2021","heure":"11:58","etat":true,"date_modif_etat":"5/30/2021","date_modif_status":"11/11/2020","status":true},
    {"id":8,"dossier_num":8,"matricule":"01-203-8387","nom":"Robinetta","prenoms":"MacCallion","date":"05/03/2021","heure":"1:51","etat":false,"date_modif_etat":"6/4/2020","date_modif_status":"7/27/2021","status":false},
    {"id":9,"dossier_num":9,"matricule":"32-332-3707","nom":"Brett","prenoms":"Kelleher","date":"20/12/2020","heure":"10:20","etat":false,"date_modif_etat":"9/18/2021","date_modif_status":"1/20/2022","status":false},
    {"id":10,"dossier_num":10,"matricule":"49-686-1793","nom":"Kaia","prenoms":"Stoggell","date":"17/12/2020","heure":"21:28","etat":false,"date_modif_etat":"11/21/2021","date_modif_status":"4/15/2021","status":false}
  ];
  constructor() { }

  getIdPrets(i:number){
    if (this.prets[i]) {
      return this.prets[i];
    }
    return false;
  }
}
