import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Place } from './interfaces/place.interface';
import { PlacesService } from './services/places.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularios';

  constructor(
    private placesService: PlacesService
  ){ }

  formulario = new FormGroup({
    nombre : new FormControl(),
    correo :new FormControl(),
    mensaje :new FormControl()
  });

  persona(form: any){
    const personas: Place = {
      nombre: form.nombre,
      correo: form.correo,
      mensaje: form.mensaje
    }
    console.log(personas);
    this.placesService.addPlace(personas)
  }
}

