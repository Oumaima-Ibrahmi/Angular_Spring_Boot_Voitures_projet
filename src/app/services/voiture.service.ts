import { Injectable } from '@angular/core';
import { Voiture } from '../model/voiture';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
  
  
export class VoitureService {
  apiURL: string = 'http://localhost:8080/produits/api';
  voitures: Voiture[]; //un tableau de Voitures
  //voiture: Voiture;
  constructor(private http : HttpClient) {
   /* this.voitures= [{idVoiture: 1, nomVoiture : "Toyota",  prixVoiture: 3000.600, dateCreation : new Date("01/14/2011")},
    {idVoiture: 2, nomVoiture : "BM",  prixVoiture : 450, dateCreation : new Date("12/17/2010")},
    {idVoiture: 3, nomVoiture: "Range Rover", prixVoiture: 900.123, dateCreation: new Date("02/20/2020") }
];*/

  }
  /*listeVoitures(): Voiture[] {
    return this.voitures;
  }*/
  listeVoiture(): Observable<Voiture[]>{
    return this.http.get<Voiture[]>(this.apiURL);
    }
    
    ajouterVoiture( voit: Voiture):Observable<Voiture>{
      return this.http.post<Voiture>(this.apiURL, voit, httpOptions);
      }
      
  
  /*ajouterVoiture( voit: Voiture){
    this.voitures.push(voit);
    }*/

    supprimerVoiture(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
  /*  supprimerVoiture( voit: Voiture){
      //supprimer la voiture prod du tableau produits
      const index = this.voitures.indexOf(voit, 0);
      if (index > -1) {
      this.voitures.splice(index, 1);
      }
     
    }*/
  
   
    consulterVoiture(id: number): Observable<Voiture> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Voiture>(url);
      }
      
  
 ;
    updateVoiture(prod :Voiture) : Observable<Voiture>
{
return this.http.put<Voiture>(this.apiURL, prod, httpOptions);
}

    
  
    trierVoitures(){
      this.voitures = this.voitures.sort((n1,n2) => {
      if (n1.idVoiture > n2.idVoiture) {
      return 1;
      }
      if (n1.idVoiture < n2.idVoiture) {
      return -1;
      }
      return 0;
      });
      }
      
      
    
}
