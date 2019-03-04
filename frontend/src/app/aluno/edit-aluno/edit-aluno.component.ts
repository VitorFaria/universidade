import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Aluno} from "../../model/aluno.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-edit-aluno',
  templateUrl: './edit-aluno.component.html',
  styleUrls: ['./edit-aluno.component.css']
})
export class EditAlunoComponent implements OnInit {

  aluno: Aluno;
  editForm: FormGroup;
  submitted = false;
  errorText = null;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  get email() { return this.editForm.get('email'); }
  get cpf() { return this.editForm.get('cpf'); }
  get nome() { return this.editForm.get('nome'); }

  ngOnInit() {
    let alunoId = window.localStorage.getItem("editAlunoId");
    if(!alunoId) {
      alert("Invalid action.")
      this.router.navigate(['list-aluno']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern('[0-9]{11}$')]],
      email: ['', [Validators.email]],
      data_nascimento: ['']
    });
    this.apiService.getAlunoById(+alunoId)
      .subscribe( data => {
        if(data.result.data_nascimento)
          data.result.data_nascimento = data.result.data_nascimento.split("T")[0];
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.submitted = true;
    this.errorText = "";

    if(this.editForm.invalid){
      return;
    }

    this.apiService.updateAluno(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        if(data.status === 200) {
            alert("Aluno atualizado corretamente!")
            this.router.navigate(['list-aluno']);
          }else {
            this.errorText = data.message;
          }
      },
      error =>{
        this.errorText = error.message;
      });
  }

}
