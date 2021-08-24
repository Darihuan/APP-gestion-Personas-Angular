import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EstudianteOutput} from "../../model/EstudianteOutput";
import {EstudiantesService} from "../../aplication/services/estudiantes.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormularioComponent} from "../formulario/formulario.component";
import {DetallesComponent} from "../detalles/detalles.component";
import {AlertasService} from "../../../general/aplication/services/alertas.service";
import {ServicioDatosService} from "../../aplication/services/servicio-datos.service";
import {ActivatedRoute} from "@angular/router";
import {ConfirmarBorrarService} from "../../../compartido/confirmacion-eliminar/aplication/confirmar-borrar.service";
import {ConfirmacionEliminarComponent} from "../../../compartido/confirmacion-eliminar/infrastructure/confirmacion-eliminar.component";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'surname','num_hours_week','company_email', 'id_profesor', 'branch', 'acciones'];
  public dataSource: MatTableDataSource<EstudianteOutput>;
  public estudiantes: EstudianteOutput[] = [];

  constructor(private estudianteService: EstudiantesService, private dialog: MatDialog,
              private alertService: AlertasService, private datosService: ServicioDatosService,private rutaActiva:ActivatedRoute
  ,private confirmarBorrar:ConfirmarBorrarService) {

    this.dataSource = new MatTableDataSource(this.estudiantes);


  }

  ngOnInit(): void {

    this.cargardatos();
    this.datosactualizados();

  }


  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  public deleteEstudiante(alumno): void {
let confirmar=false;
   this.confirmarBorrar.confirmardialog.open(ConfirmacionEliminarComponent).afterClosed().subscribe(confirmar=>{

     if(confirmar)
       this.estudianteService.deleteEstudiante(alumno.id).subscribe(() => {
           this.dataSource.data = this.dataSource.data.filter(estudiantes => estudiantes != alumno);
           this.alertService.crearAlerta(alumno.id, "borrado", "Estudiante");
         }
       );

   }
);



  }

  public modificar(estudiante: EstudianteOutput): void {
    let configuracion = new MatDialogConfig();
    configuracion.autoFocus = true;
    configuracion.width = "60%";
    configuracion.data = estudiante;
    this.dialog.open(FormularioComponent, configuracion).afterClosed().subscribe();


  }

  public detalle(estudiante: EstudianteOutput): void {
    let configuracion = new MatDialogConfig();
    configuracion.autoFocus = true;
    configuracion.width = "auto";
    configuracion.data = estudiante;
    this.dialog.open(DetallesComponent, configuracion);
  }

  public cargardatos(): void {

    this.datosService.getEmiterEstudiantes().subscribe(estudiantes => {

        this.dataSource.data = estudiantes;
      },
      err => console.error(err));
  }

  public datosactualizados(): void {

      this.estudiantes =this.rutaActiva.snapshot.data.estudiantes;
      this.datosService.getEmiterEstudiantes().emit(this.estudiantes);
    }



}
