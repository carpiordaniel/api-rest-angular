import { Component } from '@angular/core';
import { ServicePeopleService } from 'src/app/service/service-people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  personas: any

  constructor(private servicePeopleService: ServicePeopleService){

  }
  

  ngOnInit(){
    this.getAll();
  }
  
  getAll(){
    return this.servicePeopleService.getData().subscribe( 
      data => {
        console.log("data::::", data)
        this.personas = data;
      },
      error => {
        console.error("Error::::", error)
      }
      )
  }

  delete(id: number){
    return this.servicePeopleService.delete(id).subscribe(
      data => {
        console.log("eliminado::::", data)
        this.getAll()
      },
      error => {
        console.error("Error al eliminar::::", error)
      }
      )
  }

}
