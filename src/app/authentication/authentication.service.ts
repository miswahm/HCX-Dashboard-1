import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "leaflet";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../@core/data/users";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(body): any {
    // post to fake back end, this url will be handled there...
    // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
    // return this.http
    //   .post<any>(`/users/authenticate`, { username, password })
    //   .pipe(
    //     map((user: any) => {
    //       user.authdata = window.btoa(username + ":" + password);
    //       localStorage.setItem("currentUser", JSON.stringify(user));
    //       this.currentUserSubject.next(user);
    //       return user;
    //     })
    //   );

    return this.http.post(environment.URL + `/payor/user/login`, body);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("token");
    this.currentUserSubject.next(null);
  }
}
