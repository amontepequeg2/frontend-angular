import { AvionService } from './../avion.service';
import { Avion } from './../avion';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registrar-avion',
  templateUrl: './registrar-avion.component.html',
  styleUrls: ['./registrar-avion.component.css']
})
export class RegistrarAvionComponent implements OnInit {

  avion : Avion = new Avion();

  constructor(private avionServicio:AvionService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarAvion(){
    this.avionServicio.registrarAvion(this.avion).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeAviones();
    },error => console.log(error));
  }

  irALaListaDeAviones(){
    this.router.navigate(['/aviones']);
    swal('Avion registrado',`El Avion ${this.avion.nombre_Avion} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarAvion();
  }
}

function swal(arg0: string, arg1: string, arg2: string) {
  throw new Error('Function not implemented.');
}
