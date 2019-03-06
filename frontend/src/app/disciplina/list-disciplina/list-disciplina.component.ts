import { Component, OnInit , Inject, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms'; 
import {Router} from "@angular/router";
import {Disciplina} from "../../model/disciplina.model";
import {Curso} from "../../model/curso.model";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-list-disciplina',
  templateUrl: './list-disciplina.component.html',
  styleUrls: ['./list-disciplina.component.css']
})
export class ListDisciplinaComponent implements OnInit {

  disciplinas: Disciplina[];
  cursos: Curso[];
  errorText = null;
  form: FormGroup;

  constructor(private router: Router, private apiService: ApiService, private formBuilder: FormBuilder) { 
    this.form = new FormGroup({filtroCurso: new FormControl(0), filtroNome: new FormControl()});
  }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.getDisciplinas();
    this.getCursos();
  };

  getDisciplinas(): void {
    this.apiService.getDisciplinas(this.form.get("filtroCurso").value, this.form.get("filtroNome").value)
      .subscribe( data => {
          this.disciplinas = data.result;
      });
  };

  getCursos(): void {
    this.apiService.getCursos()
      .subscribe( data => {
          this.cursos = data.result;
      });
  };

  filter(): void {
    this.getDisciplinas();
  };

  cleanFilter(): void {
    this.form = new FormGroup({filtroCurso: new FormControl(0), filtroNome: new FormControl()});
    this.filter();
  };

  deleteDisciplina(disciplina: Disciplina): void {
    this.errorText = null;
    this.apiService.deleteDisciplina(disciplina.id)
      .subscribe( data => {
        if(data.status === 200) {
            this.disciplinas = this.disciplinas.filter(u => u !== disciplina);
          }else {
            this.errorText = data.message;
          }
      })
  };

  editDisciplina(disciplina: Disciplina): void {
    window.localStorage.removeItem("editDisciplinaId");
    window.localStorage.setItem("editDisciplinaId", disciplina.id.toString());
    this.router.navigate(['edit-disciplina']);
  };

  addDisciplina(): void {
    this.router.navigate(['add-disciplina']);
  };
}
