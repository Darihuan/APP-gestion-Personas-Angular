import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { PersonaOutput } from '../../interfaces/PersonaDTOOutput';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private service:ApiServiceService) { }
  personas:PersonaOutput[]=[];
  ngOnInit(): void { 
    
    this.service.getPersonas().then(elementos=>elementos
      .forEach(elemento=>this.personas.push(elemento)));
    console.log(this.personas)

  }
  recibirmensajePersona($event){

    
    
    let arraytemporal=this.personas.filter(elemento=>elemento!=$event)
    this.personas=arraytemporal;
  }
  
  




}
