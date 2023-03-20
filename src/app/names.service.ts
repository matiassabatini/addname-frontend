import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Names } from './names';

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  //ESTA URL obtiene el listado de la base de datos
  private baseURL = "http://localhost:8080/api/v1/nombres";

  constructor(private httpClient: HttpClient) {



   }
//este metodo obtine los nombres de la lista
obtenerNombres():Observable<Names[]>{
  return this.httpClient.get<Names[]>(`${this.baseURL}`)
}

//este metodo regristra el nombre
addName(nombre:Names):Observable<object>{
  return this.httpClient.post(`${this.baseURL}`,nombre)

}
}
 