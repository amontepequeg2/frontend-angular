import { Component, OnInit } from '@angular/core';
import { AvionService } from '../avion.service';
import { Avion } from '../avion';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-avion',
  templateUrl: './lista-avion.component.html',
  styleUrls: ['./lista-avion.component.css']
})
export class ListaAvionesComponent implements OnInit {

  aviones: Avion[];

  constructor(private avionServicio:AvionService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerAviones();
  }


  private obtenerAviones(){
    this.avionServicio.obtenerListaDeAviones().subscribe(dato => {
      this.aviones = dato;
    });
  }

  verDetallesDelEmpleado(id:number){
    this.router.navigate(['empleado-detalles',id]);
  }

}



