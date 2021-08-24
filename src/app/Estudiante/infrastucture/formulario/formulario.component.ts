import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EstudiantesService} from "../../aplication/services/estudiantes.service";
import {EstudianteOutput} from "../../model/EstudianteOutput";
import {MatDialogRef} from "@angular/material/dialog";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AlertasService} from "../../../general/aplication/services/alertas.service";
import {PersonaDTO} from "../../../Persona/model/PersonaDTO";
import {ServicioDatosService} from "../../aplication/services/servicio-datos.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{
  public miformulario: FormGroup;
  public actualizar: boolean = false;

  constructor(private formBuilder: FormBuilder, private estudianteService: EstudiantesService,
              private formRef: MatDialogRef<FormularioComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private alertService: AlertasService, private dataService: ServicioDatosService) {

  }
  ngOnInit():void {
    this.miformulario = this.iniciarFormulario();
    if (this.data != undefined) {
      this.cargardatos(this.data);
      this.actualizar = true;
    }
  }

  public createStudent(): void {
    let estudiate: EstudianteOutput = this.miformulario.value;
    estudiate = this.imagenpordefecto(estudiate);

    this.estudianteService.saveEstudiante(estudiate).subscribe((creado) => {
      this.formRef.close();
      this.dataService.datosactualizados()
      this.alertService.crearAlerta(creado.id, "creado", "Estudiante");

    });


  }

  public iniciarFormulario(): FormGroup {
    return this.formBuilder.group({
      'id': [''],
      'user': [''],
      'password': [''],
      'name': [''],
      'surname': [''],
      'company_email': [''],
      'personal_email': [''],
      'city': [''],
      'active': false,
      'imagen_url': [''],
      'created_date': [''],
      'num_hours_week': [''],
      'id_profesor': [''],
      'branch': ['']


    });
  }

  cargardatos(data: EstudianteOutput) {
    this.miformulario.patchValue(data)

  }

  updateStudent() {
    let estudiate: EstudianteOutput = this.miformulario.value;
    estudiate = this.imagenpordefecto(estudiate);

    this.estudianteService.updateStudent(estudiate).subscribe((actualizado) => {
      this.formRef.close();
      this.dataService.datosactualizados()
      this.alertService.crearAlerta(actualizado.id, "actualizado", "Estudiante");
    }, (err) => {
      console.error(err);
    })
  }

  public imagenpordefecto(comprobar: EstudianteOutput): EstudianteOutput {
    let devolver: EstudianteOutput = comprobar;
    if (comprobar.imagen_url.length <= 1) {

      let random = Math.floor(Math.random() * 600 + 1);
      let url = `https://rickandmortyapi.com/api/character/avatar/${random}.jpeg`;


      devolver.imagen_url = url


    }
    return devolver;

  }
}
