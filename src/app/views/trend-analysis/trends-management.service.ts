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
    let token = localStorage.getItem("token");
    //setting http headers for get requests
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: token,
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

  fetchTrendGraphData(
    startDate: string,
    endDate: string,
    category: string
  ): Observable<any> {
    return this.http.get(
      environment.URL +
        `/dashboard/total?startDate=${startDate}&endDate=${endDate}&category=${category}`,
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
