import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Matricula} from "../../model/matricula.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-edit-matricula',
  templateUrl: './edit-matricula.component.html',
  styleUrls: ['./edit-matricula.component.css']
})
export class EditMatriculaComponent implements OnInit {

  matricula: Matricula;
  editForm: FormGroup;
  submitted = false;
  errorText = null;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  turnos =[{valor:'MANHA', nome:'Manhã'},
  {valor:'TARDE', nome:'Tarde'},
  {valor:'NOITE', nome:'Noite'}];

  get id_aluno() { return this.editForm.get('id_aluno'); }
  get id_curso() { return this.editForm.get('id_curso'); }

  ngOnInit() {
    let matriculaId = window.localStorage.getItem("editMatriculaId");
    if(!matriculaId) {
      alert("Invalid action.")
      this.router.navigate(['list-matricula']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id_aluno: ['', Validators.required],
      id_curso: ['', Validators.required],
      turno: [''],
      data_matricula: ['']
    });
    let id_aluno = matriculaId.split("sep")[0];
    let id_curso = matriculaId.split("sep")[1];
    this.apiService.getMatriculaById(+id_aluno, +id_curso)
      .subscribe( data => {
        this.editForm.setValue({
          id_aluno: data.result.aluno.id,
          id_curso: data.result.curso.id,
          turno: data.result.turno,
          data_matricula: data.result.data_matricula.split("T")[0]
        });
      });
  }

  onSubmit() {
    this.submitted = true;
    this.errorText = "";

    if(this.editForm.invalid){
      return;
    }

    this.apiService.updateMatricula(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        if(data.status === 200) {
            alert("Matricula atualizada corretamente!")
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
