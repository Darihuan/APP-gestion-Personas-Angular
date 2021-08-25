import {ErrorHandler, NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {GlobalErrorHandler} from "./globalError.handler";
import {HttpErrorInterceptor} from "./http-error.interceptor";



@NgModule({
  declarations: [],
  imports: [],

  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
   {

      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class ErrorHandlerModule {
}
