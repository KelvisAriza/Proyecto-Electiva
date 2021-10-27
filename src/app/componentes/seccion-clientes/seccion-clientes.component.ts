import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-seccion-clientes',
  templateUrl: './seccion-clientes.component.html',
  styleUrls: ['./seccion-clientes.component.css']
})
export class SeccionClientesComponent implements OnInit {

  myform:FormGroup
  id_editar:number=0;

  constructor(private _builder:FormBuilder,private cliente: ClienteService) {

    this.myform=this._builder.group({
      tipo_documento: ['', [Validators.required, Validators.maxLength(50)]]  ,
      num_documento: ['', [Validators.required]]  ,
      nombre_completo: ['', [Validators.required, Validators.maxLength(100)]],
      telefono: ['', [Validators.required, Validators.maxLength(10)]]  ,
      direccion: ['', [Validators.required, Validators.maxLength(50)]]  ,
      email: ['', [Validators.required, Validators.maxLength(100)]],
      ocupacion: ['', [Validators.required, Validators.maxLength(50)]]  ,
      tipo_contrato: ['', [Validators.required, Validators.maxLength(50)]]  ,
      antiguedad_laboral: ['', [Validators.required]]  ,
      tipo_vivienda: ['', [Validators.required, Validators.maxLength(50)]]  ,
      ingreso_mensual: ['', [Validators.required]]
    })
  }

  lista_clientes: any;
  nuevocli={

    tipo_documento:null,
    num_documento:null,
    nombre_completo:null,
    telefono:null,
    direccion:null,
    email:null,
    ocupacion:null,
    tipo_contrato:null,
    antiguedad_laboral:null,
    tipo_vivienda:null,
    ingreso_mensual:null

  }

////// cuando carga el componente se activa ngonInit y llama el metodo  recuperartodosCliente
  ngOnInit(): void {
    this.recuperarTodosCliente();
  }

  /// este metodo llama al servicio que se llama recuperar todo que tiene la
  //ruta para la api--> recuperar todo = getAll_cliente
  recuperarTodosCliente() {
    this.cliente.recuperarTodosCliente().subscribe(result => this.lista_clientes = result);
  }

  //este metodo carga los datos del formulario y llama al servicio con metodo insertarCliente
  // que tiene la ruta de agregar  insertarCliente=add_cliente
  insertarCliente(value:any) {
    this.nuevocli={

      tipo_documento:value.tipo_documento,
      num_documento:value.num_documento,
      nombre_completo:value.nombre_completo,
      telefono:value.telefono,
      direccion:value.direccion,
      email:value.email,
      ocupacion:value.ocupacion,
      tipo_contrato:value.tipo_contrato,
      antiguedad_laboral:value.antiguedad_laboral,
      tipo_vivienda:value.tipo_vivienda,
      ingreso_mensual:value.ingreso_mensual

    }
    this.cliente.insertarCliente(this.nuevocli).subscribe(datos => {
      console.log(datos)
      alert("Cliente agregado ")
      this.myform.reset()
      this.recuperarTodosCliente()
    });
  }


  // este metodo obtiene el id del cliente a eliminar
  // llama el metodo baja del servicio  eliminarCliente=delete_cliente/<id>
  eliminarCliente(id_cliente:number) {
    if (window.confirm("Esta seguro de eliminar el registro Numero "+id_cliente+" ?")) {
      this.cliente.eliminarCliente(id_cliente).subscribe(datos => {
        console.log(datos)
        alert("Cliente eliminado ")
        this.myform.reset()
        this.recuperarTodosCliente()
      });
    }
  }

  // este metodo obtiene el id_cliente del cliente a editar
  // llama el metodo eliminarCliente del servicio  modificarCliente=update_cliente/<id_cliente>
  modificarCliente(value:any) {
    this.nuevocli={
      tipo_documento:value.tipo_documento,
      num_documento:value.num_documento,
      nombre_completo:value.nombre_completo,
      telefono:value.telefono,
      direccion:value.direccion,
      email:value.email,
      ocupacion:value.ocupacion,
      tipo_contrato:value.tipo_contrato,
      antiguedad_laboral:value.antiguedad_laboral,
      tipo_vivienda:value.tipo_vivienda,
      ingreso_mensual:value.ingreso_mensual
    }
    this.cliente.modificarCliente(this.nuevocli,this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("Cliente editado ")
      this.myform.reset()
      this.recuperarTodosCliente()
    });
  }

  //este metodo carga los datos de la fila al formulario
  seleccionarCliente(cli_edi:any) {
    this.id_editar=cli_edi['id_cliente'];
    this.myform.setValue({
      tipo_documento:cli_edi['tipo_documento'],
      num_documento:cli_edi['num_documento'],
      nombre_completo:cli_edi['nombre_completo'],
      telefono:cli_edi['telefono'],
      direccion:cli_edi['direccion'],
      email:cli_edi['email'],
      ocupacion:cli_edi['ocupacion'],
      tipo_contrato:cli_edi['tipo_contrato'],
      antiguedad_laboral:cli_edi['antiguedad_laboral'],
      tipo_vivienda:cli_edi['tipo_vivienda'],
      ingreso_mensual:cli_edi['ingreso_mensual']
    })
  }

}
