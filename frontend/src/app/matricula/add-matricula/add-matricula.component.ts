import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../core/api.service";
import {Curso} from "../../model/curso.model";
import {Aluno} from "../../model/aluno.model";

@Component({
  selector: 'app-add-matricula',
  templateUrl: './add-matricula.component.html',
  styleUrls: ['./add-matricula.component.css']
})
export class AddMatriculaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  cursos: Curso[];
  alunos: Aluno[];
  addForm: FormGroup;
  submitted = false;
  errorText = null;

  turnos =[{valor:'MANHA', nome:'Manhã'},
  {valor:'TARDE', nome:'Tarde'},
  {valor:'NOITE', nome:'Noite'}];

  get id_aluno() { return this.addForm.get('id_aluno'); }
  get id_curso() { return this.addForm.get('id_curso'); }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id_aluno: ['', Validators.required],
      id_curso: ['', Validators.required],
      turno: ['MANHA'],
      data_matricula: ['']
    });
    this.getCursos();
    this.getAlunos();
  }

  getCursos(): void {
    this.apiService.getCursos()
      .subscribe( data => {
          this.cursos = data.result;
      });
  };

  getAlunos(): void {
    this.apiService.getAlunos()
      .subscribe( data => {
          this.alunos = data.result;
      });
  };

  onSubmit() {
    this.submitted = true;
    this.errorText = "";

    if(this.addForm.invalid){
      return;
    }

    this.apiService.createMatricula(this.addForm.value)
      .subscribe( data => {
        if(data.status === 200) {
            this.router.navigate(['list-matricula']);
          }else {
            this.errorText = data.message;
          }
      },
      error =>{
        this.errorText = error.message;
      });
  }

}
