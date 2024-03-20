import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-specialite',
  templateUrl: './form-specialite.component.html',
  styleUrl: './form-specialite.component.css'
})
export class FormSpecialiteComponent {

  formSpe!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.formSpe = new FormGroup({
      nom: new FormControl(''),
      id: new FormControl('')
    });
  }

  onSubmit() {}
}
