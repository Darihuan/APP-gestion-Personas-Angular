import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { PersonaOutput } from 'src/app/interfaces/PersonaDTOOutput';
import { ListarComponent } from '../listar/listar.component';

import { PersonaDTO } from 'src/app/interfaces/PersonaDTO';


@Component({
  selector: 'app-tarjeta-persona',
  templateUrl: './tarjeta-persona.component.html',
  styleUrls: ['./tarjeta-persona.component.scss']
})
export class TarjetaPersonaComponent implements OnInit {
  
  constructor(private service:ApiServiceService) { }
  
  ngOnInit(): void {
  }
  @Input()
  persona:PersonaOutput;

  @Output()
   borrado:EventEmitter<PersonaOutput>=new EventEmitter();
  @Output()
   actualizar:EventEmitter<PersonaOutput>=new EventEmitter();
   
  borrarPersona(persona){
    this.service.borrarPersona(persona.id);
    this.borrado.emit(persona) }

  actualizarPersona(persona){ this.service.personaActualizar=persona  }



}
