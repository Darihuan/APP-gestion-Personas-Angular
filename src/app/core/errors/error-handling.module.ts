import {CommonModule} from "@angular/common";
import {ErrorHandler, NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {GlobalErrorHandler} from "./globalError.handler";
import {HttpErrorInterceptor} from "./http-error.interceptor";



@NgModule({
  declarations: [],
  imports: [],

  providers: [
    {
      // processes all errors
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
   {
      // interceptor for HTTP errors
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class ErrorHandlerModule {
}
