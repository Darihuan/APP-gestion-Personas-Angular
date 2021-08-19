import {EventEmitter, Injectable} from '@angular/core';
import {EstudianteOutput} from "../model/EstudianteOutput";
import {EstudiantesService} from "./estudiantes.service";

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  private estudiantes: EstudianteOutput[];
  private eventodatos: EventEmitter<EstudianteOutput[]>;

  constructor(private Serviceestudiantes: EstudiantesService) {

  }

  public datosactualizados(): EventEmitter<EstudianteOutput[]> {
    return this.eventodatos;
  }

}
