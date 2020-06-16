import { Component, OnInit, Input } from '@angular/core';
import { AtmsService } from 'src/app/services/atms.service';
import { Atm } from 'src/app/interfaces/atm.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Lista de Atms a mostrar
  atmList: Atm[];

  //Lista de parametros que se ingresan desde el formulario de busqueda
  street:string;
  zipcode:string;
  houseNumber:string;
  city:string;
  type:string="ING";

  //metodo para controlar las busquedas
  onSubmit(){
    console.log(this.city);
    this.getAtms(this.city,this.zipcode,this.street,this.houseNumber,this.type);
  }
  constructor(private atmService: AtmsService) { }

  //llamada al metodo del service pasandole los parametros
  getAtms = (city?:string,zipcode?:string,street?:string,houseNumber?:string,type?:string) => {
    this.atmService.getAtms(city,zipcode,street,houseNumber,type).subscribe((atms: Atm[]) => {
      this.atmList = atms;
    })
  };
  ngOnInit(): void {
    //Inicializacion de la lista con los parametros vacios
    this.getAtms(this.city,this.zipcode,this.street,this.houseNumber,this.type);
  }

}
