import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alerta } from 'src/app/interfaces/Alerta';
import { PersonaDTO } from 'src/app/interfaces/PersonaDTO';
import { PersonaOutput } from 'src/app/interfaces/PersonaDTOOutput';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient,private router:Router) { }

/*variables*/
  alertas:Alerta[]=[];



  api_url:string="http://localhost:3000/personas/";

  id_persona:number=0;






/*metodos*/

  crearPersona(persona:PersonaDTO):Observable<PersonaOutput>{

    return this.http.post<PersonaOutput>(this.api_url,persona);



  }
  getPersonas():Observable<PersonaOutput[]>{
    return this.http.get<PersonaOutput[]>(this.api_url);


  }
   getPersonasbyId(id:number):Observable<PersonaOutput>{
    let personadevolver;
    personadevolver= this.http.get<PersonaOutput>(this.api_url+id);


     return personadevolver;


    }
  borrarPersona(id:number):Observable<any>{

    return this.http.delete(this.api_url+id);


  }
  actualizar(persona:PersonaDTO):Observable<PersonaOutput>{
    return this.http.put<PersonaOutput>(this.api_url+persona.id, persona);

  }


}
