import { ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {EstudiantesService} from "../services/estudiantes.service";
import {EstudianteOutput} from "../../model/EstudianteOutput";


@Injectable({
  providedIn: "root"
})

export class EstudiantesResolver implements Resolve<Observable<any>> {
  constructor(private estudiantesApi: EstudiantesService) {
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<EstudianteOutput[]> {
    return this.estudiantesApi.getEstudiantes();
  }

}

