import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAvionesComponent } from './lista-avion/lista-avion.component';
import { RegistrarAvionComponent } from './registrar-avion/registrar-avion.component';






const routes: Routes = [
{path : 'aviones',component:ListaAvionesComponent},
{path:'',redirectTo:'aviones',pathMatch:'full'},
{path : 'registrar-avion',component : RegistrarAvionComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
