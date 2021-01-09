import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture';
import { VoitureService } from '../services/voiture.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html'
})
  
export class VoituresComponent implements OnInit {
  voitures: Voiture[]; //un tableau de chînes de caractères

  constructor(private voitureService: VoitureService,private router :Router) {
    //  this.voitures = voitureService.listeVoitures();
  }
  

  ngOnInit(): void {
    this.voitureService.listeVoiture().subscribe(voits => {
      console.log(voits);
      this.voitures = voits;
    });
  }
  supprimerVoiture(v: Voiture) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.voitureService.supprimerVoiture(v.idVoiture).subscribe(() => {
        console.log("voiture supprimé");
        this.SuprimerVoitureDuTableau(v);
      });
    /*this.router.navigate(['voitures']).then(() => {
      window.location.reload();
    })*/
    //console.log(v);
    

}
SuprimerVoitureDuTableau(voit : Voiture) {
  this.voitures.forEach((cur, index) => {
  if(voit.idVoiture=== cur.idVoiture) {
  this.voitures.splice(index, 1);
  }
  });
  }

}
