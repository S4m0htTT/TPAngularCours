import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';


@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrl: './etudiant-hors-paris.component.css'
})
export class EtudiantHorsParisComponent implements OnInit {
  constructor(private etudiant: EtudiantServiceService) { }

  donnee: any

  ngOnInit(): void {
    this.donnee = this.etudiant.getEtu()
  }
}
