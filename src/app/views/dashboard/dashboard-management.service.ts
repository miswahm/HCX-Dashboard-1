import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DashboardManagementService {
  private httpOptions: any;
  constructor(private http: HttpClient) {
    let token = localStorage.getItem("token");
    //setting http headers for get requests
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: token,
      }),
    };
  }

  fetchTrendGraphData(startDate: string, endDate: string): Observable<any> {
    return this.http.get(
      environment.URL +
        `/dashboard/total?startDate=${startDate}&endDate=${endDate}&category=all`,
      this.httpOptions
    );
  }

  fetchSuccessErrorClaims(startDate: string, endDate: string): Observable<any> {
    return this.http.get(
      environment.URL +
        `/dashboard/trendanalysis/details?startDate=${startDate}&endDate=${endDate}`,
      this.httpOptions
    );
  }

  fetchProviders(startDate: string, endDate: string) {
    return this.http.get(
      environment.URL +
        `/dashboard/trendanalysis/hospital?startDate=${startDate}&endDate=${endDate}`,
      this.httpOptions
    );
  }
}
