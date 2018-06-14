import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



//importar componentes..


import { FrutaComponent } from './fruta/fruta.component';
import { FrutaDinamicaComponent } from './fruta-dinamica/fruta-dinamica.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { CochesComponent } from './coches/coches.component';

const appRoutes: Routes = [
    { path: '', component: EmpleadoComponent },
    { path: 'fruta', component: FrutaComponent },
    { path: 'frutadinamica', component: FrutaDinamicaComponent },
    { path: 'Empleado', component: EmpleadoComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'coches', component: CochesComponent },
    { path: 'contacto/:page/:page2', component: ContactoComponent },
    { path: 'contacto/:page', component: ContactoComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: EmpleadoComponent }


];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
