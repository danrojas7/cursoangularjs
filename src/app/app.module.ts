import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Se utiliza el routing 
import { routing, appRoutingProviders } from './app.routing';
// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { HijoComponent } from './hijo/hijo.component';


@NgModule({ // Crear un módulo, este caso crea el módulo de AppModule el cual es el módulo
  // de entrada a la aplicación AngularJS
  declarations: [ // Crear nuevas directivas, pipes y componentes,
    // o declarar para registrarlos y poderlos utilizar en la aplicación de manera globlal
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent,
    HijoComponent
  ],
  imports: [ // Cargar diferentes módulos, funcionalidades y servicios, cargar módulos del Framwork y los
    // que se van creando para que los utilice la aplicación para que funcionen de manera
    // global (router y configuración de las rutas).
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ], // Servicios y configraciones
  bootstrap: [
    AppComponent
  ] // Se indica el componente principal el cual la aplicación se va
  // a lanzar o con el que el módulo va a lanzarse
})
export class AppModule { }
