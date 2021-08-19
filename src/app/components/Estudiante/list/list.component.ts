import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EstudianteOutput} from "../../../interfaces/EstudianteOutput";
import {EstudiantesService} from "../../../services/estudiantes/estudiantes.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {
  arrayEstudiantes:EstudianteOutput[];
  displayedColumns: string[] = ['id', 'name','company_email', 'surname', 'id_profesor','branch','num_hours_week','acciones'];
  dataSource:MatTableDataSource<EstudianteOutput>;
  constructor(private estudianteService:EstudiantesService) {

  }

  ngOnInit(): void {

      this.estudianteService.getEstudiantes().subscribe(estudiastes=>{
        this.arrayEstudiantes=estudiastes;
        this.dataSource=new MatTableDataSource(this.arrayEstudiantes);
      });


  }


  applyFilter(event:Event):void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();

  }

  deleteEstudiante(alumno):void {

    this.estudianteService.deleteEstudiante(alumno.id).subscribe(()=>{
      this.dataSource.data=this.dataSource.data.filter(estudiantes=>estudiantes!=alumno)
    }
   );

  }
}
