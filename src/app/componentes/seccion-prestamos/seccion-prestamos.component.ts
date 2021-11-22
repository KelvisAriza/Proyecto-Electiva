import { Component, OnInit } from '@angular/core';
import { PrestamoService } from 'src/app/servicios/prestamo.service';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-seccion-prestamos',
  templateUrl: './seccion-prestamos.component.html',
  styleUrls: ['./seccion-prestamos.component.css']
})
export class SeccionPrestamosComponent implements OnInit {

  myform:FormGroup
  id_editar:number=0;

  constructor(private _builder:FormBuilder,private prestamo: PrestamoService, private cliente: ClienteService) {

    this.myform=this._builder.group({
      codigo_prestamo: ['', [Validators.required]],
      valor_prestamo: ['', [Validators.required]],
      num_cuotas: ['', [Validators.required]],
      meses_plazo: ['', [Validators.required]],
      fecha_inicio_prestamo: ['', [Validators.required]],
      fecha_final_prestamo: ['', [Validators.required]],
      intereses: ['', [Validators.required]],
      valor_final_prestamo: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      id_cliente: ['', [Validators.required]]
    })
  }

  lista_prestamos: any;
  lista_clientes: any;
  nuevopre={

    codigo_prestamo:null,
    valor_prestamo:null,
    num_cuotas:null,
    meses_plazo:null,
    fecha_inicio_prestamo:null,
    fecha_final_prestamo:null,
    intereses:null,
    valor_final_prestamo:null,
    estado:null,
    id_cliente:null
  }

////// cuando carga el componente se activa ngonInit y llama el metodo  recuperartodosPrestamos
  ngOnInit(): void {
    this.recuperarTodosCredito();
    this.recuperarTodosCliente();
  }

  /// este metodo llama al servicio que se llama recuperar todo que tiene la
  //ruta para la api--> recuperar todo = getAll_creditos
  recuperarTodosCredito() {
    this.prestamo.recuperarTodosCredito().subscribe(result => this.lista_prestamos = result);
  }

  recuperarTodosCliente() {
    this.cliente.recuperarTodosCliente().subscribe(result => this.lista_clientes = result);
  }

  //este metodo carga los datos del formulario y llama al servicio con metodo insertarPrestamo
  // que tiene la ruta de agregar  insertarCliente=add_credito
  insertarPrestamo(value:any) {
    this.nuevopre={

      codigo_prestamo:value.codigo_prestamo,
      valor_prestamo:value.valor_prestamo,
      num_cuotas:value.num_cuotas,
      meses_plazo:value.meses_plazo,
      fecha_inicio_prestamo:value.fecha_inicio_prestamo,
      fecha_final_prestamo:value.fecha_final_prestamo,
      intereses:value.intereses,
      valor_final_prestamo:value.valor_final_prestamo,
      estado:value.estado,
      id_cliente:value.id_cliente
    }
    this.prestamo.insertarCredito(this.nuevopre).subscribe(datos => {
      console.log(datos)
      alert("Prestamo agregado ")
      this.myform.reset()
      this.recuperarTodosCredito()
    });
  }


  // este metodo obtiene el id del prestamo a eliminar
  // llama el metodo baja del servicio  eliminarPrestamo=delete_prestamo/<id>
  eliminarCredito(id_prestamo:number) {
    if (window.confirm("Esta seguro de eliminar el registro Numero "+id_prestamo+" ?")) {
      this.prestamo.eliminarCredito(id_prestamo).subscribe(datos => {
        console.log(datos)
        alert("Prestamo eliminado ")
        this.myform.reset()
        this.recuperarTodosCredito()
      });
    }
  }

  // este metodo obtiene el id_prestamo del prestamo a editar
  // llama el metodo eliminarPrestamo del servicio  modificarPrestamo=update_prestamo/<id_prestamo>
  modificarCredito(value:any) {
    this.nuevopre={
      codigo_prestamo:value.codigo_prestamo,
      valor_prestamo:value.valor_prestamo,
      num_cuotas:value.num_cuotas,
      meses_plazo:value.meses_plazo,
      fecha_inicio_prestamo:value.fecha_inicio_prestamo,
      fecha_final_prestamo:value.fecha_final_prestamo,
      intereses:value.intereses,
      valor_final_prestamo:value.valor_final_prestamo,
      estado:value.estado,
      id_cliente:value.id_cliente
    }
    this.prestamo.modificarCredito(this.nuevopre,this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("Prestamo editado ")
      this.myform.reset()
      this.recuperarTodosCredito()
    });
  }

  //este metodo carga los datos de la fila al formulario
  seleccionarCredito(pre_edi:any) {
    this.id_editar=pre_edi['id_prestamo'];
    this.myform.setValue({

      codigo_prestamo:pre_edi['codigo_prestamo'],
      valor_prestamo:pre_edi['valor_prestamo'],
      num_cuotas:pre_edi['num_cuotas'],
      meses_plazo:pre_edi['meses_plazo'],
      fecha_inicio_prestamo:pre_edi['fecha_inicio_prestamo'],
      fecha_final_prestamo:pre_edi['fecha_final_prestamo'],
      intereses:pre_edi['intereses'],
      valor_final_prestamo:pre_edi['valor_final_prestamo'],
      estado:pre_edi['estado'],
      id_cliente:pre_edi['id_cliente']
    })
  }



}
