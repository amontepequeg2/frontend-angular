import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avion } from './avion';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  //Esta URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/Aviones";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los aviones
  obtenerListaDeAviones():Observable<Avion[]>{
    return this.httpClient.get<Avion[]>(`${this.baseURL}/listarAviones`);
  }

  //este metodo nos sirve para registrar un avion
  registrarAvion(avion:Avion) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,avion);
  }



  }

