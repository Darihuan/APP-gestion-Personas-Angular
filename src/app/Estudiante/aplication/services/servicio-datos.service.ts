import {EventEmitter, Injectable} from '@angular/core';
import {EstudianteOutput} from "../../model/EstudianteOutput";
import {EstudiantesService} from "./estudiantes.service";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  private estudiantes: EstudianteOutput[];
  private eventoDatos: EventEmitter<EstudianteOutput[]>;

  constructor(private Serviceestudiantes: EstudiantesService,private  rutaActiva:ActivatedRoute) {
    this.estudiantes = [];
    this.eventoDatos = new EventEmitter<EstudianteOutput[]>();
  }

  public datosactualizados(): void {
    this.Serviceestudiantes.getEstudiantes().subscribe(datosEstudiantes => {
      this.estudiantes = datosEstudiantes;
      this.eventoDatos.emit(this.estudiantes);
    })


  }

  public getEmiterEstudiantes(): EventEmitter<EstudianteOutput[]> {
    return this.eventoDatos;
  }

}
