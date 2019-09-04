import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso/curso.component';
import { CursoService } from './curso-service.service';
import { CriarCursosComponent } from './criar-cursos/criar-cursos.component';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';
import { LogService } from '../Shared/log.service';



@NgModule({
  declarations: [
    CursoComponent,
    CriarCursosComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CursoComponent,
    CriarCursosComponent
  ],
  providers:[
    
  ]

})
export class CursosModule { }
