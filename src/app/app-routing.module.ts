import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './pages/inicio/inicio'
import { ProductosComponent } from './pages/productos/productos'

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  
  { path: 'inicio',  component: InicioComponent, data: { title: 'Dashboard V1'} },
  { path: 'productos',  component: ProductosComponent, data: { title: 'Dashboard V1'} },

];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
