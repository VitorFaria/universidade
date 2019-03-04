import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Matricula} from "../../model/matricula.model";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-list-matricula',
  templateUrl: './list-matricula.component.html',
  styleUrls: ['./list-matricula.component.css']
})
export class ListMatriculaComponent implements OnInit {

  matriculas: Matricula[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getMatriculas()
      .subscribe( data => {
          this.matriculas = data.result;
      });
  }

  deleteMatricula(matricula: Matricula): void {
    this.apiService.deleteMatricula(matricula.aluno.id, matricula.curso.id)
      .subscribe( data => {
        this.matriculas = this.matriculas.filter(u => u !== matricula);
      })
  };

  editMatricula(matricula: Matricula): void {
    window.localStorage.removeItem("editMatriculaId");
    window.localStorage.setItem("editMatriculaId", matricula.aluno.id.toString()+ "sep" + matricula.curso.id.toString());
    this.router.navigate(['edit-matricula']);
  };

  addMatricula(): void {
    this.router.navigate(['add-matricula']);
  };
}
