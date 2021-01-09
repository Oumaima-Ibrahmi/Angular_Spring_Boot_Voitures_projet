import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture';
import { VoitureService } from '../services/voiture.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html'
 
})
export class UpdateVoitureComponent implements OnInit {
  currentVoiture = new Voiture();

  constructor(private activatedRoute: ActivatedRoute,private router :Router,
private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentVoiture = prod; } ) ;
  }

  updateVoiture() {
    //console.log(this.currentVoiture);
   /* this.voitureService.updateVoiture(this.currentVoiture);
    this.router.navigate(['voitures']);*/
    this.voitureService.updateVoiture(this.currentVoiture).subscribe(prod => {
      this.router.navigate(['voitures']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
      

  }

}
