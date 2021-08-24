import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {ErrorService} from "../../compartido/error/aplication/error.service";
import {CargaService} from "../../compartido/carga/aplication/carga.service";
import {Observable, throwError} from "rxjs";
import {catchError, delay, finalize} from "rxjs/operators";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private ventanaError: ErrorService, private ventaCarga: CargaService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ventaCarga.abrirventanacarga();
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log("Error http:", error);
        return throwError(error);
      }),
      finalize(() => this.ventaCarga.cerrarventana())
    ) as Observable<HttpEvent<any>>;
  }
}
