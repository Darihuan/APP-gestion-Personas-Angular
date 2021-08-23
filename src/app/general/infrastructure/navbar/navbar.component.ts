import {Component, EventEmitter, OnInit} from '@angular/core';
import {Alerta} from 'src/app/general/model/Alerta';
import {PersonaService} from 'src/app/Persona/aplication/persona.service';
import {AlertasService} from "../../aplication/alertas/alertas.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  /*variables*/
  condicion: boolean;
  alertas: Alerta[] = [];


  constructor(private service: PersonaService) {

  }

  ngOnInit(): void {
    this.contadoralertas(JSON.parse(localStorage.getItem('alertas')));
  }


  contadoralertas(alerta: Alerta[]): void {
    this.alertas = alerta;
  }
}


