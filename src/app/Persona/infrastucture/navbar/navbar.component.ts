import {Component, OnInit} from '@angular/core';
import {Alerta} from 'src/app/general/model/Alerta';
import {PersonaService} from 'src/app/Persona/aplication/persona.service';
import {AlertasService} from "../../../general/aplication/alertas/alertas.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  /*variables*/
  condicion: boolean;
  alertas: Alerta[];

  constructor(private service: PersonaService, private alertaService: AlertasService) {
    this.alertas = this.alertaService.iniciarArray();

    this.alertaService.cargarDatos().subscribe(arrayActualizado => {
      this.alertas = arrayActualizado;
    });
  }

  /*funciones*/

  public deleteAlert(alerta:Alerta): void {
    this.alertas = this.alertaService.deleteAlerta(alerta);
  }


}


