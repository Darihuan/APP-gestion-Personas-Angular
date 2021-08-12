import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { PersonaOutput } from 'src/app/interfaces/PersonaDTOOutput';
import { PersonaService } from 'src/app/services/persona/persona.service';


@Component({
  selector: 'app-tarjeta-persona',
  templateUrl: './tarjeta-persona.component.html',
  styleUrls: ['./tarjeta-persona.component.scss']
})

export class TarjetaPersonaComponent implements OnInit {
  
  constructor(private service:PersonaService) { }
  ngOnInit(): void {}

  /*variables*/ 
  @Input()
  persona:PersonaOutput;
  @Output()
   borrado:EventEmitter<PersonaOutput>=new EventEmitter();
  @Output()
   actualizar:EventEmitter<PersonaOutput>=new EventEmitter();
  
  
   /*metodos*/
   
  borrarPersona(persona):void{
    this.service.borrarPersona(persona.id);
    this.borrado.emit(persona) }

  actualizarPersona(persona):void{ this.service.persona_actualizar=persona  }



}
