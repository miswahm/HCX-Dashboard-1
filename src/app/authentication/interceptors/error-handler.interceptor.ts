import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, TimeoutError, throwError } from "rxjs";
import { Router } from "@angular/router";
import { catchError, finalize, map, timeout } from "rxjs/operators";
import { NbGlobalPhysicalPosition, NbToastrService } from "@nebular/theme";

//Time on 10 mins
const APP_XHR_TIMEOUT = 100000;

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toastrService: NbToastrService) {}

  private toastrConfig = {
    status: "danger",
    destroyByClick: true,
    duration: 2000,
    hasIcon: true,
    position: NbGlobalPhysicalPosition.TOP_RIGHT,
    preventDuplicates: true,
  };

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(this.performRequest(request)).pipe(
      timeout(APP_XHR_TIMEOUT),
      map((res) => this.handleSuccessfulResponse(res)),
      catchError((err) => this.handleErrorResponse(err)),
      finalize(this.handleRequestCompleted.bind(this))
    );
  }

  /**To Set headers */
  private performRequest(req: HttpRequest<any>): HttpRequest<any> {
    // let headers: HttpHeaders = req.headers;
    // headers = headers.set('interceptor', `working`);

    // return req.clone({ setHeaders: { interceptor: 'working' } });
    return req;
  }

  private handleSuccessfulResponse(event: any) {
    // console.log('response at interceptor', event);

    // if (event instanceof HttpResponse) {
    //   event = event.clone({ body: event.body.response });
    // }

    return event;
  }

  private handleErrorResponse(errorResponse: any): Observable<HttpEvent<any>> {
    console.log("error at interceptor", errorResponse);

    if (errorResponse instanceof TimeoutError) {
      return throwError(() => "Timeout Exception");
    }

    switch (errorResponse.status) {
      case 401: // Unauthorized
      localStorage.removeItem("token");
        this.toastrService.show(
          "Session Expired! Please Login again.",
          this.toastrConfig
        );
        localStorage.removeItem("token");
        this.router.navigate(["/authentication/login"], {
          queryParams: { returnUrl: this.router.routerState.snapshot.url },
        });
        break;
      case 403: // Unauthorized
      localStorage.removeItem("token");
        this.toastrService.show(
          "",
          "Session Expired! Please Login again.",
          this.toastrConfig
        );
        localStorage.removeItem("token");
        this.router.navigate(["/authentication/login"], {
          queryParams: { returnUrl: this.router.routerState.snapshot.url },
        });
        break;
      case 503: // Service Unavailable
        this.toastrService.show(
          "",
          "Services are currently down. Please try again in some time.",
          this.toastrConfig
        );

        break;
      case 500: // Internal Server Error
        this.toastrService.show(
          "",
          "Some error happened! Please try again.",
          this.toastrConfig
        );
        break;
      case 504: //timeout Error
        this.toastrService.show(
          "",
          "Process timeout! Please try again.",
          this.toastrConfig
        );
        break;
      default: // Other Error
        if (errorResponse.error.message) {
          // this._snackBar.open(errorResponse.error.message, "Close");
        } else {
          // this._snackBar.open(
          //   "Services are currently down. Please try again in some time.",
          //   "Close"
          // );
        }

        this.toastrService.show(
          "",
          "Server Currently Down! Please try again after few minutes.",
          this.toastrConfig
        );
    }

    return throwError(() => errorResponse);
  }

  private handleRequestCompleted(): void {
    // console.log(`Request finished`);
  }
}
