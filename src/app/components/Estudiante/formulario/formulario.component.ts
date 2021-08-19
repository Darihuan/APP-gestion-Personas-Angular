import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EstudiantesService} from "../../../services/estudiantes/estudiantes.service";
import {EstudianteOutput} from "../../../interfaces/EstudianteOutput";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  miformulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private estudianteService: EstudiantesService,
              private formRef: MatDialogRef<FormularioComponent>) {
    this.miformulario = this.iniciarFormulario();
  }

  ngOnInit(): void {
  }

  public createStudent(): void {

    let estudiate: EstudianteOutput = this.miformulario.value
    this.estudianteService.saveEstudiante(estudiate).subscribe((creado) => this.formRef.close());


  }

  public iniciarFormulario(): FormGroup {
    return this.formBuilder.group({
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
}
