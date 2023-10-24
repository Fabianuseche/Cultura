import { Component } from '@angular/core';

@Component({
  selector: 'app-juego2',
  templateUrl: './juego2.component.html',
  styleUrls: ['./juego2.component.css']
})
export class Juego2Component {
//   TOTAL_PREGUNTAS = 10;
//   TIEMPO_DEL_JUEGO = 180;
//   bd_juego = [
//     {
//       id: 'A',
//       pregunta: "¿Qué valor promueve generar la armonía con la sociedad en el transporte público?",
//       respuesta: "paz"
//     },
//     {
//       id: 'B',
//       pregunta: "¿Qué se debe evitar en el transporte público para mantener la paz?",
//       respuesta: "conflictos"
//     },
//     {
//       id: 'C',
//       pregunta: "¿Cómo debemos tratar a los demás pasajeros en el transporte público?",
//       respuesta: "respeto"
//     },
//     {
//       id: 'D',
//       pregunta: "¿Qué debe hacerse en caso de discrepancias en el transporte público?",
//       respuesta: "dialogar"
//     },
//     {
//       id: 'E',
//       pregunta: "¿Cuál es el valor que fomenta la cultura de paz en el transporte público?",
//       respuesta: "armonía"
//     },
//     {
//       id: 'F',
//       pregunta: "¿Qué actitud se debe adoptar ante situaciones estresantes en el transporte público?",
//       respuesta: "tolerancia"
//     },
//     {
//       id: 'G',
//       pregunta: "¿Qué se espera de los usuarios en términos de seguridad en el transporte público?",
//       respuesta: "colaboración"
//     },
//     {
//       id: 'H',
//       pregunta: "¿Cuál es el objetivo principal de promover la cultura de paz en el transporte público?",
//       respuesta: "convivencia"
//     },
//     {
//       id: 'I',
//       pregunta: "¿Qué se busca fomentar entre los pasajeros cuando se cede el asiento a personas con vulnerabilidad?",
//       respuesta: "solidaridad"
//     },
//     {
//       id: 'J',
//       pregunta: "¿Cuál es el significado de la frase 'dejar salir es ingresar más rápido' en el contexto de la cultura de paz en el transporte público?",
//       respuesta: "eficiencia"
//     },
//   ];

//   estadoPreguntas: number[] = Array(this.TOTAL_PREGUNTAS).fill(0);
//   cantidadAcertadas = 0;
//   numPreguntaActual = -1;
//   timeLeft = this.TIEMPO_DEL_JUEGO;
//   countdown: any;
//   respuesta = '';
//   showPantallaInicial = true;
//   showPantallaJuego = false;
//   showPantallaFinal = false;

//   comenzar() {
//     this.showPantallaInicial = false;
//     this.showPantallaJuego = true;
//     this.iniciarTiempo();
//     this.cargarPregunta();
//   }

//   cargarPregunta() {
//     this.numPreguntaActual++;
//     if (this.numPreguntaActual >= this.TOTAL_PREGUNTAS) {
//       this.numPreguntaActual = 0;
//     }

//     if (this.estadoPreguntas.indexOf(0) >= 0) {
//       while (this.estadoPreguntas[this.numPreguntaActual] === 1) {
//         this.numPreguntaActual++;
//         if (this.numPreguntaActual >= this.TOTAL_PREGUNTAS) {
//           this.numPreguntaActual = 0;
//         }
//       }
//     } else {
//       clearInterval(this.countdown);
//       this.mostrarPantallaFinal();
//     }
//   }

//   controlarRespuesta(txtRespuesta: string) {
//     if (txtRespuesta.toLowerCase() === this.bd_juego[this.numPreguntaActual].respuesta.toLowerCase()) {
//       this.cantidadAcertadas++;
//       this.estadoPreguntas[this.numPreguntaActual] = 1;
//     } else {
//       this.estadoPreguntas[this.numPreguntaActual] = 1;
//     }
//     this.respuesta = ''; // Limpiar la respuesta
//     this.cargarPregunta();
//   }

//   pasar() {
//     this.cargarPregunta();
//   }

//   iniciarTiempo() { // Cambiando el nombre de la función
//     this.countdown = setInterval(() => {
//       this.timeLeft--;
//       if (this.timeLeft < 0) {
//         clearInterval(this.countdown);
//         this.mostrarPantallaFinal();
//       }
//     }, 1000);
//   }

//   mostrarPantallaFinal() {
//     this.showPantallaFinal = true;
//     this.showPantallaJuego = false;
//   }

//   recomenzar() {
//     console.log("comenzar se llamo")
//     this.numPreguntaActual = -1;
//     this.timeLeft = this.TIEMPO_DEL_JUEGO;
//     this.cantidadAcertadas = 0;
//     this.estadoPreguntas = Array(this.TOTAL_PREGUNTAS).fill(0);
//     this.showPantallaFinal = false;
//     this.showPantallaJuego = true;
//     this.iniciarTiempo();
//     this.cargarPregunta();
//   }
}
