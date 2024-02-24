import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicePeopleService } from 'src/app/service/service-people.service'; 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  formulario: FormGroup;

  constructor(private servicePeopleService: ServicePeopleService, private formBuilder: FormBuilder){
    this.formulario = this.formBuilder.group({
      nombre: 'x',
      apellido: 'y'
    })

  }


  crearPersona(){
    this.servicePeopleService.createPersona(this.formulario.value).subscribe(
      data=>{
        console.log("creado: ", data)
      },
      error => {
        console.error("error al crear: ", error);
        
      }
    )
  }

}
