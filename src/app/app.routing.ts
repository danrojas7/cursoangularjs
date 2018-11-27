// Importar los módulos que tienen que ver con el routing de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes que se van a utilizar
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

// Variable para almacenas los objetos JSON con la información de las rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // Ruta inicial va a ser cuando la URL esté vacía
    { path: 'empleado', component: EmpleadoComponent },
    { path: 'fruta', component: FrutaComponent },
    { path: 'pagina-principal', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'contacto/:page', component: ContactoComponent },
    { path: 'coches', component: CochesComponent },
    { path: '**', component: HomeComponent }, // Una ruta por defecto, cuando se produzca un error de un componente que no exista, o cuando la ruta falle
];

// Hacer uso de las rutas, para poder cargar el priver de la ruta y que el routing funcione
export const appRoutingProviders: any[] = [];
// En este caso se le indica al routing que tome todas las rutas que estamos parametrizando para que las
// tome y el framework y las utilice para sus configuraciones de rutas.
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


