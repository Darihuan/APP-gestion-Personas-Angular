import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {PersonaOutput} from "../../model/PersonaDTOOutput";
import {PersonaService} from "../services/persona.service";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn:"root"
})
export class PersonaIdResolver implements Resolve<Observable<PersonaOutput>>{
  constructor(private personaApi:PersonaService) {
  }
  public resolve(route: ActivatedRouteSnapshot): Observable<PersonaOutput> {
    return this.personaApi.getPersonasById(route.params.id)
  }
}
