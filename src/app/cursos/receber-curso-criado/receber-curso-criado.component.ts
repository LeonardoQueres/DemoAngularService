import { Component, OnInit } from '@angular/core';

import { CursoService } from '../curso-service.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string;
  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursoService.cursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    )
  }

}
