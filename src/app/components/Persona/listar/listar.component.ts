import { Component, Input, OnInit } from '@angular/core';

import { PersonaOutput } from '../../../interfaces/PersonaDTOOutput';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { PersonaDTO } from 'src/app/interfaces/PersonaDTO';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  /*variables*/
  public personas:PersonaOutput[];

  constructor(private service:PersonaService,public router:Router) {
    this.personas=[];
  }

  ngOnInit(): void {
      this.service.getPersonas().subscribe(personaServer=>this.personas=personaServer)
  }




   /*metodos*/

  public recibirmensajePersona($event:PersonaDTO):void{
    let arraytemporal=this.personas.filter(elemento=>elemento!=$event)
    this.personas=arraytemporal;
  }







}
