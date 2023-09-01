import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seleccion-multiple',
  templateUrl: './seleccion-multiple.component.html',
  styleUrls: ['./seleccion-multiple.component.css'],
})
export class SeleccionMultipleComponent {
  preguntas = [
    {
      pregunta: '¿Cuál es la capital de Francia?',
      opciones: ['Madrid', 'Berlín', 'París', 'Roma'],
      respuestaCorrecta: 'París',
      respuestaSeleccionada: '',
      esCorrecta: false,
    },
    {
      pregunta: '¿Cuántos litros de sangre tiene una persona adulta?',
      opciones: ['Tiene entre 2 y 4 litros', 'Tiene entre 4 y 6 litros', 'Tiene 7 litros', 'Tiene 0,5 litros'],
      respuestaCorrecta: 'Tiene entre 4 y 6 litros',
      respuestaSeleccionada: '',
      esCorrecta: false,
    },
    {
      pregunta: '¿Cuántos decimales tiene el número pi π?',
      opciones: ['Dos', 'Cien', 'Infinitos', 'Mil'],
      respuestaCorrecta: 'Tiene entre 4 y 6 litros',
      respuestaSeleccionada: '',
      esCorrecta: false,
    },
    {
      pregunta: '¿Cuál es el país más grande y el más pequeño del mundo?',
      opciones: ['Rusia y Vaticano', 'China y Nauru', 'Canadá y Mónaco', 'Estados Unidos y Malta'],
      respuestaCorrecta: 'Rusia y Vaticano',
      respuestaSeleccionada: '',
      esCorrecta: false,
    },
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  validarRespuestas() {
    for (const pregunta of this.preguntas) {
      pregunta.esCorrecta = pregunta.respuestaSeleccionada === pregunta.respuestaCorrecta;
    }
  }
  
}







