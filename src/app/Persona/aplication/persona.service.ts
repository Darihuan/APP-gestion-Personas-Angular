import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {PersonaDTO} from 'src/app/Persona/model/PersonaDTO';
import {PersonaOutput} from 'src/app/Persona/model/PersonaDTOOutput';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  /*variables*/

  private apiUrl: string;


  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = "http://localhost:3000/personas/";
  }


  /*metodos*/

  public crearPersona(persona: PersonaOutput): Observable<PersonaOutput> {

    return this.http.post<PersonaOutput>(this.apiUrl, persona);


  }

  public getPersonas(): Observable<PersonaOutput[]> {
    return this.http.get<PersonaOutput[]>(this.apiUrl);


  }

  public getPersonasById(id: number): Observable<PersonaOutput> {
    let personadevolver;
    personadevolver = this.http.get<PersonaOutput>(this.apiUrl + id);


    return personadevolver;


  }

  public borrarPersona(id: number): Observable<any> {

    return this.http.delete(this.apiUrl + id);


  }

  public actualizar(persona: PersonaOutput): Observable<PersonaOutput> {
    return this.http.put<PersonaOutput>(this.apiUrl + persona.id, persona);

  }


}
