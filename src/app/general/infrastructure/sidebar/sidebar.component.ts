import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Alerta} from "../../model/Alerta";
import {AlertasService} from "../../aplication/alertas/alertas.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input()
  condicion: boolean;
  alertas: Alerta[];

  @Output()
  alertaspadre: EventEmitter<Alerta[]>;

  constructor(private alertaService: AlertasService) {

    this.alertas = this.alertaService.iniciarArray();
    this.alertaspadre = new EventEmitter<Alerta[]>();

    this.alertaService.cargarDatos().subscribe(arrayActualizado => {
      this.alertas = arrayActualizado;
      this.emitiralertas(arrayActualizado);
    }, err => {
      console.error(err);
    });
  }

  public deleteAlert(alerta: Alerta): void {
    this.alertas = this.alertaService.deleteAlerta(alerta);
    this.emitiralertas(this.alertas);
  }

  public emitiralertas(alertas: Alerta[]) {
    this.alertaspadre.emit(alertas);
  }


}
