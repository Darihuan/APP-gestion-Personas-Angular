import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Alerta} from "../../model/Alerta";

@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.scss']
})
export class AlertCardComponent {
  @Input()
  alerta: Alerta;
  @Output()
  alertaborrar: EventEmitter<Alerta>;

  constructor() {
    this.alertaborrar = new EventEmitter<Alerta>();
  }

  deleteAlert(alerta: Alerta): void {
    this.alertaborrar.emit(alerta);
  }
}
