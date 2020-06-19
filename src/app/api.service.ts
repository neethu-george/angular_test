import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string ="https://hiit.ria.rocks/videos_api/cdn/com.rstream.crafts?versionCode=40&lurl=Canvas%20painting%20ideas";


 constructor(private http : HttpClient){}

 getFeedPage(){
   return this.http.get(
     this.url
   ).pipe(tap(response => response),
   catchError(this.errorHandler)) 
 }

 errorHandler(error :HttpErrorResponse)
 {
   return throwError(error.message || "serviceError")
 }
 





  
}
