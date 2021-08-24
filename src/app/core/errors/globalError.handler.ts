import {ErrorHandler, Injectable, NgZone} from "@angular/core";
import {ErrorService} from "../../compartido/error/aplication/error.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler{
  constructor(private errordialog:ErrorService,private zone:NgZone) {
  }
public handleError(error: Error) {
  this.zone.run(()=>{
    this.errordialog.lanzarerror(error);
  console.log(error);
  })

}

}
