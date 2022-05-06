import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ResponseType } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CRUDServiceService {

  constructor(private http:HttpClient) {
   }

    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

    getAll(){
       return this.http.get("https://notepad-backend-101.herokuapp.com/")
      //  .subscribe(mydata => {console.log(mydata) });
   }
   getId(id){
     return this.http.get(`https://notepad-backend-101.herokuapp.com/${id}`)
   }

   post(body){

    return this.http.post("https://notepad-backend-101.herokuapp.com/",body,this.httpOptions)

   }

   update(id,body){

    return this.http.put(`https://notepad-backend-101.herokuapp.com/${id}`,body,this.httpOptions)

   }

   delete(id){
    return this.http.delete(`https://notepad-backend-101.herokuapp.com/${id}`)
     
   }



}
