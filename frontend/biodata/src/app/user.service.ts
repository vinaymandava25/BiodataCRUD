import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  updateUserUrl:string='/biodata-service/user/save';
  createUserUrl:string='/biodata-service/user/save';
  allUsersUrl:string='/biodata-service/user/users';
  deleteUserUrl:string='/biodata-service/user/delete';
  constructor(private http:HttpClient) { }

  update(updatedUser): Observable<any>{
    console.log(updatedUser);
    return this.http.put<any>(this.updateUserUrl, updatedUser, httpOptions);
  }
  saveUser(userData): Observable<any>  {
    return this.http.post<any>(this.createUserUrl, userData, httpOptions);
  }
  getUsers()  {
    return this.http.get<any>(this.allUsersUrl);
  }
  deleteUser(id): Observable<any>  {
    return this.http.delete<any>(this.deleteUserUrl+'/'+id, httpOptions);
  }

}
