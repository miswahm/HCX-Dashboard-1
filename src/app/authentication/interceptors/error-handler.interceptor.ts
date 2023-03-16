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

//Time on 10 mins
const APP_XHR_TIMEOUT = 100000;

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

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
        // this._snackBar.open("Session Expired! Please Login again.", "Close");
        localStorage.removeItem("token");
        this.router.navigate(["/authentication/login"], {
          queryParams: { returnUrl: this.router.routerState.snapshot.url },
        });
        break;
      case 403: // Unauthorized
        // this._snackBar.open("Session Expired! Please Login again.", "Close");
        localStorage.removeItem("token");
        this.router.navigate(["/authentication/login"], {
          queryParams: { returnUrl: this.router.routerState.snapshot.url },
        });
        break;
      case 503: // Service Unavailable
        // this._snackBar.open(
        //   "Services are currently down. Please try again in some time.",
        //   "Close"
        // );
        break;
      case 500: // Internal Server Error
        // this._snackBar.open("Some error happened! Please try again.", "Close");
        break;
      case 504: //timeout Error
        // this._snackBar.open("Process timeout! Please try again.", "Close");
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
    }

    return throwError(() => errorResponse);
  }

  private handleRequestCompleted(): void {
    // console.log(`Request finished`);
  }
}
