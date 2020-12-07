import { Enrollee } from '../model/enrollee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrolleesService {

  private readonly ENROLLEES_API = '/enrollees';

  constructor(
  private http: HttpClient
  ) { }

  public getEnrollees(): Observable<any>{
    return this.http.get(this.ENROLLEES_API);
  }

  public getEnrolleesById(id: string): Observable<any>{
    return this.http.get(this.ENROLLEES_API + '/' + id);
  }

  public putEnrollees(id: string, enrollees: Enrollee): Observable<any>{
    return this.http.put(this.ENROLLEES_API + '/' + id, enrollees);
  }

}
