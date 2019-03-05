import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Aluno} from "../model/aluno.model";
import {Curso} from "../model/curso.model";
import {Matricula} from "../model/matricula.model";
import {MatriculaDto} from "../model/matricula-dto.model";
import {Disciplina} from "../model/disciplina.model";
import {DisciplinaDto} from "../model/disciplina-dto.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/';
  baseUserUrl: string = this.baseUrl + 'users/';
  baseAlunoUrl: string = this.baseUrl + 'alunos/';
  baseCursoUrl: string = this.baseUrl + 'cursos/';
  baseMatriculaUrl: string = this.baseUrl + 'matriculas/';
  baseDisciplinaUrl: string = this.baseUrl + 'disciplinas/';

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'token/generate-token', loginPayload);
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUserUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUserUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUserUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUserUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUserUrl + id);
  }


  getAlunos() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseAlunoUrl);
  }

  getAlunoById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseAlunoUrl + id);
  }

  createAluno(aluno: Aluno): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseAlunoUrl, aluno);
  }

  updateAluno(aluno: Aluno): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseAlunoUrl + aluno.id, aluno);
  }

  deleteAluno(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseAlunoUrl + id);
  }


  getCursos() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseCursoUrl);
  }

  getCursoById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseCursoUrl + id);
  }

  createCurso(curso: Curso): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseCursoUrl, curso);
  }

  updateCurso(curso: Curso): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseCursoUrl + curso.id, curso);
  }

  deleteCurso(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseCursoUrl + id);
  }


  getMatriculas() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseMatriculaUrl);
  }

  getMatriculaById(id_aluno: number, id_curso: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseMatriculaUrl + id_aluno + '/' + id_curso);
  }

  createMatricula(matricula: Matricula): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseMatriculaUrl, matricula);
  }

  updateMatricula(matricula: MatriculaDto): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseMatriculaUrl + matricula.id_aluno + '/' + matricula.id_curso, matricula);
  }

  deleteMatricula(id_aluno: number, id_curso: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseMatriculaUrl + id_aluno + '/' + id_curso);
  }



  getDisciplinas(cursoFiltro?: number) : Observable<ApiResponse> {
    let url = this.baseDisciplinaUrl;
    if(cursoFiltro){
      url = url + '?'; 
      url = url + 'cursoFiltro=' + cursoFiltro;
    }
    return this.http.get<ApiResponse>(url);
  }

  getDisciplinaById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseDisciplinaUrl + id);
  }

  createDisciplina(disciplina: Disciplina): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseDisciplinaUrl, disciplina);
  }

  updateDisciplina(disciplina: DisciplinaDto): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseDisciplinaUrl + disciplina.id, disciplina);
  }

  deleteDisciplina(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseDisciplinaUrl + id);
  }
}
