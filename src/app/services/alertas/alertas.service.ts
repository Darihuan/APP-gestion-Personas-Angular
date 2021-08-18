import {EventEmitter, Injectable} from '@angular/core';
import {Alerta} from "../../interfaces/Alerta";
import {PersonaDTO} from "../../interfaces/PersonaDTO";

@Injectable({
  providedIn: 'root'
})
export class AlertasService {
  /*variables*/
  private almacenamientoAlertas: Alerta[];
  private eventoAlertas: EventEmitter<Alerta[]> = new EventEmitter<Alerta[]>();

  constructor() {
    if (localStorage.getItem("alertas") == null) {
      localStorage.setItem("alertas", "[]")

    }
    this.almacenamientoAlertas = JSON.parse(localStorage.getItem(('alertas')));


  }


  /*metodos*/

  public cargarDatos(): EventEmitter<Alerta[]> {
    return this.eventoAlertas;
  }

  public crearAlerta(id:number, tipo: string): void {
    let alerta = new Alerta(tipo, "Persona con id:" + id + ` ha sido ${tipo}`, Math.floor(Math.random() * 999999));
    let arrayAlertas = JSON.parse(localStorage.getItem("alertas"));

    arrayAlertas.push(alerta);
    this.almacenamientoAlertas.push(alerta);

    localStorage.setItem("alertas", JSON.stringify(arrayAlertas));
    this.eventoAlertas.emit(this.almacenamientoAlertas);
  }


  public deleteAlerta(alerta: Alerta): Alerta[] {

    let arrayAlertas: Alerta[] = JSON.parse(localStorage.getItem("alertas")).filter(alertaarray => alertaarray.id != alerta.id);

    localStorage.setItem("alertas", JSON.stringify(arrayAlertas));
    this.almacenamientoAlertas = arrayAlertas;

    this.eventoAlertas.emit(this.almacenamientoAlertas);
    return arrayAlertas;

  }


  public iniciarArray() {
    return this.almacenamientoAlertas;
  }
}
