import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  url='http://127.0.0.1:3000/'

  constructor(private http: HttpClient) { }

  //Insertar prestamos
  insertarCredito(prestamo:any): Observable<any> {
    return this.http.post(`${this.url}add_creditos`, prestamo);
  }

  //Modificar prestamos
  modificarCredito(prestamo:any, id_prestamo:number) {
    return this.http.put(`${this.url}/update_creditos/`+id_prestamo, prestamo);
  }

  //obtener todos prestamos
  recuperarTodosCredito() {
    return this.http.get(`${this.url}getAll_creditos`);
  }

  //Eliminar prestamos
  eliminarCredito(id_prestamo:number) {
    return this.http.delete(`${this.url}delete_creditos/${id_prestamo}`);
  }

}
