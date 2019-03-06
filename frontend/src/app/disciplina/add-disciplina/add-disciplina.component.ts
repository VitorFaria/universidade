import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../core/api.service";
import {Curso} from "../../model/curso.model";

@Component({
  selector: 'app-add-disciplina',
  templateUrl: './add-disciplina.component.html',
  styleUrls: ['./add-disciplina.component.css']
})
export class AddDisciplinaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;
  cursos: Curso[];
  submitted = false;
  errorText = null;

  get nome() { return this.addForm.get('nome'); }
  get id_curso() { return this.addForm.get('id_curso'); }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      id_curso: ['', Validators.required]
    });
    this.getCursos();
  }

  getCursos(): void {
    this.apiService.getCursos()
      .subscribe( data => {
          this.cursos = data.result;
      });
  };

  onSubmit() {
    this.submitted = true;
    this.errorText = "";

    if(this.addForm.invalid){
      return;
    }

    this.apiService.createDisciplina(this.addForm.value)
      .subscribe( data => {
        if(data.status === 200) {
            this.router.navigate(['list-disciplina']);
          }else {
            this.errorText = data.message;
          }
      },
      error =>{
        this.errorText = error.message;
      });
  }

}
