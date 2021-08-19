import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EstudianteOutput} from "../model/EstudianteOutput";


@Injectable({
  providedIn: 'root'
})

export class EstudiantesService {

  private readonly apiUrl: string = "http://localhost:3000/estudiantes/";

  constructor(private httpClient: HttpClient) {
  }

  public saveEstudiante(estudiante: EstudianteOutput): Observable<EstudianteOutput> {
    return this.httpClient.post<EstudianteOutput>(this.apiUrl, estudiante);
  }

  public getEstudiantes(): Observable<EstudianteOutput[]> {
    return this.httpClient.get<EstudianteOutput[]>(this.apiUrl);
  }

  deleteEstudiante(id: number): Observable<any> {
    return this.httpClient.delete(this.apiUrl + id);

  }

  updateStudent(estudiante: EstudianteOutput): Observable<EstudianteOutput> {
    return this.httpClient.put<EstudianteOutput>(this.apiUrl + estudiante.id, estudiante);
  }
}



