import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { PrestamosComponent } from './paginas/prestamos/prestamos.component';
import { FacturacionComponent } from './paginas/facturacion/facturacion.component';
import { PieComponent } from './componentes/pie/pie.component';
import { SeccionInicioComponent } from './componentes/seccion-inicio/seccion-inicio.component';
import { SeccionClientesComponent } from './componentes/seccion-clientes/seccion-clientes.component';
import { SeccionFacturacionComponent } from './componentes/seccion-facturacion/seccion-facturacion.component';
import { SeccionPrestamosComponent } from './componentes/seccion-prestamos/seccion-prestamos.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SeccionAyudaComponent } from './componentes/seccion-ayuda/seccion-ayuda.component';
import { AyudaComponent } from './paginas/ayuda/ayuda.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    ClientesComponent,
    PrestamosComponent,
    FacturacionComponent,
    PieComponent,
    SeccionInicioComponent,
    SeccionClientesComponent,
    SeccionFacturacionComponent,
    SeccionPrestamosComponent,
    EncabezadoComponent,
    SeccionAyudaComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
