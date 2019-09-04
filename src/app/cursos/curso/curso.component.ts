import { Component, OnInit } from '@angular/core';

import { CursoService } from '../curso-service.service';

@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
 
  curso: string[] = [];
  //cursoService: CursoService;

  constructor() { //private cursoService: CursoService
    //this.cursoService = new CursoService();    
   }

  ngOnInit() {
    //this.curso = this.cursoService.GetCursos();
    CursoService.CriouNovocurso.subscribe(
      cursos => this.curso.push(cursos)
    );
  }

}
