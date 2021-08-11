import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { PersonaDTO } from '../interfaces/PersonaDTO';
import { PrincipalComponent } from '../principal/principal.component';

@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.scss']
})
export class NuevaPersonaComponent implements OnInit {
 

  constructor(private formBuilder:FormBuilder,private service:ApiServiceService) { }
  ngOnInit(): void {
  }
  
  personaForm=this.formBuilder.group({
    'user': [''],
    'password': [''],
    'surname': [''],
    'company_email': [''],
    'personal_email': [''],
    'city':[''],
    'active':[false],
    'created_Date':['']

  });

  submit(){
    
    let persona=new PersonaDTO(this.personaForm.get('user').value,this.personaForm.get('password').value,
    this.personaForm.get('surname').value, this.personaForm.get('company_email').value, this.personaForm.get('personal_email').value,
    this.personaForm.get('city').value, this.personaForm.get('active').value, this.personaForm.get('created_Date').value);

    this.service.crearPersona(persona);

   

    

  }
  refrescar(){
    this.personaForm.patchValue({
      'user': [''],
      'password': [''],
      'surname': [''],
      'company_email': [''],
      'personal_email': [''],
      'city':[''],
      'active':[false],
      'created_Date':['']
    })
  }

  



}
