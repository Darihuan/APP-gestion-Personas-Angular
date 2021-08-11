import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { PersonaDTO } from '../interfaces/PersonaDTO';
import { PersonaOutput } from '../interfaces/PersonaDTOOutput';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient,private router:Router) { }

  api_url:string="http://localhost:8080/api/v1/";
  id_persona:number=0;
  personaActualizar:PersonaOutput;

  contadorborrados=0;
   crearPersona(persona:PersonaDTO){

    return this.http.post(this.api_url+'personas',persona).toPromise().then(
      (respuesta)=>respuesta).then( ()=>this.router.navigate(['/']));
    
    
  }
  getPersonas(){
    return this.http.get<PersonaOutput[]>(this.api_url+'personas').toPromise().then((respuesta)=>respuesta);

  }
  borrarPersona(id:number){
    return this.http.delete(this.api_url+"personas/"+id).toPromise().then((borrado)=>this.contadorborrados=this.contadorborrados+1);
  }
  actualizar(persona:PersonaDTO){
    return this.http.put(this.api_url+"personas/actualizar/"+persona.id,persona).toPromise();

  }
}
