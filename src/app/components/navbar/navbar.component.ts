import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Alerta } from 'src/app/interfaces/Alerta';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public service:PersonaService) { }

  ngOnInit(): void {
 
  }
  

  /*variables*/
  condicion:boolean;
  alerta:Alerta;

  /*funciones*/
  delete_alert(alerta:Alerta):void{
    this.service.alertas= this.service.alertas.filter(alertaarray=>alertaarray!=alerta)
    this.service.contador_alertas--;
  }



}


