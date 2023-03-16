import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ClaimsManagementService {
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

  fetchTable(
    startDate: string,
    endDate: string,
    category: string,
    provider: string
  ) {
    return this.http.get(
      environment.URL +
        `/dashboard/claims/tables?startDate=${startDate}&endDate=${endDate}&category=${category}&provider=${provider}`,
      this.httpOptions
    );
  }
}
