import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class TrendsManagementService {
  private httpOptions: any;
  constructor(private http: HttpClient) {
    //setting http headers for get requests
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: environment.token,
      }),
    };
  }

  fetchSuccessErrorClaims(startDate: string, endDate: string): Observable<any> {
    return this.http.get(
      environment.URL +
        `/dashboard/trendanalysis/details?startDate=${startDate}&endDate=${endDate}`,
      this.httpOptions
    );
  }
}
