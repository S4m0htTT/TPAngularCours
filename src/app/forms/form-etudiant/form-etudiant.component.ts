import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrl: './form-etudiant.component.css'
})
export class FormEtudiantComponent implements OnInit {

  formEtu!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.formEtu = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      rue: new FormControl(''),
      cp: new FormControl(''),
      ville: new FormControl(''),
      couriel: new FormControl(''),
      genre: new FormControl(''),
      age: new FormControl(''),
      idCandidate: new FormControl('')
    });
  }

  onSubmit() {}
}
