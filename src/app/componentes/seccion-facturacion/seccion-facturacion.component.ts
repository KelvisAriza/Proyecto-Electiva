import { Component, OnInit } from '@angular/core';
import { PagoService } from 'src/app/servicios/pago.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-seccion-facturacion',
  templateUrl: './seccion-facturacion.component.html',
  styleUrls: ['./seccion-facturacion.component.css']
})
export class SeccionFacturacionComponent implements OnInit {

  myform:FormGroup
  id_editar:number=0;

  constructor(private _builder:FormBuilder,private pago: PagoService) {

    this.myform=this._builder.group({
      valor_pago: ['', [Validators.required, Validators.maxLength(50)]]  ,
      fecha_pago: ['', [Validators.required]]  ,
      estado: ['', [Validators.required, Validators.maxLength(100)]],
      id_prestamo: ['', [Validators.required]]  ,
    })

  }

  lista_pagos: any;
  nuevopag={

    valor_pago:null,
    fecha_pago:null,
    estado:null,
    id_prestamo:null

  }
////// cuando carga el componente se activa ngonInit y llama el metodo  recuperartodosPago
  ngOnInit(): void {
    this.recuperarTodosPago();
  }

  /// este metodo llama al servicio que se llama recuperar todo que tiene la
  //ruta para la api--> recuperar todo = getAll_pagos
  recuperarTodosPago() {
    this.pago.recuperarTodosPago().subscribe(result => this.lista_pagos = result);
  }

  //este metodo carga los datos del formulario y llama al servicio con metodo insertarPago
  // que tiene la ruta de agregar  insertarPago=add_pago
  insertarPago(value:any) {
    this.nuevopag={

    valor_pago:value.valor_pago,
    fecha_pago:value.fecha_pago,
    estado:value.estado,
    id_prestamo:value.id_prestamo
    }
    this.pago.insertarPago(this.nuevopag).subscribe(datos => {
      console.log(datos)
      alert("Pago agregado ")
      this.myform.reset()
      this.recuperarTodosPago()
    });
  }

   // este metodo obtiene el id del pago a eliminar
  // llama el metodo baja del servicio  eliminarPago=delete_pago/<id>
  eliminarPago(id_pago:number) {
    if (window.confirm("Esta seguro de eliminar el registro Numero "+id_pago+" ?")) {
      this.pago.eliminarPago(id_pago).subscribe(datos => {
        console.log(datos)
        alert("Pago eliminado ")
        this.myform.reset()
        this.recuperarTodosPago()
      });
    }
  }

   // este metodo obtiene el id_pago del pago a editar
  // llama el metodo eliminarPago del servicio  modificarPago=update_pagos/<id_pago>
  modificarPago(value:any) {
    this.nuevopag={
    valor_pago:value.valor_pago,
    fecha_pago:value.fecha_pago,
    estado:value.estado,
    id_prestamo:value.id_prestamo
    }
    this.pago.modificarPago(this.nuevopag,this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("Pago editado ")
      this.myform.reset()
      this.recuperarTodosPago()
    });
  }

  //este metodo carga los datos de la fila al formulario
  seleccionarPago(pag_edi:any) {
    this.id_editar=pag_edi['id_pago'];
    this.myform.setValue({

      valor_pago:pag_edi['valor_pago'],
      fecha_pago:pag_edi['fecha_pago'],
      estado:pag_edi['estado'],
      id_prestamo:pag_edi['id_prestamo']
    })
  }

}
