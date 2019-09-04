import { Component, OnInit } from '@angular/core';

import { CursoService } from '../curso-service.service';

@Component({
  selector: 'app-criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrls: ['./criar-cursos.component.css'],
  providers:[CursoService]
})
export class CriarCursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursos = this.cursoService.GetCursos();
  }

  onAddCursos(curso: string){
    this.cursoService.addCursos(curso);    
  }
}
