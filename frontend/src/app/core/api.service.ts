import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Aluno} from "../model/aluno.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/';
  baseUserUrl: string = this.baseUrl + 'users/';
  baseAlunoUrl: string = this.baseUrl + 'alunos/';

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
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
}
