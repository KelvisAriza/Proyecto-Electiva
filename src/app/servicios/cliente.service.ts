import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url='http://127.0.0.1:3000/'

  constructor(private http: HttpClient) { }

  //Insertar clientes
  insertarCliente(cliente:any): Observable<any> {
    return this.http.post(`${this.url}add_clientes`, cliente);
  }

  //Modificar clientes
  modificarCliente(cliente:any, id_cliente:number) {
    return this.http.put(`${this.url}/update_clientes/`+id_cliente, cliente);
  }

  //obtener todos clientes
  recuperarTodosCliente() {
    return this.http.get(`${this.url}getAll_clientes`);
  }

  //Eliminar Clientes
  eliminarCliente(id_cliente:number) {
    return this.http.delete(`${this.url}delete_clientes/${id_cliente}`);
  }

}
