import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture';
import { VoitureService } from '../services/voiture.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html'
})
export class AddVoitureComponent implements OnInit {

  newVoiture = new Voiture();
  message: string;

  constructor(private voitureService:VoitureService,private router :Router) {  }

  ngOnInit(): void {
  }
  /*addVoiture(){
    this.voitureService.ajouterVoiture(this.newVoiture);
    this.message="Voiture "+this.newVoiture.nomVoiture+" ajouté avec succés !"
  }*/
  
  addProduit(){
    this.voitureService.ajouterVoiture(this.newVoiture)
    .subscribe(voit => {
    console.log(voit);
    });
    this.router.navigate(['voitures']);
    }
    

}
