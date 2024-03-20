import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent implements OnInit {
  constructor(private etudiant: EtudiantServiceService) { }

  donnee: any

  ngOnInit(): void {
    this.donnee = this.etudiant.getEtu()
  }
}
