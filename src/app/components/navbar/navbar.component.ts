import { Component,  OnInit} from '@angular/core';
import { Alerta } from 'src/app/interfaces/Alerta';
import { PersonaService } from 'src/app/services/persona/persona.service';
import {AlertasService} from "../../services/alertas/alertas.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private service:PersonaService,private alertaService:AlertasService) { }

  ngOnInit(): void {
    if(localStorage.getItem("alertas")==null){
      localStorage.setItem("alertas","[]")
    }

   this.alertas=this.alertaService.almacenamientoAlertas;
    this.alertaService.cargardatos().subscribe(arrayactualizado=>{this.alertas=arrayactualizado;});
  }


  /*variables*/
  condicion:boolean;
  alerta:Alerta;
  alertas:Alerta[]=[];

  /*funciones*/

  delete_alert(alerta):void{
    this.alertas=this.alertaService.delete_alert(alerta);
  }


}


