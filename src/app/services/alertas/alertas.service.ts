import {EventEmitter, Injectable} from '@angular/core';
import {Alerta} from "../../interfaces/Alerta";
import {PersonaDTO} from "../../interfaces/PersonaDTO";
import {PersonaOutput} from "../../interfaces/PersonaDTOOutput";

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }


  /*variables*/
  almacenamientoAlertas:Alerta[]=JSON.parse(localStorage.getItem(('alertas')));
  eventoAlertas:EventEmitter<Alerta[]>=new EventEmitter<Alerta[]>();



  /*metodos*/

  cargardatos():EventEmitter<Alerta[]>{
   return this.eventoAlertas;
  }

  crearAlertaSubmit(persona:PersonaDTO):void{
    let alerta = new Alerta("Creado", "Persona con id:" + persona.id + " ha sido creada", Math.floor(Math.random() * 999999));
    let arrayAlertas = JSON.parse(localStorage.getItem("alertas"));

    arrayAlertas.push(alerta);
    this.almacenamientoAlertas.push(alerta);

    localStorage.setItem("alertas", JSON.stringify(arrayAlertas));
    this.eventoAlertas.emit(this.almacenamientoAlertas);
  }
  crearAlertaActualizar(persona:PersonaDTO):void{
    let alerta = new Alerta("Actualización", "Persona con id:" + persona.id + " ha sido actualizada", Math.floor(Math.random() * 999999));
    let arrayAlertas = JSON.parse(localStorage.getItem("alertas"));

    arrayAlertas.push(alerta);
    this.almacenamientoAlertas.push(alerta);

    localStorage.setItem("alertas", JSON.stringify(arrayAlertas));
    this.eventoAlertas.emit(this.almacenamientoAlertas);
  }
  crearAlertaBorrar(persona:PersonaDTO):void{
    let alerta = new Alerta("Borrado", "Persona con id:" + persona.id + " ha sido borrado", Math.floor(Math.random() * 999999));
    let arrayAlertas = JSON.parse(localStorage.getItem("alertas"));

    arrayAlertas.push(alerta);
    this.almacenamientoAlertas.push(alerta);

    localStorage.setItem("alertas", JSON.stringify(arrayAlertas));
    this.eventoAlertas.emit(this.almacenamientoAlertas);
  }

  delete_alert(alerta:Alerta):Alerta[]{

    let arrayAlertas:Alerta[]= JSON.parse(localStorage.getItem("alertas")).filter(alertaarray=>alertaarray.id!=alerta.id);

    localStorage.setItem("alertas",JSON.stringify(arrayAlertas));
    this.almacenamientoAlertas=arrayAlertas;

    this.eventoAlertas.emit(this.almacenamientoAlertas);
    return arrayAlertas;

  }


}
