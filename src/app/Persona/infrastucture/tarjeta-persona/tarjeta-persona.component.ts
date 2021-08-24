import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PersonaOutput} from 'src/app/Persona/model/PersonaDTOOutput';
import {PersonaService} from 'src/app/Persona/aplication/services/persona.service';
import {AlertasService} from "../../../general/aplication/services/alertas.service";
import {ConfirmarBorrarService} from "../../../compartido/confirmacion-eliminar/aplication/confirmar-borrar.service";
import {ConfirmacionEliminarComponent} from "../../../compartido/confirmacion-eliminar/infrastructure/confirmacion-eliminar.component";


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


  constructor(private service: PersonaService, private alertaService: AlertasService,private borrarDialog:ConfirmarBorrarService) {
    this.borrado = new EventEmitter();
    this.actualizar = new EventEmitter();
  }

  /*metodos*/

  public borrarPersona(persona: PersonaOutput): void {
    let id: number = persona.id;
    this.borrarDialog.confirmardialog.open(ConfirmacionEliminarComponent).afterClosed().subscribe(confirmar=>{
      if(confirmar)
      this.service.borrarPersona(persona.id)
        .subscribe((borrado) => {
            this.borrado.emit(persona);
            this.alertaService.crearAlerta(id, "borrado", "Persona")
          }, (err) => {
            console.log(err);
          }
        )
      }
    )




  }


}
