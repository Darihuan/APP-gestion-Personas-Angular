import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Alerta } from 'src/app/interfaces/Alerta';
import { PersonaOutput } from 'src/app/interfaces/PersonaDTOOutput';
import { PersonaService } from 'src/app/services/persona/persona.service';
import {AlertasService} from "../../../services/alertas/alertas.service";


@Component({
  selector: 'app-tarjeta-persona',
  templateUrl: './tarjeta-persona.component.html',
  styleUrls: ['./tarjeta-persona.component.scss']
})

export class TarjetaPersonaComponent implements OnInit {

  constructor(private service:PersonaService,private alertaService:AlertasService) { }
  ngOnInit(): void {}

  /*variables*/
  @Input()
  persona:PersonaOutput;
  @Output()
   borrado:EventEmitter<PersonaOutput>=new EventEmitter();
  @Output()
   actualizar:EventEmitter<PersonaOutput>=new EventEmitter();


   /*metodos*/

  borrarPersona(persona:PersonaOutput):void{
    this.service.borrarPersona(persona.id)
    .subscribe((borrado)=>{ this.alertaService.crearAlertaBorrar(borrado)})

    this.borrado.emit(persona);
  }



}
