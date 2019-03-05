import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AddAlunoComponent } from './aluno/add-aluno/add-aluno.component';
import { EditAlunoComponent } from './aluno/edit-aluno/edit-aluno.component';
import { ListAlunoComponent } from './aluno/list-aluno/list-aluno.component';
import { AddCursoComponent } from './curso/add-curso/add-curso.component';
import { EditCursoComponent } from './curso/edit-curso/edit-curso.component';
import { ListCursoComponent } from './curso/list-curso/list-curso.component';
import { AddMatriculaComponent } from './matricula/add-matricula/add-matricula.component';
import { EditMatriculaComponent } from './matricula/edit-matricula/edit-matricula.component';
import { ListMatriculaComponent } from './matricula/list-matricula/list-matricula.component';
import { ListDisciplinaComponent } from './disciplina/list-disciplina/list-disciplina.component';
import {ApiService} from "./core/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {TokenInterceptor} from "./core/interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    AddAlunoComponent,
    EditAlunoComponent,
    ListAlunoComponent,
    AddCursoComponent,
    EditCursoComponent,
    ListCursoComponent,
    AddMatriculaComponent,
    EditMatriculaComponent,
    ListMatriculaComponent,
    ListDisciplinaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
