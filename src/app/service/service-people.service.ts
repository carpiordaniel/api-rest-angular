import { Injectable } from '@angular/core';
import { environment } from '../util/env'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicePeopleService {


  private URL_API = environment.apiUrl;

  constructor(private http: HttpClient ) { }



  getData(){

    return this.http.get(this.URL_API);

  }

  createPersona(datos: any){
    return this.http.post(`${this.URL_API}/create`, datos)
  }

  delete(id: number){
    return this.http.delete(`${this.URL_API}/delete/${id}`);
  }



}
