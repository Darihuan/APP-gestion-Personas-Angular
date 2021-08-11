import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { PersonaOutput } from '../../interfaces/PersonaDTOOutput';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private service:ApiServiceService,public router:Router) { }
  personas:PersonaOutput[]=[];
  
  personaActualizarPadre=undefined;
 
  ngOnInit(): void { 
    
    this.service.getPersonas().then(elementos=>elementos
      .forEach(elemento=>this.personas.push(elemento)));
   

  }
  recibirmensajePersona($event){
    let arraytemporal=this.personas.filter(elemento=>elemento!=$event)
    this.personas=arraytemporal;
  }

  
  




}
