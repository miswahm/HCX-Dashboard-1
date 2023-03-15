import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DashboardManagementService {
  private httpOptions: any;
  constructor(private http: HttpClient) {
    //setting http headers for get requests
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: environment.token,
      }),
    };
  }

  fetchTrendGraphData(startDate: string, endDate: string) {
    return this.http.get(
      environment.URL +
        `/dashboard/total?startDate=${startDate}&endDate=${endDate}&category=all`,
      this.httpOptions
    );
  }
}
