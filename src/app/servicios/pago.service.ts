import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  url='http://127.0.0.1:3000/'

  constructor(private http: HttpClient) { }

  //Insertar pagos
  insertarPago(pago:any): Observable<any> {
    return this.http.post(`${this.url}add_pagos`, pago);
  }

  //Modificar clientes
  modificarPago(pago:any, id_pago:number) {
    return this.http.put(`${this.url}/update_pagos/`+id_pago, pago);
  }

  //obtener todos clientes
  recuperarTodosPago() {
    return this.http.get(`${this.url}getAll_pagos`);
  }

  //Eliminar Clientes
  eliminarPago(id_pago:number) {
    return this.http.delete(`${this.url}delete_pagos/${id_pago}`);
  }

}
