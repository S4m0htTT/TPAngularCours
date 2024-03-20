import { Component, OnInit } from '@angular/core';
import { SpecServiceService } from '../../services/spec-service.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent implements OnInit {
  constructor(private spec: SpecServiceService) { }

  donnee: any

  ngOnInit(): void {
    this.donnee = this.spec.getSpe()
  }
}
