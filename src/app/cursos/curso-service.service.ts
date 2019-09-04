import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../Shared/log.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
 
  cursos: string[] = ['Angular 8', 'C#'];
  cursoCriado = new EventEmitter<string>();
  static CriouNovocurso = new EventEmitter<string>();
  
  constructor(private logservice: LogService) { 
    console.log('CursoService');
  }

  GetCursos(){
    this.logservice.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCursos(curso: string){
    this.logservice.consoleLog(`Criando um novo cursos: ${curso}`);
    this.cursos.push(curso);
    this.cursoCriado.emit(curso);
    CursoService.CriouNovocurso.emit(curso);
  }
}
