import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PersonaOutput} from 'src/app/Persona/model/PersonaDTOOutput';
import {PersonaService} from 'src/app/Persona/aplication/persona.service';
import {AlertasService} from "../../../general/aplication/alertas/alertas.service";


@Component({
  selector: 'app-tarjeta-persona',
  templateUrl: './tarjeta-persona.component.html',
  styleUrls: ['./tarjeta-persona.component.scss']
})

export class TarjetaPersonaComponent {
  /*variables*/
  @Input()
  persona: PersonaOutput;
  @Output()
  borrado: EventEmitter<PersonaOutput>;
  @Output()
  actualizar: EventEmitter<PersonaOutput>;


  constructor(private service: PersonaService, private alertaService: AlertasService) {
    this.borrado = new EventEmitter();
    this.actualizar = new EventEmitter();
  }

  /*metodos*/

  public borrarPersona(persona: PersonaOutput): void {
    let id:number=persona.id;
    this.service.borrarPersona(persona.id)
      .subscribe((borrado) => {

        this.alertaService.crearAlerta(id, "borrado","Persona")
      })

    this.borrado.emit(persona);
  }


}
