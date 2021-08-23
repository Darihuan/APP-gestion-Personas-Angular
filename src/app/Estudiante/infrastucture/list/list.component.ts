import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EstudianteOutput} from "../../model/EstudianteOutput";
import {EstudiantesService} from "../../aplication/estudiantes.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormularioComponent} from "../formulario/formulario.component";
import {DetallesComponent} from "../detalles/detalles.component";
import {AlertasService} from "../../../general/aplication/alertas/alertas.service";
import {ServicioDatosService} from "../../aplication/servicio-datos.service";
import {DataSource} from "@angular/cdk/collections";
import {calcPossibleSecurityContexts} from "@angular/compiler/src/template_parser/binding_parser";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'company_email', 'surname', 'id_profesor', 'branch', 'num_hours_week', 'acciones'];
  public dataSource: MatTableDataSource<EstudianteOutput>;
  public estudiantes: EstudianteOutput[] = [];

  constructor(private estudianteService: EstudiantesService, private dialog: MatDialog,
              private alertService: AlertasService, private datosService: ServicioDatosService) {

    this.dataSource = new MatTableDataSource(this.estudiantes);


  }

  ngOnInit(): void {
    this.cargardatos();
    this.datosService.datosactualizados();
  }


  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  public deleteEstudiante(alumno): void {

    this.estudianteService.deleteEstudiante(alumno.id).subscribe(() => {
        this.dataSource.data = this.dataSource.data.filter(estudiantes => estudiantes != alumno);

        this.alertService.crearAlerta(alumno.id, "borrado", "Estudiante");
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
}
