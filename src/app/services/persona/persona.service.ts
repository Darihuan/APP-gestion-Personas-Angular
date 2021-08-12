import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonaDTO } from 'src/app/interfaces/PersonaDTO';
import { PersonaOutput } from 'src/app/interfaces/PersonaDTOOutput';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient,private router:Router) { }

/*variables*/
  api_url:string="http://localhost:3000/personas/";
  id_persona:number=0;
  persona_actualizar:PersonaOutput;
  contador_borrados:number=0;




/*metodos*/

  crearPersona(persona:PersonaDTO):Observable<PersonaOutput>{

    return this.http.post<PersonaOutput>(this.api_url,persona);
    /*.toPromise().then(
      (respuesta)=>respuesta).then( ()=>this.router.navigate(['/']));*/
    
    
  }
  getPersonas():Observable<PersonaOutput[]>{
    return this.http.get<PersonaOutput[]>(this.api_url);

    /*.toPromise().then((respuesta)=>respuesta);*/

  }
  borrarPersona(id:number):Observable<any>{

    return this.http.delete(this.api_url+id);

    /*.toPromise().then((borrado)=>this.contadorborrados=this.contadorborrados+1);*/
  }
  actualizar(persona:PersonaDTO):Observable<PersonaOutput>{
    return this.http.put<PersonaOutput>(this.api_url+persona.id, persona);
    /*.toPromise();*/
  }
}