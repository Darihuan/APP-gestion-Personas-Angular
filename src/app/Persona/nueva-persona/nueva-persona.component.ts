import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { PersonaDTO } from 'src/app/interfaces/PersonaDTO';
import { PersonaOutput } from 'src/app/interfaces/PersonaDTOOutput';



@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.scss']
})
export class NuevaPersonaComponent implements OnInit{
 

  constructor(private formBuilder:FormBuilder,private service:ApiServiceService,public router:Router) { }
  ngOnInit(): void {
    this.personaActualizar=this.service.personaActualizar
  }
personaActualizar:PersonaDTO;
   
 
  
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
    
    let persona=new PersonaDTO(null,this.personaForm.get('user').value,this.personaForm.get('password').value,
    this.personaForm.get('surname').value, this.personaForm.get('company_email').value, this.personaForm.get('personal_email').value,
    this.personaForm.get('city').value, this.personaForm.get('active').value, this.personaForm.get('created_Date').value);

    this.service.crearPersona(persona);

   

    

  }
  
  update(){

    let persona=new PersonaDTO(this.personaActualizar.id,this.personaForm.get('user').value,this.personaForm.get('password').value,
    this.personaForm.get('surname').value, this.personaForm.get('company_email').value, this.personaForm.get('personal_email').value,
    this.personaForm.get('city').value, this.personaForm.get('active').value, this.personaForm.get('created_Date').value);

    this.service.actualizar(persona);
    this.router.navigate(['/listar'])
  }
  borrarPersona(persona:PersonaDTO){
    this.service.borrarPersona(persona.id).then(()=> this.router.navigate(['/listar']));
   
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
