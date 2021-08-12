import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Alerta } from 'src/app/interfaces/Alerta';
import { PersonaDTO } from 'src/app/interfaces/PersonaDTO';
import { PersonaService } from 'src/app/services/persona/persona.service';




@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.scss']
})
export class NuevaPersonaComponent implements OnInit{
 

  constructor(private formBuilder:FormBuilder,private service:PersonaService,public router:Router) { }

  ngOnInit(): void {
    this.personaActualizar=this.service.persona_actualizar;
    if(this.router.url==='/actualizar')
    this.personaForm.setValue(this.personaActualizar)
  }
  /*variables*/
  personaActualizar:PersonaDTO;
   personaForm:FormGroup=this.formBuilder.group({
    'user': [''],
    'password': [''],
    'surname': [''],
    'company_email': [''],
    'personal_email': [''],
    'city':[''],
    'active':[false],
    'created_Date':['']
  });
  /*metodos*/

  submit():void{
    
   let persona:PersonaDTO=new PersonaDTO(null,this.personaForm.get('user').value,this.personaForm.get('password').value,
    this.personaForm.get('surname').value, this.personaForm.get('company_email').value, this.personaForm.get('personal_email').value,
    this.personaForm.get('city').value, this.personaForm.get('active').value, this.personaForm.get('created_Date').value);

    this.service.crearPersona(persona).subscribe(()=>this.router.navigate(['/']));  

  }
  
  update():void{

    let persona=new PersonaDTO(this.personaActualizar.id,this.personaForm.get('user').value,this.personaForm.get('password').value,
    this.personaForm.get('surname').value, this.personaForm.get('company_email').value, this.personaForm.get('personal_email').value,
    this.personaForm.get('city').value, this.personaForm.get('active').value, this.personaForm.get('created_Date').value);

    this.service.actualizar(persona).subscribe((actualizar)=>{
      this.service.contador_alertas=this.service.contador_alertas+1;
      this.service.alertas.push(new Alerta("Actualizacion","Persona con id:"+persona.id+" ha sido actualizado"))});
     this.router.navigate(['/listar'])
  }
  borrarPersona(persona:PersonaDTO):void{
    this.service.borrarPersona(persona.id).subscribe((borrado)=>{
      this.service.contador_alertas=this.service.contador_alertas+1;
      this.service.alertas.push(new Alerta("Borrado","Persona con id:"+persona.id+" ha sido borrada"));
    })
    .add(()=>{
      this.router.navigate(['/listar']);
    }).unsubscribe();
   
  }

  refrescar():void{
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
