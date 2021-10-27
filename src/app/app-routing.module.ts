import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { PrestamosComponent } from './paginas/prestamos/prestamos.component';
import { FacturacionComponent } from './paginas/facturacion/facturacion.component';
import { AyudaComponent } from './paginas/ayuda/ayuda.component'


const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'prestamos',component:PrestamosComponent},
  {path:'facturacion',component:FacturacionComponent},
  {path:'ayudas',component:AyudaComponent},
  {path:'',redirectTo:'/inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
