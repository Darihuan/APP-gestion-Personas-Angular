import {Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {PersonaOutput} from "../../model/PersonaDTOOutput";
import {PersonaService} from "../services/persona.service";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn:"root"
})
export class PersonaResolver implements Resolve<Observable<PersonaOutput[]>>{
  constructor(private personaApi:PersonaService) {
  }
  public resolve():Observable<PersonaOutput[]>{
    return this.personaApi.getPersonas();
  }
}
